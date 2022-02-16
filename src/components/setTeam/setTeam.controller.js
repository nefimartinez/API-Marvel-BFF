/* eslint-disable no-useless-catch */
"use strict";

const setTeamModule = require("./setTeam.module");

async function setTeamController(req, res) {
  try {
    const response = await setTeamModule(req);
    return res.status(200).send(response);
  } catch (error) {
    throw error;
  }
}

module.exports = setTeamController;
