import express from "express";
import cors from "cors";
import userCurrencyRoutes from "./user-currencies/routes.js";
import supportedCurrencyRoutes from "./supported-currencies/routes.js";
import http from "http";
import WebSocket, { WebSocketServer } from "ws";
import CreateCoinbaseWebSocketConnection from "./websocket-connection-market-data/coinbase-websocket-connection.js";

const app = express();
app.use(cors());
app.use(express.json());
userCurrencyRoutes(app);
supportedCurrencyRoutes(app);
const httpserver = http.createServer(app);
const wss = new WebSocketServer({
  port: 4040,
});
const coinbaseConnection = CreateCoinbaseWebSocketConnection(wss); 
export default coinbaseConnection;
httpserver.listen(4000);
