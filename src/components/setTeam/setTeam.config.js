"use strict";
module.exports = {
  operation: "setTeam",
  path: "setTeam",
  methods: {
    POST: {
      description: "setiar el color del team del heroe",
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
