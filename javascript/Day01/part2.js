#!/usr/bin/node
const readline = require('readline');
const fs = require('fs');

const input = [];
let frequency = 0;
const frequencies = [];
let solution = "";

const readInterface = readline.createInterface({
  input: fs.createReadStream('./input'),
});

readInterface.on('line', function(line) {
  input.push(parseInt(line));
}).on('close', () => {
  while (true) {
    for (let i of input) {
      frequency += i;

      if (frequencies.includes(frequency)){
        solution = frequency;
        break;
      } else {
        frequencies.push(frequency);
      }
    }
    if (solution) {
      break;
    }
  }
  console.log(solution);
});

