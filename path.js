const path = require('path');

console.log(__filename);
console.log(__dirname);

console.log(path.basename(__filename));
console.log(path.basename(__dirname));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.join('folder1','example.txt'));

console.log(path.parse(__filename));