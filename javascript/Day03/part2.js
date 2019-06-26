#!/usr/bin/node
const readline = require('readline');
const fs = require('fs');

const input = [];
const squares = [];

const createSquares = () => {
  for (let line of input) {
    const square = {};

    let inputParams = line.split(' ');
    
    let distanceMeasurements = inputParams[2].split(',');
    let dimentions = inputParams[3].split('x');

    let h = parseInt(dimentions[1]);
    let w = parseInt(dimentions[0]);
    
    let topBegin = parseInt(distanceMeasurements[1].slice(0, -1));
    let leftBegin = parseInt(distanceMeasurements[0]);

    square.id = inputParams[0].substr(1);
    square.height = h;
    square.width = w;
    square.top = topBegin;
    square.left = leftBegin;

    squares.push(square);
  }
}

const intersects = (x) => {
  for (const square of squares){
    if (x.id != square.id){
      if ((x.top <= square.top && x.top + x.height >= square.top) || (x.top >= square.top && x.top <= square.top + square.height)) {
        if ((x.left <= square.left && x.left + x.width >= square.left) || (x.left >= square.left && x.left <= square.left + square.width)) {
          return true;
        }
      }
    }
  }
  return false;
}

const readInterface = readline.createInterface({
  input: fs.createReadStream('./input')
});

readInterface.on('line', function(line) {
  input.push(line);
}).on('close', () => {
  createSquares();
  for (const square of squares) {
    if (!intersects(square)) {
      console.log(square.id);
      break;
    }
  }
});