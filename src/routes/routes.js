/* eslint-disable prefer-arrow-callback */
"use strict";
const config = require("../config/global");
const globalPathPrefix = config.get("globalPathPrefix");
const healthcheckRoute = require("../components/healthcheck/healthcheck.route");
const trace = require("@bech/trace");
const httpContext = require("@bech/express-http-context");
const errorHandler = require("../util/errorHandler.service");

function routes(app) {
  // Middleware de logging de requests
  app.use(
    trace.getTraceMiddleware({
      autoLogging: {
        // Ignorando healthcheck e info
        ignorePaths: [`${globalPathPrefix}/healthcheck`],
      },
    })
  );

  app.use(httpContext.middleware);

  app.get("/", function (req, res) {
    res.send("hello world");
  });

  // Rutas para cada operación

  healthcheckRoute(app, globalPathPrefix);
  // Middleware para manejo de errores
  app.use(errorHandler);
}

module.exports = { routes };
