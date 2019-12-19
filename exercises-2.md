
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