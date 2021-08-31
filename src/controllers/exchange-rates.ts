import { Get, Route } from 'tsoa';
import ExchangeRateModel from '../models/exchange-rates';
import HttpClient from './http-client';
import Logger from '../configurations/logger';

// TODO Find exchange rates, dollar index API

@Route('/api/exchange-rates')
class ExchangeRatesController {

    private client: HttpClient;

    constructor() {

        // this.client = new HttpClient(process.env.NAVER_FINAANCE_URL || 'https://finance.naver.com');
        this.client = new HttpClient();
    }

    @Get('/')
    async getExchangeRates (): Promise<ExchangeRateModel> {

        Logger.debug('[ExchangeRatesController] getExchangeRates');

        try {
          // https://api.finance.naver.com/siseJson.naver?symbol=005930&requestType=1&startTime=20140817&endTime=20210605&timeframe=week
          
        //   this.client
        //     .get('https/siseJson.naver?symbol=005930&requestType=1&startTime=20140817&endTime=20210605&timeframe=week', {
        //       symbol: '005930',
        //       requestType: 1,
        //       startTime: 20140817,
        //       endTime: 20210605,
        //       timeframe: 'week',
        //     })
        this.client
          .get(
            "https://api.finance.naver.com/siseJson.naver?symbol=005930&requestType=1&startTime=20140817&endTime=20210605&timeframe=week"
          )
          .then((response) => {
            Logger.debug("[ExchangeRatesController] Done");
            Logger.debug(response);
          });
        } catch (error) {
            Logger.error('[ExchangeRatesController]', error);
        }

        const response: ExchangeRateModel = {
            message: 'test'
        };

        return new Promise<ExchangeRateModel>((resolve) => {

            resolve(response);
        });
    }
}

export default ExchangeRatesController;