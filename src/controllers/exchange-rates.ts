import { Request, Response, Router } from "express";
import IApiController from './api-controller';
import Api from './api';
import { Get, Route } from "tsoa";

@Route('exchange-rates')
class ExchangeRates implements IApiController {

    router: Router = Router();
    service: string = '/exchange-rates';

    constructor() {
        
        this.router.get('/', this.getExchangeRates);
    }

    @Get('/')
    public getExchangeRates (req: Request, res: Response) {

        const response = {

        };

        Api.ok(req, res, response);
    }
}

export default ExchangeRates;