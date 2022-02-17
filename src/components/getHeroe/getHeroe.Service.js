"use strict";

const axios = require("axios");
const { api } = require("../../config/global");

async function getHeroeService(req, hash, ts) {
  try {
    const url = `${api.url}characters?ts=${ts}&apikey=${api.publickey}&hash=${hash}&id=${req.body.id}`;
    const { data } = await axios.get(url);
    if (data.status === "Ok") {
      console.log("respuesta del servicio, satisfactoria");
    }

    return data;
  } catch (error) {
    console.log("error en servicio");
    throw error;
  }
}

module.exports = getHeroeService;
