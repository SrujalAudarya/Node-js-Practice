const path = require("path");

// console.log(__filename); // full path to the current file
// console.log(__dirname); // directory of the current file
// console.log(path.basename(__filename)); // file name with extension
// console.log(path.basename(__dirname)); // last part of the directory path
// console.log(path.extname(__filename));// file extension
// console.log(path.parse(__filename));// parse the path into an object
// console.log(path.join("test", "folder1", "folder2", "hello.html")); // creates a path
console.log(path.resolve('folder1', 'file.txt'));