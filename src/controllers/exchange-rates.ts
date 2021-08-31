import { Get, Route } from 'tsoa';
import ExchangeRateModel from '../models/exchange-rates';
import Logger from '../configurations/logger';
 
const yahooFinance = require('yahoo-finance');

// TODO dollar index API

@Route('/api/exchange-rates')
class ExchangeRatesController {

    @Get('/')
    async getExchangeRates (): Promise<ExchangeRateModel> {

        Logger.debug('[ExchangeRatesController] getExchangeRates');

        const response: ExchangeRateModel = {
            message: 'test'
        };

        // example of getting USD/KRW exchange-rates
        yahooFinance.historical(
          {
            symbol: "DX-Y.NYB",
            from: "2021-08-01T00:00:00.000Z",
            to: "2021-08-31T23:59:59.999Z",
            period: "d", // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
          },
          function (_err: unknown, quotes: object) {
            console.log(quotes);
          }
        );

        yahooFinance.historical(
            {
              symbol: "KRW=X",
              from: "2021-08-01T00:00:00.000Z",
              to: "2021-08-31T23:59:59.999Z",
              period: "d", // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
            },
            function (_err: unknown, quotes: object) {
              console.log(quotes);
            }
          );

        return new Promise<ExchangeRateModel>((resolve) => {

            resolve(response);
        });
    }
}

export default ExchangeRatesController;