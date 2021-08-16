import { Request, Response, Router } from "express";
import IApiController from './api-controller';
import Api from './api';

class ExchangeRates implements IApiController {

    router: Router = Router();
    service: string = '/exchange-rates';

    constructor() {
        
        this.router.get('/', this.getExchangeRates);
    }

    public getExchangeRates (req: Request, res: Response) {

        const response = {

        };

        Api.ok(req, res, response);
    }
}

export default ExchangeRates;