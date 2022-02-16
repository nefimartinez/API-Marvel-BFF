"use strict";
const schema = require("./getHeroes.validationSchema");
const validateSchema = require("../../util/validateSchema.util");
const getHeroes = require("./getHeroes.controller");

function route(app, globalPathPrefix) {
  app.post(`${globalPathPrefix}/getHeroes`, validateSchema(schema), getHeroes);
}

module.exports = route;
