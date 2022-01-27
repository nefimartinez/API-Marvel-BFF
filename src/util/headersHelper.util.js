"use strict";

const httpContext = require("@bech/express-http-context");
const config = require("../config/global");

function setHeaders(req, res, next) {
  const contextHeaders = {};
  const headerList = config.headers;

  for (const h of headerList) {
    contextHeaders[h] = req.headers[h];
  }

  /* Llenar los siguientes campos con la información de monitoreo */
  contextHeaders.nombreArtefacto = "";
  contextHeaders.artefacto = "";
  contextHeaders.codigoaplicacion = "";

  contextHeaders.fechaInicio = new Date();
  contextHeaders.remoteAddress =
    req.headers["X-Forwarded-For"] || req.connection.remoteAddress;
  contextHeaders.dispositivo = req.headers["user-agent"];

  httpContext.set("headers", contextHeaders);
  next();
}

function getHeaders() {
  return httpContext.get("headers");
}

module.exports = {
  setHeaders,
  getHeaders,
};
