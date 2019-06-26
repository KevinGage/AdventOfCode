#!/usr/bin/node
const readline = require('readline');
const fs = require('fs');

const input = [];
const fabric = [];

const setupFabricMatrix = () => {
  for (let i = 0; i < 1000; i++) {
    const row = [];
    for (let j = 0; j < 1000; j++) {
      row.push(0);
    }
    fabric.push(row);
  }
}

const mapSquares = () => {
  for (let square of input) {
    let squareParams = square.split(' ');
    let distanceMeasurements = squareParams[2].split(',');
    let dimentions = squareParams[3].split('x');

    let h = parseInt(dimentions[1]);
    let w = parseInt(dimentions[0]);
    
    let topBegin = parseInt(distanceMeasurements[1].slice(0, -1));
    let topEnd = topBegin + h - 1;
    let leftBegin = parseInt(distanceMeasurements[0]);
    let leftEnd = leftBegin + w - 1;

    // console.log(squareParams[0] + ": " + leftBegin + ", " + leftEnd + ", " + topBegin + ", " + topEnd);
    // #1293: 91, 104, 750, 770
    
    for (let i = 0; i < fabric.length; i++) {
      if (topBegin <= i && topEnd >= i) {
        for(let j = 0; j < fabric[i].length; j++) {
          if (leftBegin <= j && leftEnd >= j) {
            fabric[i][j]++;
          }
        }
      }
    }
  }
}

const countOverlaps = () => {
  let overlapCount = 0;
  for(let row of fabric){
    for (let column of row) {
      if (column > 1) {
        overlapCount++
      }
    }
  }
  return overlapCount;
}

const readInterface = readline.createInterface({
  input: fs.createReadStream('./input')
});

readInterface.on('line', function(line) {
  input.push(line);
}).on('close', () => {
  setupFabricMatrix();
  mapSquares();
  console.log(countOverlaps());
});