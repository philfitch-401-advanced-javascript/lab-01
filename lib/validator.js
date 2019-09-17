
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
 * TODO: Define the rules ... how do we send them in? How do we identify?
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
  getValidator
};


