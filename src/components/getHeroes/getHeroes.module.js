"use strict";

const TechnicalError = require("../../model/TechnicalError");
const getHeroesService = require("./getHeroes.service");
const crypto = require("crypto");
const { api } = require("../../config/global");
const Heroes = require("../../model/mongodb");

async function getHeroesModule(req) {
  try {
    // TimeStamp
    const ts = new Date().toString();

    // Pre-Hash
    const preHash = ts + api.privatekey + api.publickey;
    const hash = crypto.createHash("md5").update(preHash).digest("hex");
    hash.toString();

    const serviceResponse = await getHeroesService(req, hash, ts);

    const mongoBDheroesList = await Heroes.find({});
    if (mongoBDheroesList.length > 0) {
      serviceResponse.data.results = serviceResponse.data.results.map(
        (hero) => {
          const heroFound = mongoBDheroesList.find(
            (knownHero) => knownHero.id === hero.id
          );
          if (heroFound) {
            hero.team = heroFound.team;
          }

          return hero;
        }
      );
    }

    // Elimina registros no importantes de la respuesta Json
    serviceResponse.data.results = serviceResponse.data.results.map(
      (heroes) => {
        delete heroes.resourceURI;
        delete heroes.comics;
        delete heroes.series;
        delete heroes.stories;
        delete heroes.events;
        delete heroes.urls;
        return heroes;
      }
    );

    return serviceResponse;
  } catch (error) {
    const technicalError = new TechnicalError(error);
    throw technicalError;
  }
}

module.exports = getHeroesModule;
