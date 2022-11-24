#!/usr/bin/env node
const { args } = require("./util/args");
const { io } = require("./util/io");

const printHelp = () => console.log(`
Usage:
regtext -f <path>

Options:
 -f / --file : Read input from the file at the given path
`);
const printError = (msg) => console.error(`Error: ${msg}`)

// ---------------------------------------------------------------------
// Get input text to parse
// ---------------------------------------------------------------------

const inputMethods = [
    ["f", "file"]
];
const inputMethodParsers = {
    "f": io.getFileContents
}

// Try to get input value
let inputValue = null;
try {
    for(let [flag, flagV] of inputMethods) {
        let flagVal = null;
        if(args.hasFlag(flag, flagV) && (flagVal = args.getFlagValue(flag, flagV))) {
            inputValue = inputMethodParsers[flag](flagVal);
            break;
        }
    }
} catch(e) {
    return printError(e.message)
}

// If no input value could be fetched, print usage help
if(!inputValue)
    return printHelp();

console.log(inputValue);