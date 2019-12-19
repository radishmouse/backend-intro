# backend-intro

## What is backend?

- It's a "website"
- It's what makes front-ends happen
- It's code that produces HTML

## Why is there backend?

- You can't hand-code everything
    - Too much stuff
    - Data is stored in a database, updated very frequently
- You want to automate the creation of HTML
- You want to users to be able to log in and interact
- Backends can provide data to mobile apps

## What is a server?

- It's a computer on the internet
- It's a program on a computer on the internet
- It's a program that is listening for connections from a client

## What is a client?

- It's program that provides a User Interface for interacting with data on a server

## How do clients and servers "talk"?

- They use a protocol
    - HTTP is the protocol of the web
    - A formal specification about what clients and servers can say to each other

## What programming languages can you use for writing backends?

- PHP: 90s-early 2000s
- Ruby: mid 2000s-now
- Python: mid 2000s-now
- Java
- C#
- Any language that can manipulate strings and connect to a network
    - HTTP is a plain-text protocol

## What are we building?

- Command line programs
    - Third party modules
- A tiny web server
- Bigger web servers
    - Express.js
- Database driven websites
    - User login
- APIs

## How do I start a node project?

```sh
npm init -y
```
## What does that do?

- It creates a `package.json` file

## What is `package.json`

- It's the project "manifest"
- A list of everything that your project needs in order to run.

## What's a module?

- It's code someone else wrote
- It's code you wrote and saved in another file

## How do you use a module?

- Call the `require()` function
- Pass it the name of the module

## What's a callback?

```js
function handleClick(event) {
    console.log('they clicked!')
}
myButton.addEventListener('click', handleClick);
```

## What's an error-first callback?

- A function that expects to receive any error information as the first argument
- It's Node's way of forcing you to do basic error handling
- It works because you can't "skip" arguments

```js
function printContents(error, buffer) {
    if (error) {
        console.log(error);
    } else {
        console.log(buffer.toString());
    }
}
fs.readFile(fileName, printSentiment);
```