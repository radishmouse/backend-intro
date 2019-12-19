// Use Node's require() function
// to access the node File System
// module.
const fs = require('fs');
const printer = require('./printer');

// "argv" stands for "argument vector"
// (a vector is basically an array)
const fileName = process.argv[2];

fs.readFile(fileName, printer.printSentiment);