class ErrorResponse extends Error {
  /**
   * Create custom ErrorResponse
   * @param {string} message Error message
   * @param {number} statusCode HTTP status code
   */
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true; // This is to distinguish operational errors from programming errors

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ErrorResponse);
    }

    this.name = this.constructor.name;
    this.timestamp = new Date().toISOString();
  }

  /**
   * Create a bad request error (400)
   * @param {string} message Error message
   * @returns {ErrorResponse}
   */
  static badRequest(message) {
    return new ErrorResponse(message, 400);
  }

  /**
   * Create an unauthorized error (401)
   * @param {string} message Error message
   * @returns {ErrorResponse}
   */
  static unauthorized(message) {
    return new ErrorResponse(message, 401);
  }

  /**
   * Create a forbidden error (403)
   * @param {string} message Error message
   * @returns {ErrorResponse}
   */
  static forbidden(message) {
    return new ErrorResponse(message, 403);
  }

  /**
   * Create a not found error (404)
   * @param {string} message Error message
   * @returns {ErrorResponse}
   */
  static notFound(message) {
    return new ErrorResponse(message, 404);
  }

  /**
   * Create a conflict error (409)
   * @param {string} message Error message
   * @returns {ErrorResponse}
   */
  static conflict(message) {
    return new ErrorResponse(message, 409);
  }

  /**
   * Create an internal server error (500)
   * @param {string} message Error message
   * @returns {ErrorResponse}
   */
  static internal(message) {
    return new ErrorResponse(message, 500);
  }

  /**
   * Convert error to JSON response format
   * @returns {Object}
   */
  toJSON() {
    return {
      error: {
        name: this.name,
        message: this.message,
        statusCode: this.statusCode,
        timestamp: this.timestamp,
        stack: process.env.NODE_ENV === 'development' ? this.stack : undefined,
      },
    };
  }
}

export default ErrorResponse;