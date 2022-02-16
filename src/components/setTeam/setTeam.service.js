/* eslint-disable no-negated-condition */
"use strict";

const HeroeModel = require("../../model/mongodb");

async function setTeamService(req) {
  try {
    const heroeTeam = new HeroeModel(req.body);
    const { id, team } = req.body;
    const heroeTeamdb = await HeroeModel.findOne({ id });
    let heroe;

    if (!heroeTeamdb) {
      heroe = await heroeTeam.save();
    } else {
      heroe = await HeroeModel.findByIdAndUpdate(
        heroeTeamdb._id,
        { team },
        { new: true }
      );
    }

    return heroe;
  } catch (error) {
    console.log("error en servicio");
    throw error;
  }
}

module.exports = setTeamService;
