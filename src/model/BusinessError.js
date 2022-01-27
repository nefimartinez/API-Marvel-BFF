class BusinessError extends Error {
  constructor(cause) {
    super(cause);
    this.name = "BusinessError";
    this.customError = true;
    this.statusCode = 400;
  }
}

module.exports = BusinessError;
