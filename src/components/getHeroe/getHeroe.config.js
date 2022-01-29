"use strict";
module.exports = {
  operation: "getHeroe",
  path: "getHeroe",
  methods: {
    GET: {
      description: "Obtencion de un heroe de marvel",
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
