import Web3 from 'web3';

const bsc = new Web3('https://bsc-dataseed1.binance.org');
const ava = new Web3('wss://api.avax.network/ext/bc/C/ws');

export { ava, bsc }
