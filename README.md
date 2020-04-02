# Decoder1090-c

A Node.js C addon module for decoding Mode S (ADS-B) messages.

## Install

```bash
$ npm i decoder1090
```

Dependencies:
  - node-gyp
  - python2.7
  - make (unix)
  - windows-build-tools (windows)

```bash
# install dependencies
$ npm install -g node-gyp
$ npm install -g --production windows-build-tools
```

## Usage
```js
const decoder = require('decoder1090')

const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: fs.createReadStream('test/test.txt'), // raw msgs are provided for test
  crlfDelay: Infinity
})

rl.on('line', (line) => {
  console.log(decoder.decodeMsg(line))
})
```

### API

#### decodeMsg(msg)

Args:
  - `msg` - A Mode S message String like "*8D781156589BC7DB5435BC427FF3;"

This method returns a String of decoded message:

  - **looks like** "!CHB6301 ,110.9248,24.9110,29075,490,101,1585810976*"

  - **in format** "!*callsign*, *lon*, *lat*, *altitude*, *speed*, *heading*, *timestamp**"

The string above is decoded from several Mode S messages. Since a single message may not carry all the information, the decoder needs to be fed enough messages before it returns a complete result.

## Acknowledgement

This project is built for fast decoding Mode S (ADS-B) message in Node.js applications. The source code of decoding logic is mostly retrieved from Salvatore Sanfilippo's [dump1090](https://github.com/antirez/dump1090). Some modifications were performed to run the code on both Windows and Unix.
