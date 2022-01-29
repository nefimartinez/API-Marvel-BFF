/* eslint-disable no-useless-catch */
"use strict";

const Heroe = require("../../model/mongodb");

async function setTeamService(req) {
  try {
    const HEROETEAM = new Heroe(req.body);
    const { id, team } = req.body;
    const HEROETEAMDB = await Heroe.findOne({ id });
    let heroe;

    // eslint-disable-next-line no-negated-condition
    if (!HEROETEAMDB) {
      heroe = await HEROETEAM.save();
    } else {
      heroe = await Heroe.findByIdAndUpdate(
        HEROETEAMDB._id,
        { team },
        { new: true }
      );
    }

    return heroe;
  } catch (error) {
    throw error;
  }
}

module.exports = setTeamService;
