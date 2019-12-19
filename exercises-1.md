# The talking cow

You'll create a Node.js program that you run from the command line.

For example, if you run this:

```sh
node index.js Hey I am a cow!
```

It would print:

```
 _________________
< Hey I am a cow! >
 -----------------
        \   ^__^
         \  (oO)\_______
            (__)\       )\/\
             U  ||----w |
                ||     ||
```

## Create a new Node project called talking-cow

Make a new directory and use `npm init -y` to create a `package.json` file.

## Install the `cowsay` module:

In your project directory, run:

```sh
npm install cowsay
```

## Create an empty index.js

## Create a variable for the command line arguments

Previously, you accessed a single item from `process.argv` by using an index.

For this program, you will need to get multiple words. You can use the `.slice()` method to skip the first two arguments.

Then, you can convert the array into a string with `.join()`

```js
const words = process.argv.slice(2).join(' ');
```

## Create a variable for the result of calling `cowsay()`

```js
const theCowSaid = cowsay.say({
	text : words,
	e : "oO",
	T : "U "
})
```

## `console.log()` `theCowSaid` variable

Then run your program to make sure it works:

```sh
node index.js Hey I am a cow!
```

## Bonus 1: Customizing the eyes and the tongue

You passed an object to `cowsay.say()` that specifies not only the `text`, but also how to draw the eyes (`e`) and the tongue (`T`).

Change your code so that it captures the first two command line arguments (after `node index.js`) and uses these as the values for the `e` and `T` properties.

## Bonus 2: Create a function that wraps `cowsay.say()`

Write a function called `moo()` that accepts three arguments: `text`, `eyes`, and `tongue`. 

In the body of the function, call `cowsay.say()` using the `text`, `eyes`, and `tongue` arguments to customize what they cow says.

## Bonus 3: Create a module for `moo()`

Move your `moo()` function to a `moo.js` file.

Make sure to `module.exports =` your `moo()` function and `require()` it into your `index.js`.
