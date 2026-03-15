import "dotenv/config"
import os from "node:os"
import logger from "./logger.js"
logger.info(`platform: ${os.platform()}, free memory: ${os.freemem()/(1024*1024*1024)} Gb\
  total memory: ${os.totalmem()/(1024*1024*1024)} Gb`)