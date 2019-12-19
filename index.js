// Use Node's require() function
// to access the node File System
// module.
const fs = require('fs');

// "argv" stands for "argument vector"
// (a vector is basically an array)
const fileName = process.argv[2];

// Error-first callback
function printContents(error, buffer) {
    if (error) {
        console.log(error);
    } else {
        console.log(buffer.toString());
    }
}

fs.readFile(fileName, printContents);