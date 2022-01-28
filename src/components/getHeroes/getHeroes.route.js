"use strict";

const getHeroes = require("./getHeroes.controller");

function route(app, globalPathPrefix) {
  app.get(`${globalPathPrefix}/getHeroes`, getHeroes);
}

module.exports = route;
