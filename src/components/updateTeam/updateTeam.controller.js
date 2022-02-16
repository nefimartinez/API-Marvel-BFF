/* eslint-disable no-useless-catch */
"use strict";

const updateTeamModule = require("./updateTeam.module");

async function updateTeamController(req, res) {
  try {
    const response = await updateTeamModule(req);
    return res.status(200).send(response);
  } catch (error) {
    throw error;
  }
}

module.exports = updateTeamController;
