/* eslint-disable new-cap */
const { Schema, model } = require("mongoose");

const teamSchema = Schema({
  id: {
    type: String,
    require: true,
    unique: true,
  },
  team: {
    type: String,
    require: true,
  },
});

module.exports = model("Heroe", teamSchema);
