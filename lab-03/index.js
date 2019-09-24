const DocumentCollection = require('./lib/document-collection');

const toys = new DocumentCollection('./toys');

// write some code to exercise your document collection

const obj = {
  name: 'rubic\'s cube',
  shape: 'cube'
};

toys.save(obj);

// toys.get('')
//   .then(stuff => {
//     console.log('get', stuff);
//   });

// toys.getAll()
//   .then(all => console.log(all));