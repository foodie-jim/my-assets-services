import { Get, Route } from 'tsoa';
import ExchangeRateModel from '../models/exchange-rates';
import Logger from '../configurations/logger';

@Route('/api/exchange-rates')
class ExchangeRatesController {

    @Get('/')
    async getExchangeRates (): Promise<ExchangeRateModel> {

        Logger.debug('[ExchangeRatesController] getExchangeRates');

        const response: ExchangeRateModel = {
            message: 'test'
        };

        return new Promise<ExchangeRateModel>((resolve) => {

            resolve(response);
        });
    }
}

export default ExchangeRatesController;