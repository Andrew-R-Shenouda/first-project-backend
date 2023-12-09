import currencyDatabase from "./user-currency-database.json" assert { "type": "json" };
import updatemarketDataRequest from "../websocket-connection-market-data/updateMarketDataRequest.js";
function userCurrencyRoutes(app) {
  app.get("/userCurrencies", (req, res) => {
    const currencies = currencyDatabase;
    res.send(currencies);
  });

  app.post("/userCurrencies/:currencyLabel/:currencyValue", (req, res) => {
    const { currencyLabel, currencyValue } = req.params;
    const currency = { label: currencyLabel, value: currencyValue };
    currencyDatabase.push(currency);
    console.log("database:", currencyDatabase);
    res.send(currency);
  });

  app.delete("/userCurrencies/:currencyValue", (req, res) => {
    const { currencyValue } = req.params;

    var index = -1;
    for (var i = 0; i < currencyDatabase.length; i++) {
      if (currencyDatabase[i].value == currencyValue) {
        index = i;
      }
    }

    if (index > -1) {
      currencyDatabase.splice(index, 1);
    }

    console.log("database:", currencyDatabase);
    res.sendStatus(200);
  });
}
export default userCurrencyRoutes;
