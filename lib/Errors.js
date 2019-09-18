
class CastError extends Error {
  constructor(expectedType, providedValue) {
    super(`Expected ${expectedType}. ${providedValue} is invalid type.`);
    this.expectedType = expectedType;
    this.providedValue = providedValue;
  }
}

class ModelError extends Error {

}

module.exports = {
  CastError,
  ModelError
};