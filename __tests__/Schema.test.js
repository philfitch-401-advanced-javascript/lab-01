const Schema = require('../lib/Schema');

describe('Schema', () => {
  const personSchema = {
    'firstName': {
      type: String,
      required: true
    },
    'lastName': {
      type: String,
      required: true
    },
    'hair': {
      type: Object,
      required: false
    },
    'favoriteFoods': {
      type: Object,
      required: false
    },
    'married': {
      type: Boolean,
      required: false
    },
    'kids': {
      type: Number,
      required: false
    }
  };

  const schema = new Schema(personSchema);
  const goodPerson = {
    'firstName': 'Chris',
    'lastName': 'Sample',
    'hair': {
      'type': 'wavy',
      'color': 'brown'
    },
    'favoriteFoods': [
      'pizza',
      'cupcakes',
      'salmon'
    ],
    'married': true,
    'kids': 3
  };
  const badPerson = {
    'firstName': 'Chris',
    'lastName': 'Sample',
    'hair': {
      'type': 'wavy',
      'color': 'brown'
    },
    'favoriteFoods': [
      'pizza',
      'cupcakes',
      'salmon'
    ],
    'married': true,
    'kids': 3
  };

  it('validates a correct model', () => {

  });

  it('throws on invalid model', () => {

  });

  // more test cases...
});