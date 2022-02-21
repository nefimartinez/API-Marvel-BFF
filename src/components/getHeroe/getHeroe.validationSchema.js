"use strict";
const validationSchema = {
  type: "object",
  properties: {
    id: {
      description: "id del heroe a buscar",
      type: "string",
    },
  },
  required: ["id"],
};

module.exports = validationSchema;
