import { abi_erc20 } from './abi/abi';
import Web3 from 'web3';

const bsc = new Web3('https://bsc-dataseed1.binance.org');
const ava = new Web3('https://api.avax.network/ext/bc/C/rpc');

const tokens = [   
   {
       bsc: '0x33a3d962955a3862c8093d1273344719f03ca17c',
       id: '0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985',
       avaburn: '0x000000000000000000000000000000000000dEaD',
       avabridge: '0x1aFCEF48379ECad5a6D790cE85ad1c87458C0f07'       
   }
];

const find_token = (tokens, filter) => {
   return tokens.filter(t => { return t[filter.key].toLowerCase() === filter.value.toLowerCase()})[0]
 }


 const populate = (token) => {
   return Promise.all([
       new ava.eth.Contract(abi_erc20, token.id).methods.totalSupply().call().then( result => {
           return parseInt(result)
       }).catch(err => {
           console.log('no supply:', err)
       }),
       new ava.eth.Contract(abi_erc20, token.id).methods.decimals().call().then( result => {
           token.decimals = parseInt(result)
       }).catch(err => {
           console.log('no decimals:', err)
       }),        
       new ava.eth.Contract(abi_erc20, token.id).methods.name().call().then( result => {
           token.name = result
       }),
       new ava.eth.Contract(abi_erc20, token.id).methods.symbol().call().then( result => {
           token.symbol = result
       }),
       new ava.eth.Contract(abi_erc20, token.id).methods.owner().call().then( result => {
           token.owner = result
       }).catch(err => {
           //console.log('no owner:', err)            
       }),
       new ava.eth.Contract(abi_erc20, token.id).methods.totalFees().call().then( result => {            
           token.totalFees = result / 1e18
       }).catch(err => {
           //console.log('no total fees:', err)            
       })        
   ]).then(results => {
       if ( token.decimals !== 18 ) {
           console.log(token.symbol, 'decimals:', token.decimals)
       }
       token.totalSupply = results[0] / 10 ** token.decimals
       return token
   })
}


export default async function (req,res) {
    await populate(tokens[0]);
    let spore = find_token(tokens, {key:'symbol', value: 'spore'})
    let bscBurned = await new bsc.eth.Contract(abi_erc20, spore.bsc).methods.burned().call();
    let avaBurned = await new ava.eth.Contract(abi_erc20, spore.id).methods.balanceOf(spore.avaburn).call();
    let avaxbridge = await new ava.eth.Contract(abi_erc20, spore.id).methods.balanceOf(spore.avabridge).call();
    let bsctotalSupply = await new bsc.eth.Contract(abi_erc20, spore.bsc).methods.totalSupply().call();
    

    let report = {
        bscBurned: bscBurned / 10 ** spore.decimals,
        avaBurned: avaBurned / 10 ** spore.decimals        
    };
    report.supplyavax = spore.totalSupply - report.avaBurned - (avaxbridge / 10 ** spore.decimals);
    report.supplybsc = spore.totalSupply - ((bsctotalSupply / 10 ** spore.decimals) - report.bscBurned);
    report.circulatingSupply =  report.supplyavax + report.supplybsc; 
    spore = Object.assign({}, spore, report);

    delete spore.bsc;
    delete spore.avaburn;
    delete spore.decimals;
    delete spore.owner;
    delete spore.totalSupply;
    
    spore.name = spore.name.length > 4 ? spore.name.replace(".Finance","") : spore.name;
    
    res.json(spore);
 };