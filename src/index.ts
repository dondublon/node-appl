import "dotenv/config"
import os from "node:os"
import logger from "./logger.js"
import * as http from "node:http"
//import { Server } from "socket.io"
//import { WebSocketServer } from "ws"
import {createServer} from "node:net";

const server = createServer()
const port = Number(process.env.PORT) || 3000
server.listen(port, () => {
    logger.info(`Server is listening on port ${port}`)
    logger.info(`Hostname: ${os.hostname()}`)
})
server.on("request", (req, res) => {
    res.statusCode = 200
    res.write("ok")
})