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
 * Complete the 'hackerlandRadioTransmitters' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY x
 *  2. INTEGER k
 */


/* IMPLEMENTATION STEPS
 * 1. Sort the locations, as they are currently out of order and therefore unrepresentative of      * their actual positions by index.
 * 2. Arrange the respective distances between each house in the same order as the houses. 
 * 3. Iteratively aggregate the distances and check each subsequent aggregate against the signal    * distance.
 * 4. When the aggregate distance exceeds signal distance, count the number of homes in that    
 * respective direction and store with the origin home's data.
 * 5. Compare homes' number of reached homes to each other and take the maximum total of homes 
 * reached and place antannae there.
*/


function hackerlandRadioTransmitters(x, k) {
    function Home(location, homesReachedForwards, homesReachedBackwards) {
        this.location = location;
        this.homesReachedForwards = homesReachedForwards;
        this.homesReachedBackwards = homesReachedBackwards;
    }
    
    let locationsSorted = x.sort((a,b) => a-b),
        distances = [],
        homes = [],
        signalStrength = k;
        
    //build distances array
    for(let i = 1; i < locationsSorted.length; i++) {
        distances[i-1] = locationsSorted[i] - locationsSorted[i-1];
    }
    
    //initiate home and sum distances from respective home locations and find homes reached forwards
    for(let i = 0; i < distances.length; i++) {
        homes[i] = new Home(locationsSorted[i], 0, 0);
        let maxDistance = 0;
        
        for(let j = i; j < distances.length; j++) {
            if(maxDistance < signalStrength){
                maxDistance += distances[j];       
            } else {}
        }
 
    }
    console.log(homes)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const x = readLine().replace(/\s+$/g, '').split(' ').map(xTemp => parseInt(xTemp, 10));

    const result = hackerlandRadioTransmitters(x, k);

    ws.write(result + '\n');

    ws.end();
}
