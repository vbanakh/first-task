'use strict';

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

// Complete the plusMinus function below.
function plusMinus(arr) {
    let plus = 0;
    let minus = 0;
    let zero = 0;
    const arrayLength = arr.length;
    for (let i = 0; i < arrayLength; i++) {
        if (arr[i] > 0) {
            plus++;
        } else if (arr[i] < 0) {
            minus++;
        } else {
            zero++;
        }
    }
    console.log(plus / arrayLength);
    console.log(minus / arrayLength);
    console.log(zero / arrayLength);
}


function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}