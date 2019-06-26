#!/usr/bin/node
const readline = require('readline');
const fs = require('fs');

let frequency = 0;

const readInterface = readline.createInterface({
  input: fs.createReadStream('./input'),
});

readInterface.on('line', function(line) {
  frequency += parseInt(line);
}).on('close', () => {
  console.log(frequency);
});

