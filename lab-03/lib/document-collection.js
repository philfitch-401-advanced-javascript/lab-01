const files = require('./files');
// use npm to find a module for creating ids
const shortid = require('shortid');
const path = require('path');

class DocumentCollection {
  constructor(folder) {
    this.folder = folder;
  }

  save(object) {
    // TODO:
    // 1. assign an id
    const id = shortid.generate();
    object._id = id;
    // 2. serialize object
    const serializedObject = JSON.stringify(object);
    // 3. use promisified fs to write to folder path using id.json as file name
    return files.writeFile(`${this.folder}/${id}.json`, serializedObject, 'utf8')
    // 4. "return" object (which now has an id)
      .then(() => {
        return object;
      })
    // 5. if expected, turn promisified fs errors into meaningful database errors
      .catch(err => { console.log(err); });

  }

  get(id) {
    // TODO:
    // 1. create file path from id
    const filePath = `${this.folder}/${id}.json`;
    // 2. use promisified fs to read file
    return files.readFile(filePath, 'utf8')
    // 3. deserialize contents
    // 4. "return" object
      .then(json => {
        return JSON.parse(json);
      })
    // 5. if expected, turn promisified fs errors into meaningful database errors
      .catch(err => { console.log(err); });
  }

  getAll() {
    // TODO:
    // 1. read folder file names
    return files.readdir(this.folder)
    // 2. use Promise.all and map each file name to a this.get call (remove .json file extension!)
    // 3. "return" array of objects
      .then(files => {
        return Promise.all(files.map(file => {
          const fileId = path.parse(file).name;
          return this.get(fileId);
        }));
      })
    // 4. if expected, turn promisified fs errors into meaningful database errors
      .catch(err => {console.log(err); });
  }
}

module.exports = DocumentCollection;