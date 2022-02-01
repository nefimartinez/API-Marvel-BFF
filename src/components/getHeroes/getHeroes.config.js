"use strict";
module.exports = {
  operation: "getHeroes",
  path: "getHeroes",
  methods: {
    POST: {
      description: "Obtencion de los heroes desde la Api Marvel",
      monitoringCode: "",
      messages: {
        "0000": {
          message: "respuesta correcta",
          httpCode: 200,
        },
        "0001": {
          statusCode: 500,
          message: "respuesta Errónea",
        },
      },
    },
  },
};
