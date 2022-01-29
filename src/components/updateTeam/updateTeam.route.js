"use strict";

const updateTeam = require("./updateTeam.controller");
const Schema = require("./updateTeam.validationSchema");
const validationSchema = require("../../util/validateSchema.util");

function route(app, globalPathPrefix) {
  app.put(
    `${globalPathPrefix}/updateTeam`,
    validationSchema(Schema),
    updateTeam
  );
}

module.exports = route;
