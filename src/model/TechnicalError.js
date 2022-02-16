class TechnicalError extends Error {
  constructor(cause) {
    super(cause);
    this.name = "TechnicalError";
    this.customError = true;
    this.statusCode = 500;
  }
}

module.exports = TechnicalError;
