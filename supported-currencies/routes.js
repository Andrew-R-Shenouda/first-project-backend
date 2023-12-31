import currencyDatabase from "./supported-currency-database.json" assert { type: "json" };

function supportedCurrencyRoutes(app) {
  app.get("/supportedCurrencies", (req, res) => {
    const currencies = currencyDatabase;
    res.send(currencies);
  });

  app.post("/supportedCurrencies", (req, res) => {
    const currency = {
      [req.body.label]: req.body.value,
    };
    currencyDatabase.push(currency);
    res.send(currency);
  });

  app.delete("/supportedCurrencies", (req, res) => {
    const currencyToBeDeleted = req.body.value;
    currencyDatabase = currencyDatabase.filter(
      (currency) => currency.value !== currencyToBeDeleted
    );
    res.sendStatus(204);
  });
}
export default supportedCurrencyRoutes;
