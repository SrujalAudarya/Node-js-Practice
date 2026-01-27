const fs = require("fs");

// fs.appendFile("sample.txt", "Hello World!\n", (err) =>{
//     if (err) throw err;
//     console.log("The data was appended to file!");
// });

// fs.appendFileSync("sample.txt", "\nGood Morning.\n");

// fs.unlink("sample_sync.txt", (err) => {
//     if (err) throw err;
//     else{
//         console.log("File deleted successfully.");
//     }
// })

// fs.mkdir("srujal", (err) => {
//     if (err) throw err;
//     else{
//         console.log("Directory created successfully.");
//     }
// });

// fs.exists("srujal", (exists) => {
//     console.log(exists ? "Directory exists." : "Directory does not exist.");
// });

// fs.exists("sample.txt", (exists) => {
//     console.log(exists ? "file exists." : "file does not exist.");
// });

// fs.readdir(".", (err, files) => {
//     if (err) throw err;
//     console.log(files);
// });

// fs.rmdir("srujal", (err) => {
//     if (err) throw err;
//     else{
//         console.log("Directory deleted successfully.");
//     }
// });

// fs.rename("sample.txt", "example.txt", (err) => {
//     if (err) throw err;
//     else{
//         console.log("File renamed successfully.");
//     }
// });

fs.stat("example.txt", (err, stats) => {
    if (err) throw err;
    console.log(stats);
})

fs.copyFile("example.txt", "copy_example.txt", (err) => {
    if (err) throw err;
    else{
        console.log("File copied successfully.");
    }
});