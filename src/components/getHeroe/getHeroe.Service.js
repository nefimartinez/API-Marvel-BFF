"use strict";

const axios = require("axios");
const { api } = require("../../config/global");
const heroeModel = require("../../model/mongodb");

async function getHeroeService(req, hash, ts) {
  try {
    const url = `${api.url}characters?ts=${ts}&apikey=${api.publickey}&hash=${hash}&id=${req.body.id}`;
    const { data } = await axios.get(url);
    if (data.status === "Ok") {
      console.log("respuesta del servicio, satisfactoria");
    }

    // Buscar al heroe dentro de la dbmongo
    const heroe = await heroeModel.find({
      id: data.data.results[0].id,
    });

    // Incluye el campo team y su preferencia dentro de la respuesta del servicio
    data.data.results[0].team = heroe[0].team;

    return data;
  } catch (error) {
    console.log("error en servicio");
    throw error;
  }
}

module.exports = getHeroeService;
