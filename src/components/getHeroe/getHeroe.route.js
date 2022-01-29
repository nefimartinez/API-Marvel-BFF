"use strict";
const schema = require("./getHeroe.validationSchema");
const validateSchema = require("../../util/validateSchema.util");
const getHeroe = require("./getHeroe.controller");

function route(app, globalPathPrefix) {
  app.get(`${globalPathPrefix}/getheroe/`, validateSchema(schema), getHeroe);
}

module.exports = route;
