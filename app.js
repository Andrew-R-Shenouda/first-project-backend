import express from "express";
import cors from "cors";
import http from "http";
import WebSocket, { WebSocketServer } from "ws";
import CreateCoinbaseWebSocketConnection from "./market-data/coinbase-websocket-connection.js";

const app = express();
app.use(cors());
app.use(express.json());
const httpserver = http.createServer(app);
const wss = new WebSocketServer({
    port:4040,
});
CreateCoinbaseWebSocketConnection(wss);
httpserver.listen(4000);
