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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    let builder = [],
        spaceTracker = [],
        spaces = 0;
        
    //spaces tracker
    for(let i = 0; i < n; i++ ) {
        spaces = n-1-i;
        spaceTracker.push(spaces);
    }
    
    for(let i = 0; i < n; i++) {
        for(let j = -1; j < n; j++) {
            if(j === -1) {
                builder[i] = [];
            } else if(spaceTracker[i] > 0) {
                builder[i][j] = (" ");
                spaceTracker[i] = spaceTracker[i] - 1;
            } else {
                builder[i][j] = ('#');
            }
        }
    }
    
    for(let i = 0; i < n; i++) {
        console.log(builder[i].join(""))
    }
    
    return

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
