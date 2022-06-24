// const fs = require('fs');
const { readFileSync, writeFileSync } = require('fs');
console.log('Start');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

// el flag 'a' es append sino sobreescribe lo anterior
writeFileSync(
  './content/result-sync.txt',
  `here is the reult ${first}, ${second}`,
  {
    flag: 'a',
  }
);

console.log('done with this task');
console.log('ready for next task');
