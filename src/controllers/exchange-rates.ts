import { Get, Route } from 'tsoa';
import ExchangeRateModel from '../models/exchange-rates';

@Route('/api/exchange-rates')
class ExchangeRates {

    @Get('/')
    async getExchangeRates (): Promise<ExchangeRateModel> {

        const response: ExchangeRateModel = {
            message: 'test'
        };

        return new Promise<ExchangeRateModel>((resolve) => {
            
            resolve(response);
        });
    }
}

export default ExchangeRates;