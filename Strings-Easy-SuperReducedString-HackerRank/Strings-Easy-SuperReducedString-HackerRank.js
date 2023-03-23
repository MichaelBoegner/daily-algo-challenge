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
 * Complete the 'superReducedString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function superReducedString(s) {
    let arrayString = s.split(""),
        runAgainCounter = 0,
        runAgainFlag = 1;
    

    while(runAgainFlag === 1) {
        for(let i = 1; i < arrayString.length; i++) {
            if(arrayString[i] === arrayString[i-1]){
                arrayString.splice(i-1,2);
                runAgainCounter++;
            } 
        }
        
        if(runAgainCounter > 0) {
            runAgainFlag = 1;
            runAgainCounter = 0;
        } else {
            runAgainFlag = 0;
        }
    }

            
    let joinedArrayString = arrayString.join("");
    if(joinedArrayString === "") {
        return "Empty String";
    } else {
        return joinedArrayString;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = superReducedString(s);

    ws.write(result + '\n');

    ws.end();
}
