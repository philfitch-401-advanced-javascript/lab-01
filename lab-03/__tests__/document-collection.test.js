const DocumentCollection = require('../lib/document-collection');
const path = require('path');

jest.mock('../lib/files.js', () => ({
  readFile: jest.fn(),
  writeFile: jest.fn(),
  readdir: jest.fn(),
}));

// for setting up mock expectations
const { readFile, writeFile, readdir } = require('../lib/files');

describe('Document Collection', () => {
  // TODO
  it('saves an object to a folder path', () => {
    const obj = {
      name: 'ball',
      shape: 'sphere'
    };

    const writePromise = Promise.resolve(obj);
    writeFile.mockReturnValueOnce(writePromise);

    const dir = 'toys';
    const toys = new DocumentCollection(dir);

    return toys.save(obj)
      .then(object => {
        expect(path.dirname(writeFile.mock.calls[0][0])).toBe(dir);
        expect(writeFile.mock.calls[0][1]).toBe(JSON.stringify(obj));
        expect(object._id).toEqual(expect.any(String));
      });
  });

  it('reads an object from a file', () => {
    const obj = {
      name: 'ball',
      shape: 'sphere',
      _id: 'ajdng'
    };

    const readPromise = Promise.resolve(JSON.stringify(obj));
    readFile.mockReturnValueOnce(readPromise);

    const dir = 'toys';
    const toys = new DocumentCollection(dir);

    const id = obj._id;

    return toys.get(id)
      .then(object => {
        expect(readFile.mock.calls[0][0]).toBe(`${dir}/${id}.json`);
        expect(object._id).toBe('ajdng');
      });
  });

  it('reads all objects from a directory', () => {
    const obj = {
      name: 'ball',
      shape: 'sphere',
      _id: 'ajdng'
    };

    const readDirPromise = Promise.resolve(['ajdng.json']);
    readdir.mockReturnValueOnce(readDirPromise);

    const readPromise = Promise.resolve(JSON.stringify(obj));
    readFile.mockReturnValueOnce(readPromise);

    const dir = 'toys';
    const toys = new DocumentCollection(dir);

    return toys.getAll()
      .then(array => {
        expect(readdir.mock.calls[0][0]).toBe(dir);
        expect(readFile.mock.calls[0][0]).toBe(`${dir}/${obj._id}.json`);
        expect(array[0]._id).toBe(obj._id);
      });
  });
});

