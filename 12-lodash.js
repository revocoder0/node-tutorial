const lodash = require('lodash');

const items= [1, [2, [3, [4]]]];
const newItems = lodash.flatten(items);
console.log(newItems);