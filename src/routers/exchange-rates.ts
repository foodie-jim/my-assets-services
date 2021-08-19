import { Request, Response, Router } from "express";
import IRouter from './router';
import Api from './api';
import ExchangeRatesController from '../controllers/exchange-rates';
import ExchangeRateModel from '../models/exchange-rates';

class ExchangeRatesRouter implements IRouter {

    router: Router = Router();
    service: string = '/api/exchange-rates';
    controller: ExchangeRatesController;

    constructor() {
        
        this.controller = new ExchangeRatesController();
        this.router.get('/', this.getExchangeRates);
    }

    async getExchangeRates (req: Request, res: Response) {

        try {

            this.controller.getExchangeRates().then((response: ExchangeRateModel) => {

                Api.ok(req, res, response);
            });

        } catch (e) {

            Api.error(req, res);
        }
    }
}

export default ExchangeRatesRouter;