/* eslint-disable no-useless-catch */
"use strict";

const getHeroesModule = require("./getHeroes.module");

async function getHeroesController(req, res) {
  try {
    console.log("controllador");
    const response = await getHeroesModule(req);
    return res.status(200).send(response);
  } catch (error) {
    throw error;
  }
}

module.exports = getHeroesController;
