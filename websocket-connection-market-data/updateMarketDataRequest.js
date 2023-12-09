import currencyDatabase from "../user-currencies/user-currency-database.json" assert { "type": "json" };
import marketDataRequest from "./marketDataRequest";

function updatemarketDataRequest() {
  const currencies = [];

  currencyDatabase.forEach((item) => {
    currencies.push(item.value + "-USD");
  });

  console.log("current request:", currencies);

  marketDataRequest.product_ids = currencies;
}
export default updatemarketDataRequest;
