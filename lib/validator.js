
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

// /**
//  * Is this an array of strings?
//  * @param {array} input 
//  * @returns {boolean}
//  */
// const isArrayOfStrings = (/*input*/) => {
//   if(!Array.isArray(input)) {
//     return false;
//   }
//   input.forEach(idx => {
//     if(!typeof idx === 'string') {
//       return false;
//     } else {
//       return true;
//     }
//   };
    
// };

/**
 * Based on a set of rules, what is correct validator?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param rules
 * @returns {boolean}
 */
const getValidator = (/*rules*/) => {
  // CHANGE ME
  return isString;
};

module.exports = {
  isString,
  isNum,
  isArray,
  isObject,
  isBoolean,
  isFunction,

  // isArrayOfStrings,
  // moar array types...

  getValidator
};


