const validator = require('../lib/validator.js');
const { ModelError } = require('./Errors.js');

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
    const errors = [];
    const validated = {};
    const keys = Object.keys(this.schema);

    for(let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const type = this.schema[key].type;
      const caster = validator.getCaster(type);
      // console.log(key, caster);
      try {
        validated[key] = caster(model[key]);
      }
      catch(error) {
        errors.push(`invalid ${key}`);
      }
      // console.log('caster ', errors);
    }

    for(let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const type = this.schema[key].type;
      const typeCheck = validator.getValidator(type);

      // console.log(key, model[key], typeCheck(model[key]));

      if(!typeCheck(model[key])) {
        errors.push(`invalid ${key}`);
      }
      console.log('checker ', errors);
    }

    if(errors.length > 0) {
      throw new ModelError(errors);
    }
    return validated;
  }
}

module.exports = Schema;