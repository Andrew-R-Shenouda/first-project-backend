import * as dao from "./dao.js";

function CurrencyRoutes(app) {
  const createCurrency = async (req, res) => {
    const currency = await dao.createCurrency(req.body);
    res.json(currency);
  };
  const deleteCurrency = async (req, res) => {
    const status = await dao.deleteCurrency(req.params.currencyValue);
    res.json(status);
  };
  const findAllCurrencies = async (req, res) => {
    const currencies = await dao.findAllCurrencies();
    res.json(currencies);
  };
  const findCurrencyByValue = async (req, res) => {
    const currency = await dao.findCurrencyByValue(req.params.currencyValue);
    res.json(currency);
  };
  app.post("/currency", createCurrency);
  app.delete("/currency/:currencyValue", deleteCurrency);
  app.get("/currency", findAllCurrencies);
  app.get("/currency/:currencyValue", findCurrencyByValue);
}
export default CurrencyRoutes;
