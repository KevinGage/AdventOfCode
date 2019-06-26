#!/usr/bin/node
const readline = require('readline');
const fs = require('fs');

const input = [];

const findAnswer = () => {
  for (let i = 0; i < input.length; i++) {
    let testIdA = input[i].split('');
    let matchCount = 0;

    for (let j = 0; j < input.length; j++) {
      let testIdB = input[j].split('');
      let nonMatchingLetters = 0;

      for(k = 0; k < testIdA.length; k++) {
        if (testIdA[k] != testIdB[k]){
          nonMatchingLetters++;
        }
      }

      if (nonMatchingLetters < 2) {
        matchCount++;
      }
    }

    if (matchCount > 1) {
      console.log(input[i]);
    }
  }
}

const readInterface = readline.createInterface({
  input: fs.createReadStream('./input')
});

readInterface.on('line', function(line) {
  input.push(line);
}).on('close', () => {
  findAnswer();
});