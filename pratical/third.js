const fs = require('fs');
const os = require('os');
console.log('--- OS Module Demo ---');
console.log('OS Platform:', os.platform());
console.log('OS Type:', os.type());
console.log('OS Release:', os.release());
console.log('Total Memory:', (os.totalmem() / (1024 * 1024)).toFixed(2), 'MB');
console.log('Free Memory:', (os.freemem() / (1024 * 1024)).toFixed(2), 'MB');
console.log('CPU Architecture:', os.arch());
console.log('Number of CPU cores:', os.cpus().length);

console.log('\n--- FS Module Demo ---');
fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
    if (err) throw err;
    console.log('File "example.txt" has been created.');

    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('Content of "example.txt":', data);
        fs.appendFile('example.txt', '\nAppended text.', (err) => {
            if (err) throw err;
            console.log('Data appended to "example.txt".');
            fs.rename('example.txt', 'new_example.txt', (err) => {
                if (err) throw err;
                console.log('File renamed to "new_example.txt".');
                fs.unlink('new_example.txt', (err) => {
                    if (err) throw err;
                    console.log('File "new_example.txt" deleted successfully.');
                });
            });
        });
    });
});
