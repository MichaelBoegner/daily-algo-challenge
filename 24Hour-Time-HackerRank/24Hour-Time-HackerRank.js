'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    let arrayS = s.split(""),
        pmFlag = 0,
        amFlag = 0;
    
  
    if(arrayS[8] === "P") {
       pmFlag = 1; 
    } else {
        amFlag = 1;
    } 
    
    arrayS.splice(8, 2);
    arrayS.splice(2, 1);
    arrayS.splice(4, 1);
    
    let arraySNumbers = arrayS.map( element => parseInt(element));
    
    if(pmFlag === 1 && arraySNumbers[0] === 0 && arraySNumbers[1] < 8 && arraySNumbers[1] !== 0) {
        arraySNumbers[0] += 1;
        arraySNumbers[1] += 2; 
    } else if(pmFlag === 1 && arraySNumbers[0] === 0 && arraySNumbers[1] === 8) {
        arraySNumbers[0] = 2;
        arraySNumbers[1] = 0; 
    } else if(pmFlag === 1 && arraySNumbers[0] === 0 && arraySNumbers[1] === 9) {
        arraySNumbers[0] = 2;
        arraySNumbers[1] = 1; 
    } else if(pmFlag === 1 && arraySNumbers[0] === 1 && arraySNumbers[1] === 0) {
        arraySNumbers[0] = 2;
        arraySNumbers[1] = 2; 
    } else if(pmFlag === 1 && arraySNumbers[0] === 1 && arraySNumbers[1] === 1) {
        arraySNumbers[0] = 2;
        arraySNumbers[1] = 3; 
    } else if(amFlag === 1 && arraySNumbers[0] === 1 && arraySNumbers[1] === 2) {
        arraySNumbers[0] = 0;
        arraySNumbers[1] = 0; 
    } 
    
    arrayS = arraySNumbers.join("");
    arrayS = arrayS.split("")
    arrayS.splice(2, 0, ":");
    arrayS.splice(5, 0, ":");
    arrayS = arrayS.join("");

    return arrayS;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
