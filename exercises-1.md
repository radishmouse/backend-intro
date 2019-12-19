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

# Madlib with pets and supervillains

## Create a new Node project called madlib-node

Make a new directory and use `npm init -y` to create a `package.json` file.

## Install these dependencies using `npm install`:

- `cat-names` or `dog-names`
- `supervillains`
- `superb`

## Write a function called `petDefense()`

It should accept these arguments:

- `petName`
- `vaillainName`
- `adjective`

It should return a string that substitutes the values of the arguments in the form of:

```
The <adjective> <petName> saved us from <villainName>!
```

Manually call your function to make sure it works.

## Create a `defense` module

Create a separate file for your `petDefense()` function.

Make sure to `module.exports =` your function and then `require()` it into the `index.js`

## Import the third party modules into your `index.js`

Add `require()` calls for each of the modules you installed with `npm`:

- `cat-names` or `dog-names`
- `supervillains`
- `superb`

## Get a random word/name from each module

Look over the documentation for each module to confirm that you know how to get a random word or name:

- https://github.com/sindresorhus/superb
- https://github.com/sindresorhus/cat-names
- https://github.com/sindresorhus/supervillains

Save the random words/names in variables.

## Use the random words/names with your `petDefense()` function.

Pass the random words/names to `petDefense()`.

Save the result in a variable and `console.log()` the variable.

Run your program several times and confirm that it generates a new madlib each time.

## Bonus: use `fs.writeFile()` to save the madlibs to a file

Read over the documentation for `fs.writeFile()`.

Try using it to save each madlib to a file called `madlibs.txt`.

Hint: you'll need to specify `flag: 'a'` as one of the options. This will append instead of overwriting.