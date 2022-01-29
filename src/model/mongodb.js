/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
const { schema, model, Schema } = require("mongoose");

const teamScheama = Schema({
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

module.exports = model("Heroe", teamScheama);
