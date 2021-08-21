import { Request, Response, Router } from "express";

import Api from './api';
import ExchangeRateModel from '../models/exchange-rates';
import ExchangeRatesController from '../controllers/exchange-rates';
import IRouter from './router';
import Logger from '../configurations/logger';

class ExchangeRatesRouter implements IRouter {

    public router: Router = Router();
    public service: string = '/api/exchange-rates';
    private controller: ExchangeRatesController;

    constructor() {

        this.controller = new ExchangeRatesController();
        this.router.get('/', this.getExchangeRates.bind(this));
    }

    async getExchangeRates(req: Request, res: Response) {

        try {

            this.controller.getExchangeRates().then((response: ExchangeRateModel) => {

                Api.ok(req, res, response);
            });

        } catch (error: any) {

            Logger.error('[ExchangeRatesRouter] getExchangeRates');
            Api.error(req, res, error);
        }
    }
}

export default ExchangeRatesRouter;