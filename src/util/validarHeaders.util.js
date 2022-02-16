"use strict";
const ValidationError = require("../model/ValidationError");
let headers;
function getValidaHeaders(customHeaders) {
  if (!Array.isArray(customHeaders))
    throw new Error("getValidaHeaders: customHeaders no es un Array");
  headers = customHeaders;
  return validarHeaders;
}

async function validarHeaders(req, res, next) {
  for (const h of headers) {
    if (!req.headers[h]) {
      throw new ValidationError("No se definió la cabecera: " + h);
    }
  }

  next();
}

module.exports = getValidaHeaders;
