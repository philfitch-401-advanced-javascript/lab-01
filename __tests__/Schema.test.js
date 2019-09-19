const Schema = require('../lib/Schema');
const { ModelError } = require('../lib/Errors.js');

describe('Schema', () => {
  const personSchema = {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    married: {
      type: Boolean,
      required: false
    },
    kids: {
      type: Number,
      required: false
    }
  };

  const schema = new Schema(personSchema);
  const goodPerson = {
    firstName: 'Chris',
    lastName: 'Sample',
    married: true,
    kids: 3
  };

  const badPerson = {
    firstName: 'Chris',
    lastName: 'Sample',
    hair: {
      'type': 'wavy',
      'color': 'brown'
    },
    favoriteFoods: [
      'pizza',
      'cupcakes',
      'salmon'
    ],
    married: 'true',
    kids: 3
  };

  const badPerson2 = {
    firstName: 'Chris',
    lastName: 'Sample',
    hair: {
      'type': 'wavy',
      'color': 'brown'
    },
    favoriteFoods: [
      'pizza',
      'cupcakes',
      'salmon'
    ],
    married: 7,
    kids: 3
  };

  it('validates a correct model', () => {
    expect(schema.validate(goodPerson)).toEqual(goodPerson);
  });

  it('coerces string to boolean', () => {
    expect(schema.validate(badPerson)).toEqual(goodPerson);
  });

  it('throws on invalid model', () => {
    expect(() => {
      schema.validate(badPerson2);
    }).toThrow(ModelError);
  });

});