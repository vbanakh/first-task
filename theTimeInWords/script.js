'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}
   
let time = '';
const timeWords = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty-two', 'twenty-three', 'twenty-four', 'twenty five', 'twenty-six', 'twenty-seven', 'twenty-eight', 'twenty nine'];
const minutePast = (h, m) => {
    time = timeWords[m - 1] + ' minute' + (m <= 1 ? '' : 's') + ' past ' + timeWords[h - 1];
}
const  minuteTo = (h, m) => {
    time = timeWords[60 - m - 1] + ' minutes to ' + timeWords[h];
}
const quarterTo = h => time = 'quarter to ' + timeWords[h];
const halfPast = h => time = 'half past ' + timeWords[h - 1];
const quarterPast = h => time = 'quarter past ' + timeWords[h - 1];
const equalZero = h => time = timeWords[h - 1] + " o' clock";

// Complete the timeInWords function below.
function timeInWords(h, m) {
    if (m === 0) {
        equalZero(h);
    } else if (m === 15) {
       quarterPast(h);
    } else if (m === 30) {
        halfPast(h);
    } else if (m === 45) {
       quarterTo(h);
    } else if (m < 30) {
        minutePast(h, m);
    } else if (m > 30) {
        minuteTo(h, m);
    }
    return time   
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = parseInt(readLine(), 10);

    const m = parseInt(readLine(), 10);

    let result = timeInWords(h, m);

    ws.write(result + "\n");

    ws.end();
}