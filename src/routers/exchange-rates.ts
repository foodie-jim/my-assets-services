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
      const from = new Date(req.query.from as string || currentDate.getTime());
      const to = new Date(req.query.to as string || currentDate.getTime());
      let symbols = req.query.symbols as Array<string> || ["DX-Y.NYB", "KRW=X"];
      const period = req.query.period as string || "d";

      if (typeof req.query.symbols === "string") {
        symbols = [req.query.symbols];
      }

      this.controller
        .getExchangeRates(from, to, symbols, period)
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
