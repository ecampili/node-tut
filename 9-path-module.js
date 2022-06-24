const path = require('path');

//Separator
console.log('path separator: ', path.sep);

// join
// el primero tiene que tener /
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log('filePath: ', filePath);

const base = path.basename(filePath);
console.log('base: ', base);

// absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log('absolute path: ', absolute);
