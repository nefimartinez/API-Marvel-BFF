"use strict";

const setTeam = require("./setTeam.controller");
const Schema = require("./setTeam.validationSchema");
const validationSchema = require("../../util/validateSchema.util");

function route(app, globalPathPrefix) {
  app.post(`${globalPathPrefix}/setTeam`, validationSchema(Schema), setTeam);
}

module.exports = route;
