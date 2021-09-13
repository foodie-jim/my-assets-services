interface ExchangeRateResponseModel {
  dollarIndex: Array<Quote>;
  exchangeRates: Array<Quote>;
}

interface Quote {
  date: Date;
  open: number;
  high: number;
  low: number;
  close: number;
  adjClose: number;
  volumn: number;
  symbol: string;
}

export type { ExchangeRateResponseModel, Quote };
