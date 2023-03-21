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
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function climbingLeaderboard(ranked, player) {
    let playerRank = 0,
        newRankedRanks = [[1,0]],
        playerRankingsReturned = [];
        
        
    
    for(let i = 0; i < player.length; i++) {    
        let newRanked = ranked.map();
        ranked.push(player[i]);
        
        console.log(ranked, "NEW RANKED")
        // newRanked = newRanked.reverse();
        
        if(newRanked[i] === newRanked[i-1]) {
            newRankedRanks[i] = [newRankedRanks[i-1], newRanked[i]];
        } else {
            newRankedRanks[i] = [newRankedRanks[i-1] + 1, newRanked[i]];
        }
    }
    console.log(newRankedRanks)
    
    // for(let i = 0; i < player.length; i++) {
    //     for(let j = 0; i < newRankedRanks.length; j++) {
    //         if(player[i] === newRankedRanks[j][1]) {
    //             playerRankingsReturned[i] = newRankedRanks[j];
    //         }
    //     }
    // }
    
    return playerRankingsReturned;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const rankedCount = parseInt(readLine().trim(), 10);

    const ranked = readLine().replace(/\s+$/g, '').split(' ').map(rankedTemp => parseInt(rankedTemp, 10));

    const playerCount = parseInt(readLine().trim(), 10);

    const player = readLine().replace(/\s+$/g, '').split(' ').map(playerTemp => parseInt(playerTemp, 10));

    const result = climbingLeaderboard(ranked, player);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
