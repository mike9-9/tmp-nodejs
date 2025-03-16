const { readFileSync, writeFileSync } = require('fs')

console.log("start!")
const first = readFileSync('./assets/notes/first.txt', 'utf8')
const second = readFileSync('./assets/notes/second.txt', 'utf8')

writeFileSync(
    './assets/notes/result_sync.txt',
    `The result: ${first}\n          ${second}`,
    {flag: 'a'}
)

console.log("done with this task!")
console.log("Starting the next one!")