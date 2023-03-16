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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let positive = 0, 
        negative = 0, 
        zero = 0; 

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0) {
            positive++;
        } else if(arr[i] < 0) {
               negative++;
          } else {
              zero++;
          }
    };

    let positiveRatio = positive/arr.length,
        negativeRatio = negative/arr.length,
        zeroRatio = zero/arr.length;
        
    positiveRatio = positiveRatio.toFixed(6);
    negativeRatio = negativeRatio.toFixed(6);
    zeroRatio = zeroRatio.toFixed(6);
    
    console.log(positiveRatio);
    console.log(negativeRatio);
    console.log(zeroRatio);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
