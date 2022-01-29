"use strict";

const HeroeModel = require("../../model/mongodb");

async function updateTeamService(req) {
  try {
    const { id, team } = req.body;
    const heroeTeamdb = await HeroeModel.findOne({ id });

    if (!heroeTeamdb) {
      throw new Error("El heroe no tiene equipo");
    }

    const heroeTeamUpdate = await HeroeModel.findByIdAndUpdate(
      heroeTeamdb._id,
      { team },
      { new: true }
    );

    return heroeTeamUpdate;
  } catch (error) {
    console.log("error en el servicio put");
    throw error;
  }
}

module.exports = updateTeamService;
