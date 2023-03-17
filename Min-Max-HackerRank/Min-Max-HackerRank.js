//while i didn't have to worry about integer overflow, this was a reminder of javascripts' unusual reference structuring

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    let arrayMin = [],
        arrayMax = [],
        sumMax = 0,
        sumMin = 0,
        result = [0, 0];
        
        arrayMin = arr.sort();
        for(let i = 0; i < arr.length - 1; i++) {
            sumMin += arrayMin[i];
        }
        
        arrayMax = arr.reverse();
        for(let i = 0; i < arr.length - 1; i++) {
            sumMax += arrayMax[i];
        }
        
        result = [sumMin, sumMax];
        result = result.join(" ");
        
        console.log(result)
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
