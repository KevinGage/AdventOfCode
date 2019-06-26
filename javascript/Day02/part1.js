#!/usr/bin/node
const readline = require('readline');
const fs = require('fs');

const input = [];

const checkForDoubles = x => {
  x.sort();

  if (x[0] == x[1] && x[0] != x[2]) {
    return true;
  }

  for (let i = 2; i < x.length; i++) {
    if(x[i] == x[i - 1] && x[i] != x[i - 2] && x[i] != x[i + 1]) {
      return true;
    }
  }
  return false;
}

const checkForTripples = x => {
  x.sort();

  if(x[0] == x[1] && x[0] == x[2] && x[0] != x[3]) {
    return true;
  }

  for (let i = 3; i < x.length; i++) {
    if(x[i] == x[i - 1] && x[i] == x[i - 2] && x[i] != x[i-3] && x[i] != x[i+1]) {
      return true;
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
  const doubles = input.filter(value => {
    const letters = value.split('');
    return checkForDoubles(letters);
  }).length;

  const tripples = input.filter(value => {
    const letters = value.split('');
    return checkForTripples(letters);
  }).length;

  console.log(doubles * tripples);
});