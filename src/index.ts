import "dotenv/config"
import os from "node:os"
import logger from "./logger.js"
import { createServer } from "node:http";
//import { Server } from "socket.io"
//import { WebSocketServer } from "ws"


const server = createServer()
const port = Number(process.env.PORT) || 3000
server.listen(port, () => {
    logger.info(`Server is listening on port ${port}`)
    logger.info(`Hostname: ${os.hostname()}`)
})
server.on("request", (req, res) => {
    res.statusCode = 200
    res.write(req.url)
    res.end()
})