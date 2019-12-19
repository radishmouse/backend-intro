
// Importing the sentiment module from the 
// project's node_modules directory.
const Sentiment = require('sentiment');

// Create a new Sentiment analyzer object/instance.
const sentiment = new Sentiment();

// Error-first callback
function printContents(error, buffer) {
    if (error) {
        console.log(error);
    } else {
        console.log(buffer.toString());
    }
}

// "Shape" the function so that it
// is an error-first callback
function printSentiment(error, buffer) {
    if (error) {
        console.log(error);
    } else {
        // Use the thing!
        const result = sentiment.analyze(buffer.toString());
        console.dir(result);    
    }
}

// module.exports = printContents;
// module.exports = printSentiment;

// Make both available!
module.exports = {
    // You can omit the colon and the value
    // if the value is the same word
    // as the key
    printContents,
    printSentiment
};