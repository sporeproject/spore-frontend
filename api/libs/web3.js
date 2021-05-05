const Web3 = require('web3');

const bsc = new Web3('https://bsc-dataseed1.binance.org');
const ava = new Web3('wss://api.avax.network/ext/bc/C/ws');

module.exports.ava = ava;
module.exports.bsc = bsc;
