"use strict";
const validationSchema = {
  type: "object",
  properties: {
    offset: {
      description: "paramtro para paginacion",
      type: "string",
    },
    nameStartsWith: {
      description: "paramtro para busqueda de heroes por nombre",
      type: "string",
    },
  },
  required: ["offset", "nameStartsWith"],
};

module.exports = validationSchema;