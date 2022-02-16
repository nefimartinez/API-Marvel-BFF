/* eslint-disable prefer-arrow-callback */
"use strict";
const config = require("../config/global");
const globalPathPrefix = config.get("globalPathPrefix");
const healthcheckRoute = require("../components/healthcheck/healthcheck.route");
const errorHandler = require("../util/errorHandler.service");
const getHeroesRoute = require("../components/getHeroes/getHeroes.route");
const getHeroeRoute = require("../components/getHeroe/getHeroe.route");
const setTeamRoute = require("../components/setTeam/setTeam.route");
const updateTeamroute = require("../components/updateTeam/updateTeam.route");

function routes(app) {
  app.get("/", function (req, res) {
    res.send("hello world");
  });

  // Rutas para cada operación

  healthcheckRoute(app, globalPathPrefix);
  getHeroesRoute(app, globalPathPrefix);
  getHeroeRoute(app, globalPathPrefix);
  setTeamRoute(app, globalPathPrefix);
  updateTeamroute(app, globalPathPrefix);

  // Middleware para manejo de errores
  app.use(errorHandler);
}

module.exports = { routes };
