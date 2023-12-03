import marketDataRequest from "./market-data-request.json" assert { type: "json" };

function MarketDataRoutes(app) {
  app.get("/marketDataRequest"),
    (req, res) => {
      const currencies = marketDataRequest.product_ids;
      res.send(currencies);
    };

  app.post("/marketDataRequest", (req, res) => {
    const currency = req.body + "-USD";
    marketDataRequest.product_ids.push(currency);
    res.send(currency);
  });

  app.delete("/marketDataRequest", (req, res) => {
    const currencyToBeDeleted = req.body + "-USD";
    marketDataRequest.product_ids = marketDataRequest.product_ids.filter(
      (currency) => currency !== currencyToBeDeleted
    );
    res.sendStatus(204);
  });
}
export default MarketDataRoutes;
