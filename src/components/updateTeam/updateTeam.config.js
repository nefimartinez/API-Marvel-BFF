"use strict";

module.exports = {
  operation: "updateTeam",
  path: "updateTeam",
  methods: {
    PUT: {
      description: "actualizacon del team del heroe",
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
