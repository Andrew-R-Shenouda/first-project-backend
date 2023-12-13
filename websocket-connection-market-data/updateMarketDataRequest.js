import currencyDatabase from "../user-currencies/user-currency-database.json" assert { "type": "json" };
import marketDataRequest from "./marketDataRequest.js";
import coinbaseConnection from "../app.js"

function updatemarketDataRequest() {
  const currencies = [];

  currencyDatabase.forEach((item) => {
    currencies.push(item.value + "-USD");
  });

  marketDataRequest.product_ids = currencies;

  console.log("current request:", marketDataRequest);

  /* Refresh the WebSocket to use the latest data in marketDataRequest*/
  coinbaseConnection.reopenWebSocket();

}
export default updatemarketDataRequest;
