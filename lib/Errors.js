
class CastError extends Error {
  constructor(expectedType, providedValue) {
    super(`Expected ${expectedType}. ${providedValue} is invalid type.`);
    this.expectedType = expectedType;
    this.providedValue = providedValue;
  }
}

class ModelError extends Error {
  constructor(errors) {
    let message = '';
    super(message);
    this.errors = errors;
    errors.forEach(element => {
      message += element;
    });
  }
}

module.exports = {
  CastError,
  ModelError
};