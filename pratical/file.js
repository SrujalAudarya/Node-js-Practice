const fs = require('fs');

// console.log(fs);

// fs.writeFileSync('file.txt', 'Hello, this is a test file from write file sync!');

// fs.writeFile('file2.txt', 'Hello, this is a test file from write file!', (err) => {
//   if (err) {
//     console.error('Error writing to file:', err);
//   } else {
//     console.log('File written successfully!');
//   }
// });

console.log(fs.readFileSync('file.txt').toString());

console.log(fs.readFileSync('file2.txt', "utf-8"));

fs.readFile('file.txt', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log(data.toString());
  }
});