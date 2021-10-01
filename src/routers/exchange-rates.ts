import { ExchangeRateResponseModel } from "../models/exchange-rates";
import { Request, Response, Router } from "express";
import Api from "./api";
import ExchangeRatesController from "../controllers/exchange-rates";
import IRouter from "./router";
import Logger from "../configurations/logger";

class ExchangeRatesRouter implements IRouter {
  public router: Router = Router();
  public service: string = "/api/exchange-rates";
  private controller: ExchangeRatesController;

  constructor() {
    this.controller = new ExchangeRatesController();
    this.router.get("/", this.getExchangeRates.bind(this));
  }

  async getExchangeRates(req: Request, res: Response) {
    try {

      const currentDate = new Date();
      const to = new Date(req.query.to as string || currentDate);
      const from = new Date(req.query.from as string || currentDate.setMonth(currentDate.getMonth() - 1));
      const symbols = ["DX-Y.NYB", "KRW=X"];
      const period = req.query.period as string || "d";

      this.controller
        .getExchangeRates(from, to, period, symbols)
        .then((response: ExchangeRateResponseModel) => {
          Api.ok(req, res, response);
        });
    } catch (error: any) {
      Logger.error("[ExchangeRatesRouter] getExchangeRates");
      Api.error(req, res, error);
    }
  }
}

export default ExchangeRatesRouter;
