"use strict";
const validate = require("jsonschema").validate;
const ValidationError = require("../model/ValidationError");
/**
 * Función de alto orden que devuelve un middleware de validación de schema
 * para una operación en particular
 * @param validationSchema
 * @returns {function(*=, *, *): Promise<void>}
 */
function generateValidationSchema(validationSchema) {
  return async (req, res, next) => {
    try {
      validate(req.body, validationSchema, { throwAll: true });
      next();
    } catch (error) {
      const validationError = new ValidationError(error);
      validationError.name = "ValidationResultError";
      throw validationError;
    }
  };
}

module.exports = generateValidationSchema;
