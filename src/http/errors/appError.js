

class BaseError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.name = Error.name;
    this.statusCode = statusCode;
    Error.captureStackTrace(this);
  }
  sendResponse(res) {
    return res
      .status(this.statusCode)
      .json({ success: false, error: this.message });
  }
  logError(err) {
    logger.log("debug", this.constructor.name);
    logger.log("error", err.stack);
  }
}


class InvalidUserDataError extends BaseError {}
class UserAlreadyExistError extends BaseError {}
class UserNotFoundError extends BaseError {}

class UnExpextedDatabaseError extends BaseError {}
class JWTGenerateError extends BaseError {}

class InvalidTodoData extends BaseError {}
class TodoNotFoundError extends BaseError {}

class PasswordDecryptionError extends BaseError {}
class InvalidCredentialsError extends BaseError {}
class InternelServerError extends BaseError {}
class UnAuthorizedError extends BaseError {}


module.exports = {
  InvalidUserDataError,
  UserAlreadyExistError,
  UnExpextedDatabaseError,
  JWTGenerateError,
  UserNotFoundError,
  InvalidTodoData,
  TodoNotFoundError,
  PasswordDecryptionError,
  InvalidCredentialsError,
  InternelServerError,
  UnAuthorizedError
}