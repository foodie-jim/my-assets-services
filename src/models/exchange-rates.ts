interface ExchangeRateResponseModel {
  quotes: Array<{
    symbol: string;
    value: Array<Quote>;
  }>;
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

export { ExchangeRateResponseModel, Quote };
