# Replace word with emoji

This exercise is more free-form than the other two.

You will write a command line program that can be called like so:

```
node index.js I have joy in my heart when my code works!
```

It should print:

```
I have 😂 in my ❤️ when my code works!
```

## Install the `emoji-emotion` module with `npm`

The github page for the project is here: https://github.com/words/emoji-emotion#readme

The module provides an array of objects, each of which looks like this:

```js
{ name: '100', emoji: '💯', polarity: 3 }
```

## Save the command line arguments to a variable

Make sure to skip over the first two items in `process.argv`

Hint: you should leave it as an array (that is, do not convert it to a string).

## Write a function that looks for a word in the `emotion` array.

Name your function `findEmoji`. It should accept a single argument - a word that it should find the equivalent emoji for.

It should return the `.emoji` value from the object if the `.name` matches the value of the argument.

If it does not find a match, it should return the original argument.

### Put your function in its own file

Make sure to `module.exports =` and `require()`.

## Use your `findEmoji` function to transform the array of command line arguments.

Hint: To transform an array, call `.map()` and pass it a reference to your `findEmoji` function.

## `console.log()` the result.