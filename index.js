
const validator = require('./lib/validator.js');

console.log(validator.isString('hello world'));
console.log(validator.isString(7));
console.log(validator.isNum(7));
console.log(validator.isNum([7]));
console.log(validator.isArray([7]));
console.log(validator.isArray({}));
console.log(validator.isObject({}));
console.log(validator.isBoolean({}));
console.log(validator.isBoolean(true));
console.log(validator.isFunction(true));
console.log(validator.isFunction(() => {}));
console.log(validator.isArrayOfStrings(() => {}));
console.log(validator.isArrayOfStrings(['a', 'b', 'c']));
console.log(validator.isArrayOfNumbers(['a', 'b', 'c']));
console.log(validator.isArrayOfNumbers([1, 2, 3]));
console.log(validator.isArrayOfObjects([1, 2, 3]));
console.log(validator.isArrayOfObjects([{}, {}, {}]));
console.log(validator.isArrayOfBooleans([{}, {}, {}]));
console.log(validator.isArrayOfBooleans([true, false, true]));