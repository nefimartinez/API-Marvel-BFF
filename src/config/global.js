"use strict";

const parseConfig = require("@bech/config-parser");

const config = parseConfig({
  globalPathPrefix: {
    doc: "path base del microservicio",
    default: "/bff/v1/Api-Marvel-BFF",
  },
  headers: {
    doc: "listado de cabeceras obligatorias para todas las operaciones",
    default: [],
  },
  env: {
    doc: "variable de entorno de la aplicación",
    env: "NODE_ENV",
    required: true,
  },
  port: {
    doc: "puerto de aplicación",
    env: "PORT",
    required: true,
  },
  checkCertificate: {
    doc: "flag para la validación de identidad de certificados TLS, desabilitar para certificados autofirmados",
    env: "CHECK_CERTIFICATE",
    required: true,
  },
  api: {
    url: {
      doc: "API URL",
      env: "API_URL",
    },
    publickey: {
      doc: "API KEY",
      env: "PUBLICKEY",
    },
    privatekey: {
      doc: "API KEY",
      env: "PRIVATEKEY",
    },
  },
  db: {
    doc: "db",
    env: "DB",
    required: true,
  },
});
module.exports = config;
