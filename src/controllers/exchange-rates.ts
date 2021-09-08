import { ExchangeRateResponseModel, Quote } from "../models/exchange-rates";
import { Get, Query, Route } from 'tsoa';
import Logger from '../configurations/logger';
 
const yahooFinance = require('yahoo-finance');

// TODO dollar index API

@Route('/api/exchange-rates')
class ExchangeRatesController {

  /**
   * symbol: TICKER
   * period: "d", // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
   */
    @Get('/')
    async getExchangeRates (@Query() symbol: string = 'DX-Y.NYB', @Query() from: Date =  new Date(), @Query() to: Date = new Date(), @Query() period: string = 'd'): Promise<ExchangeRateResponseModel> {

        Logger.debug('[ExchangeRatesController] getExchangeRates');

        const result = await this.getHistoricalData(symbol, from, to, period);

        return new Promise<ExchangeRateResponseModel>((resolve) => {

            resolve(result);
        });
    }

    private async getHistoricalData (symbol: string, from: Date, to: Date, period: string): Promise<ExchangeRateResponseModel> {

        const response = await yahooFinance.historical(
          {
            symbol,
            from: from.toISOString(),
            to: to.toISOString(),
            period
          }
        );

      const quotes = response.filter((quote: Quote) => {

        if (quote.close !== null)
          return true;

        return false;
      });

        const result: ExchangeRateResponseModel = {
          quotes
        };

        // yahooFinance.historical(
        //   {
        //     symbol: "DX-Y.NYB",
        //     from: "2021-08-01T00:00:00.000Z",
        //     to: "2021-08-31T23:59:59.999Z",
        //     period: "d", // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
        //   },
        //   function (_err: unknown, quotes: object) {
        //     console.log(quotes);
        //   }
        // );

        // yahooFinance.historical(
        //     {
        //       symbol: "KRW=X",
        //       from: "2021-08-01T00:00:00.000Z",
        //       to: "2021-08-31T23:59:59.999Z",
        //       period: "d", // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
        //     },
        //     function (_err: unknown, quotes: object) {
        //       console.log(quotes);
        //     }
        // );

        return result;
    }
}

export default ExchangeRatesController;