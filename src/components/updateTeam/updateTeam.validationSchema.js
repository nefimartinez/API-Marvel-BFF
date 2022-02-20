const validationSchema = {
  type: "object",
  properties: {
    id: {
      description: "id del heroe",
      type: "number",
    },
    team: {
      description: "team del heroe",
      type: "string",
    },
  },
  required: ["id", "team"],
};

module.exports = validationSchema;
