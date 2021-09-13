import { ExchangeRateResponseModel, Quote } from "../models/exchange-rates";
import { Get, Query, Route } from "tsoa";
import Logger from "../configurations/logger";

const yahooFinance = require("yahoo-finance");

@Route("/api/exchange-rates")
class ExchangeRatesController {
  /**
   * symbol: TICKER
   * period: "d", // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
   */
  @Get("/")
  async getExchangeRates(
    @Query() from: Date = new Date(),
    @Query() to: Date = new Date(),
    @Query() period: string = "d",
    symbols: Array<string> = ["DX-Y.NYB", "KRW=X"],
  ): Promise<ExchangeRateResponseModel> {
    Logger.debug("[ExchangeRatesController] getExchangeRates");

    const result = await this.getHistoricalData(symbols, from, to, period);

    return new Promise<ExchangeRateResponseModel>((resolve) => {
      resolve(result);
    });
  }

  private async getHistoricalData(
    symbols: Array<string>,
    from: Date,
    to: Date,
    period: string
  ): Promise<ExchangeRateResponseModel> {
    const response = await yahooFinance.historical({
      symbols,
      from: from.toISOString(),
      to: to.toISOString(),
      period,
    });

    const result: ExchangeRateResponseModel = {
      dollarIndex: new Array<Quote>(),
      exchangeRates: new Array<Quote>(),
    };

    for (const symbol of symbols) {
      const quotes = await response[symbol].filter((quote: Quote) => {
        if (quote.close !== null) return true;

        return false;
      });

      if (symbol === "DX-Y.NYB") {
        result.dollarIndex.push(...quotes);
      } else if (symbol === "KRW=X") {
        result.exchangeRates.push(...quotes);
      }
    }

    return result;
  }
}

export default ExchangeRatesController;
