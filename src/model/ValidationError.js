class ValidationError extends Error {
  constructor(cause) {
    super(cause);
    this.name = "ValidationError";
    this.customError = true;
    this.statusCode = 400;
  }
}

module.exports = ValidationError;
