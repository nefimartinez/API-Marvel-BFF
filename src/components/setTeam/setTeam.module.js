/* eslint-disable no-useless-catch */
"use strict";

const setTeamService = require("./setTeam.service");

async function setTeamModule(req) {
  try {
    const serviceResponse = await setTeamService(req);
    return serviceResponse;
  } catch (error) {
    throw error;
  }
}

module.exports = setTeamModule;
