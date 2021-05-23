export default class RimacError extends Error {
  /**
   * Constructor Custom Error
   * @param {*} status [400 - 401 - and others]
   * @param {*} type [0:Error, 1:Validation]
   * @param {*} id
   * @param {*} message [System Message]
   * @param {*} messageUser
   */
  constructor(status, type, id, message, messageUser, cause) {
    super(message);

    //Error.captureStackTrace(this, this.constructor);
    //Error.captureStackTrace is not a function

    this.name = "RimacError";
    this.status = status || 500;
    this.type = type || 0;
    this.id = id || 0;

    this.message =
      message || "Ocurrió un error inesperado. Por favor, intenta de nuevo";

    this.messageUser = messageUser || this.message;

    this.cause = cause;
  }
}
