const fs = require("fs");

// fs.writeFileSync("sample.txt", "This is a sample file.");

// fs.writeFile("sample.txt", "This is an updated sample file.",
//      (err) =>{
//     if(err){
//         console.log("Error writing file:", err);
//     }
// });

// let res = fs.readFileSync("sample.txt", "utf-8");
// console.log("File content:", res);

console.log("Starting to read file...");
fs.readFile("sample.txt", "utf-8", (err, data) =>{
    if(err){
        console.log("Error reading file:", err);
    } else {
        console.log("File content:", data);
    }
});
console.log("Read file request sent.");