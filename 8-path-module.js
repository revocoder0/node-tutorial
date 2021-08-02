const path = require('path');
console.log(path.sep);

const pathFile=path.join('/content/','subforder', 'text.txt');
console.log(pathFile);

const base = path.basename(pathFile);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subforder', 'text.txt');
console.log(absolute);
