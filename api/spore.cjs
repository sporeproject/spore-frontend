import { bsc, ava } from  './libs/web3.js';
import { tokens, dexes } from './libs/statemachine.js';
import { find_token, pairnick, pair_contains } from './libs/utils.js';
import { abi_erc20 } from './abi/abi_erc20.js';
import { dexprices } from './libs/price.js';

const pricefirst = async () => {
    console.log(tokens);
    await dexprices(dexes.filter(d => d.symbol.toLowerCase() === 'png'))
    let spore = find_token(tokens, {key:'symbol', value: 'spore'})
    let bscBurned = await new bsc.eth.Contract(abi_erc20, spore.bsc).methods.burned().call()
    let avaBurned = await new ava.eth.Contract(abi_erc20, spore.id).methods.balanceOf(spore.avaburn).call()
    
    let report = {
        bscBurned: bscBurned / 10 ** spore.decimals,
        avaBurned: avaBurned / 10 ** spore.decimals
    }

    report.circulatingSupply = spore.totalSupply - report.avaBurned - report.bscBurned; // - spore.totalFees / 2

    report.locked = 0;
    report.pairs = []

    dexes.filter(d => d?.pairs).map(dex => {
        dex.pairs.filter(p => { return pair_contains(p, spore)} ).forEach(p => {
            console.log(dex.symbol.toLowerCase(), pairnick(p), p.locked)
            report.locked += p.locked
            report.pairs.push(p)
        })
    })  

    let flat_shell = spore = Object.assign({}, spore.prices.filter(p => p.dex === 'png')[0], report)

    delete spore.prices

    Object.assign(spore, flat_shell)

    return spore
}

pricefirst();

