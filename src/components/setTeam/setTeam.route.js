"use strict";

const setTeam = require("./setTeam.controller");
const validationSchema = require("./setTeam.validationSchema");
const getValidarSchema = require("../../util/validateSchema.util");

function route(app, globalPathPrefix) {
  // Validación de jsonschema
  const validarSchema = getValidarSchema(validationSchema);

  app.post(`${globalPathPrefix}/setTeam`, validarSchema, setTeam);
}

module.exports = route;
