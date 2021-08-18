import { Request, Response, Router } from "express";
import IApiController from './api-controller';
import Api from './api';
import { Get, Route } from "tsoa";


interface Test {
    message: string
}

@Route('/api/exchange-rates')
class ExchangeRates implements IApiController {

    router: Router = Router();
    service: string = '/api/exchange-rates';

    constructor() {
        
        this.router.get('/', this.getExchangeRates);
    }

    public getExchangeRates (req: Request, res: Response) {

        const response = {

        };

        Api.ok(req, res, response);
    }

    @Get('/')
    public async getExchangeRates2 (): Promise<Test> {

        return {
            message: 'test'
        };
    }
}

export default ExchangeRates;