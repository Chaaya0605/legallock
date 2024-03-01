const path = require('path');
const fs = require('fs');
const solc = require('solc');
 
const lotteryPath = path.resolve(__dirname, 'contracts', 'Minor.sol');
const source = fs.readFileSync(lotteryPath, 'utf8');
 
const input = {
  language: 'Solidity',
  sources: {
    'Minor.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};
 
module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  'Minor.sol'
].Minor;
