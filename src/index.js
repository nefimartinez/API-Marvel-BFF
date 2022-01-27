"use strict";

const express = require("express");
require("express-async-errors");
const helmet = require("helmet");
const { routes } = require("./routes/routes");
const bodyParser = require("body-parser");
const logger = require("@bech/logger").getStaticLogger();
const config = require("./config/global");
const { dbConnection } = require("./config/database");
const cors = require("cors");

const app = express();

async function serverStart() {
  try {
    app.use(bodyParser.json());

    // Seguridad; ver https://github.com/helmetjs/helmet
    app.use(helmet());
    app.use(cors());
    // Incorporar rutas
    routes(app);

    await connectDB();

    const { port } = config;
    app.listen(port, () => {
      logger.info(
        `Servidor ejecutandose en el puerto: ${port}, con ruta base ${config.globalPathPrefix}`
      );
    });
  } catch (error) {
    logger.error(error);
    await cleanup();
  }
}

async function connectDB() {
  dbConnection();
}

async function disconnectDB() {}

async function cleanup() {
  try {
    logger.info("Desconectando...");
    await disconnectDB();
    process.exit(0);
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
}

// Captura de señales de S.O. en las que ejecutaremos el cierre de conexiones
process.on("SIGTERM", cleanup);
process.on("SIGINT", cleanup);
process.on("SIGHUP", cleanup);

serverStart();
