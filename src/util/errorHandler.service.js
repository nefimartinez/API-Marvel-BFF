/* eslint-disable no-unused-vars */
"use strict";
const getResponseFormat = require("./response.util");
const ValidationError = require("../model/ValidationError");
/**
 * Middleware para manejo de excepciones dentro de controladores
 * @param {Error} err
 * @param {Http Request} req
 * @param {Http Response} res
 * @param {function} next
 * @returns {Promise<void>}
 */
async function errorHandlerService(err, req, res, next) {
  // Si es un error generado por schema validator:
  if (err.name === "ValidationResultError") {
    const errors = err.cause.errors || err.message || [];
    const errorMsg = [];
    if (errors.lenght) {
      errors.forEach((value) => {
        errorMsg.push(value.message);
      });
    } else {
      errorMsg.push(errors);
    }

    return res
      .status(400)
      .send({ error: "Error en parámetros de entrada", messages: errorMsg });
  }

  const logger = require("@bech/logger").getLogger({
    name: "errorHandlerService",
    xtrackid: req.headers.xtrackid,
    codigosesion: req.headers.codigosesion,
  });

  if (!err.statusCode) err.statusCode = 500;

  const result = getResponseFormat(err.message, err.cause || {});
  return res.status(err.statusCode).send(result);
}

module.exports = errorHandlerService;
