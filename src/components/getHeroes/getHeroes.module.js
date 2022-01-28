"use strict";

const TechnicalError = require("../../model/TechnicalError");
const getHeroesService = require("./getHeroes.service");
const crypto = require("crypto");
const { api } = require("../../config/global");

async function getHeroesModule(req) {
  console.log("modulo");
  try {
    // TimeStamp
    const ts = new Date().toString();

    // Pre-Hash
    const preHash = ts + api.privatekey + api.publickey;
    const hash = crypto.createHash("md5").update(preHash).digest("hex");
    hash.toString();

    const serviceResponse = await getHeroesService(req, hash, ts);

    return serviceResponse;
  } catch (error) {
    const technicalError = new TechnicalError(error);
    throw technicalError;
  }
}

module.exports = getHeroesModule;
