interface ExchangeRateResponseModel {
  quotes: Array<Quote>;
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

interface ExchangeRateRequestModel {
  symbol: string;
  from: Date;
  to: Date;
  period: string;
}

export { ExchangeRateResponseModel, ExchangeRateRequestModel, Quote };
