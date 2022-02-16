"use strict";

const updateTeamService = require("./updateTeam.service");
const TechnicalError = require("../../model/TechnicalError");

async function updateTeamModule(req) {
  try {
    const serviceResponse = await updateTeamService(req);
    return serviceResponse;
  } catch (error) {
    const technicalError = new TechnicalError(error);
    throw technicalError;
  }
}

module.exports = updateTeamModule;
