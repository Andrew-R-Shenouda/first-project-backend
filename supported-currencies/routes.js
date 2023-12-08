import currencyDatabase from "./currency-database.json" assert { type: "json" };

function currencyDatabaseRoutes(app) {
  app.get("/currencies", (req, res) => {
    const currencies = currencyDatabase;
    res.send(currencies);
  });

  app.post("/currencies", (req, res) => {
    const currency = {
      [req.body.label]: req.body.value,
    };
    currencyDatabase.push(currency);
    res.send(currency);
  });

  app.delete("/currencies", (req, res) => {
    const currencyToBeDeleted = req.body.value;
    currencyDatabase = currencyDatabase.filter(
      (currency) => currency.value !== currencyToBeDeleted
    );
    res.sendStatus(204);
  });
}
export default currencyDatabaseRoutes;
