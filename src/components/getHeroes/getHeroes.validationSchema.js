"use strict";
const validationSchema = {
  type: "object",
  properties: {
    offset: {
      description: "parametro para paginacion",
      type: "number",
    },
    nameStartsWith: {
      description: "parametro para busqueda de heroes por nombre",
      type: "string",
    },
  },
  required: ["offset"],
};

module.exports = validationSchema;
