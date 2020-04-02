const decoder = require('../index.js')

const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: fs.createReadStream('test/test.txt'),
  crlfDelay: Infinity
})

rl.on('line', (line) => {
  console.log(decoder.decodeMsg(line))
})
