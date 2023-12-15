import marketDataRequest from "./marketDataRequest.js";
import coinbaseConnection from "../app.js";
import * as dao from "../users/dao.js";

export const BASE_API = "http://localhost:4000";
export const USERS_API = `${BASE_API}/users`;

async function updatemarketDataRequest(userId) {
  try {
    const currentUser = await dao.findUserById(userId);
    console.log("current user:", currentUser);

    const currencyDatabase = currentUser.currencies;
    console.log("database:", currencyDatabase);

    const currencies = [];

    currencyDatabase.forEach((item) => {
      currencies.push(item.value + "-USD");
    });

    marketDataRequest.product_ids = currencies;

    console.log("current request:", marketDataRequest);

    // Refresh the WebSocket to use the latest data in marketDataRequest
    coinbaseConnection.reopenWebSocket();
  } catch (error) {
    console.error("Error updating market data request:", error);
  }
}

export default updatemarketDataRequest;
