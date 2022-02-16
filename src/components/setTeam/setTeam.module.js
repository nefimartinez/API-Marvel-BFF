"use strict";

const setTeamService = require("./setTeam.service");
const TechnicalError = require("../../model/TechnicalError");

async function setTeamModule(req) {
  try {
    const serviceResponse = await setTeamService(req);
    return serviceResponse;
  } catch (error) {
    const technicalError = new TechnicalError(error);
    throw technicalError;
  }
}

module.exports = setTeamModule;
