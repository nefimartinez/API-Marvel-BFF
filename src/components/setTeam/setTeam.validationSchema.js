"use strict";

const validationSchema = {
  type: "object",
  properties: {
    id: {
      description: "id del heroe",
      type: "string",
    },
    team: {
      description: "team del heroe",
      type: "string",
    },
  },
  required: ["id", "team"],
};

module.exports = validationSchema;
