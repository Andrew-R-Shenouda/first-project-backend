import marketDataRequest from "../websocket-connection-market-data/market-data-request.json" assert { type: "json" };

function userCurrencyRoutes(app) {
  app.get("/CurrenciesInMarketDataRequest"),
    (req, res) => {
      const currencies = marketDataRequest.product_ids;
      res.send(currencies);
    };

  app.post("/CurrenciesInMarketDataRequest", (req, res) => {
    const currency = req.body + "-USD";
    marketDataRequest.product_ids.push(currency);
    res.send(currency);
  });

  app.delete("/CurrenciesInMarketDataRequest", (req, res) => {
    const currencyToBeDeleted = req.body + "-USD";
    marketDataRequest.product_ids = marketDataRequest.product_ids.filter(
      (currency) => currency !== currencyToBeDeleted
    );
    res.sendStatus(204);
  });
}
export default userCurrencyRoutes;
