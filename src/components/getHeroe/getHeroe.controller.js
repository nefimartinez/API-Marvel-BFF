/* eslint-disable no-useless-catch */
"use strict";

const getHeroeModule = require("./getHeroe.module");

async function getHeroeController(req, res) {
  try {
    const response = await getHeroeModule(req);
    return res.status(200).send(response);
  } catch (error) {
    throw error;
  }
}

module.exports = getHeroeController;
