/* eslint-disable eqeqeq */
"use strict";

const axios = require("axios");
const { api } = require("../../config/global");
const Heroes = require("../../model/mongodb");

async function getHeroesService(req, hash, ts) {
  try {
    const url = `${api.url}characters?ts=${ts}&apikey=${
      api.publickey
    }&hash=${hash}&offset=${req.body.offset}${
      req.body.nameStartsWith
        ? "&nameStartsWith=" + req.body.nameStartsWith
        : ""
    }`;
    const { data } = await axios.get(url);
    if (data.status === "Ok") {
      console.log("respuesta del servicio, satisfactoria");
    }

    const mongoBDheroesList = await Heroes.find({});
    if (mongoBDheroesList.length > 0) {
      data.data.results = data.data.results.map((hero) => {
        const heroFound = mongoBDheroesList.find(
          (knownHero) => knownHero.id == hero.id
        );
        if (heroFound) {
          hero.team = heroFound.team;
        }

        return hero;
      });
    }

    // Elimina registros no importantes de la respuesta Json
    data.data.results = data.data.results.map((heroes) => {
      delete heroes.resourceURI;
      delete heroes.comics;
      delete heroes.series;
      delete heroes.stories;
      delete heroes.events;
      delete heroes.urls;
      return heroes;
    });

    return data;
  } catch (error) {
    console.log("error en servicio");
    throw error;
  }
}

module.exports = getHeroesService;
