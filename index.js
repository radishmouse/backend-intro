// Use Node's require() function
// to access the node File System
// module.
const fs = require('fs');

// "Pluck out" specific values from the object
const {printContents, printSentiment} = require('./printer');
// This is the "destructuring" syntax

// "argv" stands for "argument vector"
// (a vector is basically an array)
const fileName = process.argv[2];

fs.readFile(fileName, printSentiment);