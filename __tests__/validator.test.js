const validator = require('../lib/validator.js');
const {
  makeString,
  makeBoolean,
  makeNum,
  // makeDate,
  getCaster
} = require('../lib/validator.js');

describe('validator module', () => {
  
  const str = 'yes';
  const num = 1;
  const arr = ['a'];
  const obj = { x: 'y' };
  const func = () => {};
  const bool = false;
  const date = new Date();
  const testDate = date;

  describe('performs basic validation of', () => {

    it('strings', () => {
      expect(validator.isString(str)).toBeTruthy();
      expect(validator.isString(num)).toBeFalsy();
      expect(validator.isString(arr)).toBeFalsy();
      expect(validator.isString(obj)).toBeFalsy();
      expect(validator.isString(func)).toBeFalsy();
      expect(validator.isString(bool)).toBeFalsy();
    });

    it('numbers', () => {
      expect(validator.isNum(str)).toBeFalsy();
      expect(validator.isNum(num)).toBeTruthy();
      expect(validator.isNum(arr)).toBeFalsy();
      expect(validator.isNum(obj)).toBeFalsy();
      expect(validator.isNum(func)).toBeFalsy();
      expect(validator.isNum(bool)).toBeFalsy();
    });

    it('arrays', () => {
      expect(validator.isArray(str)).toBeFalsy();
      expect(validator.isArray(num)).toBeFalsy();
      expect(validator.isArray(arr)).toBeTruthy();
      expect(validator.isArray(obj)).toBeFalsy();
      expect(validator.isArray(func)).toBeFalsy();
      expect(validator.isArray(bool)).toBeFalsy();
    });

    it('objects', () => {
      expect(validator.isObject(str)).toBeFalsy();
      expect(validator.isObject(num)).toBeFalsy();
      expect(validator.isObject(arr)).toBeFalsy();
      expect(validator.isObject(obj)).toBeTruthy();
      expect(validator.isObject(func)).toBeFalsy();
      expect(validator.isObject(bool)).toBeFalsy();
    });

    it('booleans', () => {
      expect(validator.isBoolean(str)).toBeFalsy();
      expect(validator.isBoolean(num)).toBeFalsy();
      expect(validator.isBoolean(arr)).toBeFalsy();
      expect(validator.isBoolean(obj)).toBeFalsy();
      expect(validator.isBoolean(func)).toBeFalsy();
      expect(validator.isBoolean(bool)).toBeTruthy();
    });

    it('functions', () => {
      expect(validator.isFunction(str)).toBeFalsy();
      expect(validator.isFunction(num)).toBeFalsy();
      expect(validator.isFunction(arr)).toBeFalsy();
      expect(validator.isFunction(obj)).toBeFalsy();
      expect(validator.isFunction(func)).toBeTruthy();
      expect(validator.isFunction(bool)).toBeFalsy();
    });
  });

  describe('performs array validation of', () => {

    const arrayOfStrings = ['a', 'b', 'c'];
    const arrayOfNumbers = [1, 2, 3];
    const arrayOfObjects = [{}, {}, {}];
    const arrayOfBooleans = [true, false, true];

    it('strings', () => {
      expect(validator.isArrayOfStrings(arrayOfStrings)).toBeTruthy();
      expect(validator.isArrayOfStrings(arrayOfNumbers)).toBeFalsy();
      expect(validator.isArrayOfStrings(arrayOfObjects)).toBeFalsy();
      expect(validator.isArrayOfStrings(arrayOfBooleans)).toBeFalsy();
    });

    it('numbers', () => {
      expect(validator.isArrayOfNumbers(arrayOfStrings)).toBeFalsy();
      expect(validator.isArrayOfNumbers(arrayOfNumbers)).toBeTruthy();
      expect(validator.isArrayOfNumbers(arrayOfObjects)).toBeFalsy();
      expect(validator.isArrayOfNumbers(arrayOfBooleans)).toBeFalsy();
    });

    it('objects', () => {
      expect(validator.isArrayOfObjects(arrayOfStrings)).toBeFalsy();
      expect(validator.isArrayOfObjects(arrayOfNumbers)).toBeFalsy();
      expect(validator.isArrayOfObjects(arrayOfObjects)).toBeTruthy();
      expect(validator.isArrayOfObjects(arrayOfBooleans)).toBeFalsy();
    });

    it('booleans', () => {
      expect(validator.isArrayOfBooleans(arrayOfStrings)).toBeFalsy();
      expect(validator.isArrayOfBooleans(arrayOfNumbers)).toBeFalsy();
      expect(validator.isArrayOfBooleans(arrayOfObjects)).toBeFalsy();
      expect(validator.isArrayOfBooleans(arrayOfBooleans)).toBeTruthy();
    });
  });

  describe('get validator for', () => {

    it('strings', () => {
      expect(validator.getValidator(String)).toBe(validator.isString);
    });
    
    it('numbers', () => {
      expect(validator.getValidator(Number)).toBe(validator.isNum);
    });

    it('arrays', () => {
      expect(validator.getValidator(Array)).toBe(validator.isArray);
    });

    it('objects', () => {
      expect(validator.getValidator(Object)).toBe(validator.isObject);
    });

    it('booleans', () => {
      expect(validator.getValidator(Boolean)).toBe(validator.isBoolean);
    });

    it('functions', () => {
      expect(validator.getValidator(Function)).toBe(validator.isFunction);
    });

    it('array of strings', () => {
      expect(validator.getValidator('Array of Strings')).toBe(validator.isArrayOfStrings);
    });

    it('array of numbers', () => {
      expect(validator.getValidator('Array of Numbers')).toBe(validator.isArrayOfNumbers);
    });

    it('array of objects', () => {
      expect(validator.getValidator('Array of Objects')).toBe(validator.isArrayOfObjects);
    });

    it('array of booleans', () => {
      expect(validator.getValidator('Array of Booleans')).toBe(validator.isArrayOfBooleans);
    });
  });

  describe('coerces data type or throws error', () => {

    it('coerces strings', () => {
      expect(makeString(str)).toEqual('yes');
      expect(makeString(num)).toEqual('1');
      expect(makeString(bool)).toEqual('false');
      // expect(makeString(date)).toEqual();
      expect(() => {
        makeString(obj);
      }).toThrowError('invalid type');
      expect(() => {
        makeString(arr);
      }).toThrowError('invalid type');
    });
    
    it('coerces booleans', () => {
      expect(makeBoolean(str)).toEqual(true);
      expect(makeBoolean(num)).toEqual(true);
      expect(makeBoolean(bool)).toEqual(false);
      // expect(makeBoolean(date)).toEqual(true);
      expect(() => {
        makeBoolean(obj);
      }).toThrowError('invalid type');
      expect(() => {
        makeBoolean(arr);
      }).toThrowError('invalid type');
    });
    
    it('coerces numbers', () => {
      expect(makeNum(str)).toEqual(NaN);
      expect(makeNum(num)).toEqual(1);
      expect(makeNum(bool)).toEqual(0);
      // expect(makeNum(date)).toEqual();
      expect(() => {
        makeBoolean(obj);
      }).toThrowError('invalid type');
      expect(() => {
        makeBoolean(arr);
      }).toThrowError('invalid type');
    });
    
    // it.skip('coerces dates', () => {

    // })
  });

  describe('get caster for', () => {

    it('strings', () => {
      expect(getCaster(String)).toBe(makeString);
    });
    
    it('numbers', () => {
      expect(getCaster(Number)).toBe(makeNum);
    });
    
    it('booleans', () => {
      expect(getCaster(Boolean)).toBe(makeBoolean);
    });

    // it('dates', () => {
    //   expect(getCaster(Date)).toBe(makeDate);
    // });
  });
});