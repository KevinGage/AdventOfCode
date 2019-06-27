#!/usr/bin/node

/*
1.  Read all input
2.  Convert all input lines to objects with a property containing the datetime and a property containing the raw data
3.  Sort input by datetime
4.  Create a new collection of objects.  These objects should have the properties date: datetime, id: int, sleepTimes: [{start:int, end:int}, {start:int, end:int}, ...], totalSleepMinues: int
5.  Find id with the most combined total sleep minutes.  Create a collection with only that id
6.  Loop through each item in the array 60 times (one for each minute) and keep a running total of how many times the id was asleep for each given minute
7.  Get most hit minute and multiply it by the id
*/

const readline = require('readline');
const fs = require('fs');


const readInterface = readline.createInterface({
  input: fs.createReadStream('./input')
});

readInterface.on('line', function(line) {
  input.push(line);
}).on('close', () => {

});