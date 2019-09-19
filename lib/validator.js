const { CastError } = require('./Errors.js');

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
const isString = input => {
  return typeof input === 'string';
};

/**
 * Is this a number?
 * @param input
 * @returns {boolean}
 */
const isNum = input => {
  return typeof input === 'number';
};

/**
 * Is this an array?
 * @param input
 * @returns {boolean}
 */
const isArray = input => {
  return Array.isArray(input);
};

/**
 * Is this an object?
 * @param input
 * @returns {boolean}
 */
const isObject = input => {
  return typeof input === 'object' && !Array.isArray(input);
};

/**
 * Is this a boolean?
 * @param input
 * @returns {boolean}
 */
const isBoolean = input => {
  return typeof input === 'boolean';
};

/**
 * Is this a function?
 * @param input
 * @returns {boolean}
 */
const isFunction = input => {
  return typeof input === 'function';
};

/**
 * Is this an array of strings?
 * @param {array} input 
 * @returns {boolean}
 */
const isArrayOfStrings = input => {
  if(!Array.isArray(input)) {
    return false;
  }
  return input.every(isString);
};

/**
 * Is this an array of numbers?
 * @param {array} input
 * @returns {boolean}
 */
const isArrayOfNumbers = input => {
  if(!Array.isArray(input)) {
    return false;
  }
  return input.every(isNum);
};

/**
 * Is this an array of objects?
 * @param {array} input
 * @returns {boolean}
 */
const isArrayOfObjects = input => {
  if(!Array.isArray(input)) {
    return false;
  }
  return input.every(isObject);
};

/**
 * Is this an array of booleans?
 * @param {array} input
 * @returns {boolean}
 */
const isArrayOfBooleans = input => {
  if(!Array.isArray(input)) {
    return false;
  }
  return input.every(isBoolean);
};

/**
 * Based on a set of rules, what is correct validator?
 * @param rules
 * @returns {boolean}
 */
const getValidator = (rules) => {
  if(rules === String) {
    return isString;
  } else if(rules === Number) {
    return isNum;
  } else if(rules === Array) {
    return isArray;
  } else if(rules === Object) {
    return isObject;
  } else if(rules === Boolean) {
    return isBoolean;
  } else if(rules === Function) {
    return isFunction;
  } else if(rules === 'Array of Strings') {
    return isArrayOfStrings;
  } else if(rules === 'Array of Numbers') {
    return isArrayOfNumbers;
  } else if(rules === 'Array of Objects') {
    return isArrayOfObjects;
  } else if(rules === 'Array of Booleans') {
    return isArrayOfBooleans;
  }
};

/**
 * Can this pass for a String?
 * @param input
 * @returns {string}
 */
const makeString = input => {
  if(isString(input)) {
    return input;
  } else if(isArray(input)) {
    throw new CastError('string', 'Array');
  } else if(isObject(input)) {
    throw new CastError('string', 'Object');
  } else {
    const output = input.toString();
    return output;
  }
};

// TODO: Refactor other casters and their tests to throw CastErrors

/**
 * Can this pass for a Boolean?
 * @param input
 * @returns {boolean}
 */
const makeBoolean = input => {
  if(typeof(input) === 'boolean') {
    return input;
  } else if(isArray(input) || isObject(input)) {
    console.log('in else if', typeof input);
    throw new Error('invalid type');
  } else {
    const output = !!(input);
    console.log(typeof output);
    return output;
  }
};

/**
 * Can this pass for a Number?
 * @param input
 * @returns {number}
 */
const makeNum = input => {
  if(isNum(input)) {
    return input;
  } else if(isArray(input) || isObject(input)) {
    throw new Error('invalid type');
  } else {
    const output = Number(input);
    return output;
  }
};

/**
 * Can this pass for a Date?
 * @param input
 * @returns {date}
 */
const makeDate = input => {
  if(input instanceof Date) {
    return input;
  } else {
    throw new Error('invalid type');
  }

};

/**
 * Based on a set of rules, what is correct caster?
 * @param rules
 * @returns {function}
 */
const getCaster = (rules) => {
  if(rules === String) {
    return makeString;
  } else if(rules === Boolean) {
    return makeBoolean;
  } else if(rules === Number) {
    return makeNum;
  } else if(rules === Date) {
    return makeDate;
  }
};

module.exports = {
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
};


