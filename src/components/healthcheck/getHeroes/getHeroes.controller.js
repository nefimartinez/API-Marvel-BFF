"use strict";

const TechnicalError = require("../../../model/TechnicalError");

async function getHeroesController(req, res) {
  try {
    const response = await getHeroesModule(req, res);
    return req.status(200).send(response);
  } catch (error) {
    const technicalError = new TechnicalError();
    throw technicalError;
  }
}

module.exports = getHeroesController;
