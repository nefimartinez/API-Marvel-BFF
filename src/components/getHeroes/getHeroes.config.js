"use strict";
module.exports = {
  operation: "getHeroes",
  path: "getHeroes",
  methods: {
    GET: {
      description: "Obtencion de los heroes desde la Api Marvel",
      monitoringCode: "spf.fpd",
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
