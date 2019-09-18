const {
  isString,
  isNum,
  isArray,
  isObject,
  isBoolean,
  isFunction,
  isArrayOfStrings,
  isArrayOfNumbers,
  isArrayOfObjects,
  isArrayOfBooleans,
  getValidator,
  makeString,
  makeBoolean,
  makeNum,
  makeDate,
  getCaster
} = require('../lib/validator.js');

class Schema {
  /**
   * Create a model schema
   * @param {object} schema - the schema to apply to models
   */
  constructor(schema) {
    this.schema = schema;
    
  }

  /**
   * Run validation on the supplied model 
   * @param {object} model - the model to validate
   * @throws {ModelError} throws if model does not conform to schema
   * @returns {object} - validated data record
   */
  validate(model) {

  }
}

module.exports = Schema;