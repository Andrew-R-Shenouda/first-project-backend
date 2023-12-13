import WebSocket from "ws";
import marketDataRequest from "./marketDataRequest.js";
const CoinbaseAPI = "wss://ws-feed.exchange.coinbase.com";

function CreateCoinbaseWebSocketConnection(wss) {
  let coinbaseWebSocket;
  /* wss listens for incoming WebSocket connections on the HTTP server (server). 
  and is responsible for handling connections from clients (presumably our Frontend) 
  and managing communication between them.*/

  wss.on("connection", (ws) => {
    console.log("WebSocket connected");

    ws.on("message", (message) => {
      console.log(`Received message from client: ${message}`);
    });

    ws.on("close", () => {
      console.log("WebSocket disconnected");

    });
  });

  /* Creates a WebSocket connection to the Coinbase API. Listens for the 
  WebSocket connection to the Coinbase API to open. When it opens, it logs 
  a message and sends a request for the data we want from Coinbase. */

  function openWebSocket() {
    coinbaseWebSocket = new WebSocket(CoinbaseAPI);

    coinbaseWebSocket.on("open", () => {
      console.log("Connected to Coinbase API");

      coinbaseWebSocket.send(JSON.stringify(marketDataRequest));
    });

    /* Listens for messages from the Coinbase API. When a message is received,
     it logs it, and sends it to all clients connected to wss. */
    coinbaseWebSocket.on("message", (message) => {
      console.log(`Received message from Coinbase API: ${message}`);

      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
    });
  }

  function closeWebSocket() {
    if (coinbaseWebSocket) {
      coinbaseWebSocket.close();
    }
  }

  function reopenWebSocket() {
    closeWebSocket();
    openWebSocket();
  }

  /*Initialize the WebSocket */
  openWebSocket();

  return {
    closeWebSocket,
    reopenWebSocket,
  };
}
export default CreateCoinbaseWebSocketConnection;
