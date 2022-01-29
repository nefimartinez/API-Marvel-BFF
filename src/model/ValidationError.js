"use strict";

/**
 * Custom error para validaciones de entrada, utilizado por validaHeaders
 * y validaSchema
 */
class ValidationError extends Error {
  constructor(cause) {
    let msg = cause;
    if (cause instanceof Error) {
      msg = cause.message;
    }

    super(msg);
    this.cause = cause;
    this.name = "ValidationError";
    this.customError = true;
  }
}

module.exports = ValidationError;
