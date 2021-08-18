import { Request, Response, Router } from "express";
import IApiController from './api-controller';
import Api from './api';
import { Get, Route } from 'tsoa';

interface Test {
    message: string
}

@Route('/api/exchange-rates')
class ExchangeRates implements IApiController {

    router: Router = Router();
    service: string = '/api/exchange-rates';

    constructor() {
        
        this.router.get('/', this.getExchangeRates.bind(this));
        //this.router.get('/', this.getExchangeRates);
    }

    // Separate files
    // Business logic
    // Data-models

    getExchangeRates (_req: Request, res: Response) {

        // this.getExchangeRates3().then((response: Test) => {
        //     console.log(response);
        // });

        this.test();

        res.json({
            test: 'test'
        });
    }

    test () {
        console.log('test');
    }

    async getExchangeRates2 (req: Request, res: Response) {

        try {

            this.getExchangeRates3().then((response: Test) => {

                Api.ok(req, res, response);
            });

        } catch (e) {

            Api.error(req, res);
        }
    }

    @Get('/')
    async getExchangeRates3 (): Promise<Test> {

        const response: Test = {
            message: 'test'
        };

        return new Promise<Test>((resolve) => {
            resolve(response);
        });
    }
}

export default ExchangeRates;