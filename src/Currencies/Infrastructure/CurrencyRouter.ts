require("dotenv").config();
import { Router } from "express";
import { CategoryHttpErrors } from "../../Categories/Infrastructure/CategoryHttpErrors";
import { BadCodeError } from "../../Shared/Infrastructure/Errors/RequestErrors";
import { GetAllCurrencies } from "../Application/GetAllCurrencies";
import { GetCurrency } from "../Application/GetCurrency";
import { CurrenciesFile } from "./CurrenciesFile";

export const router = Router();
const pathFile = process.env.CURRENCIES_DATA_PATH;
const currencyRepository = new CurrenciesFile(pathFile);

router.get("/", async (req, res) => {
  try {
    const currencies = new GetAllCurrencies(currencyRepository).execute();
    res.json(currencies);
  } catch (err: any) {
    new CategoryHttpErrors(err).catchAndResponse(res);
  }
});

router.get("/:code", async (req, res) => {
  try {
    // Check request params
    const currencyCode = String(req.params.code);
    if (currencyCode.length != 3) throw new BadCodeError();
    // Use case
    const getCurrency = new GetCurrency(currencyRepository);
    const currency = getCurrency.execute(currencyCode);
    res.json(currency);
  } catch (err: any) {
    new CategoryHttpErrors(err).catchAndResponse(res);
  }
});
