const { dex_avaxprice, pair_contains, pair_token, find_token, get_price, refuse } = require('./utils.js');
const { tokens } = require('./state.js');


const nowish = new Date().getTime();
const wavax = find_token(tokens, { key: 'symbol', value: 'wavax'} )
const eth = find_token(tokens, { key: 'symbol', value: 'eth'} )
const wbtc = find_token(tokens, { key: 'symbol', value: 'wbtc'} )

const pairscore = (pair, base, dextoken) => {
  let stabletoken = pair_token(base, wavax, true)  
  if ( pair_contains(pair, wavax) && pair_contains(pair, stabletoken) ) {
    return 9
  } else if ( pair_contains(pair, wavax) && pair_contains(pair, dextoken) ) {    
    return 8
  } else if ( pair_contains(pair, wavax) ) {
    return 7
  } else if ( pair_contains(pair, stabletoken) ) {
    return 6
  } else if ( pair_contains(pair, dextoken) ) {
    return 5
  } else if ( pair_contains(pair, eth) || pair_contains(pair, wbtc) ) {
    return 4
  } else {
    let t0 = find_token(tokens, { key: 'symbol', value: pair.token0.symbol.toLowerCase() });
    let t1 = find_token(tokens, { key: 'symbol', value: pair.token1.symbol.toLowerCase() });
    if ( t0 && t1 ) {
      return 3
    } else if ( t0 || t1 ) {
      return 2
    }
  }
  return 1
};
const getpriced = (prices, token) => {
  let pt;
  prices.forEach(price => {
    if ( token.id.toLowerCase() === price.id.toLowerCase() && pt === undefined) {
      pt = price
    }    
  })
  return pt
}

const accept = (pair) => {
  return !refuse.includes(pair.token0.id.toLowerCase()) && !refuse.includes(pair.token1.id.toLowerCase())
}

const notpriced = (pair) => {
  return pair.token0.price === undefined || pair.token1.price === undefined
}

const pushprice = (prices, token) => {
  if ( prices.filter(p => { return p.id.toLowerCase() === token.id.toLowerCase() && p.dex === token.dex}).length > 0 ) {
    return;
  }
  prices.push(token)
  let ft = find_token(tokens, { key: 'id', value: token.id.toLowerCase()} )
  if ( ft ) {
    if ( !ft.prices ) {
      ft.prices = [];
      ft.prices.push(token)
    } else {
      let op = ft.prices.filter(p => { return p.id.toLowerCase() === token.id.toLowerCase() && p.dex === token.dex })
      if ( op.length > 0 ) {
        op.forEach(o => {
          Object.assign(o, token)
        })
      } else {
        ft.prices.push(token)
      }
    }    
  }
}

const dexprices = (dex_list) => {  
  let dexes = dex_list.filter(d => { return ( d.amm === undefined || d.amm === true ) && d?.graphql });
  
  return Promise.all(dexes.map(async (dex) => {
    let prices = [];
    let dex_label = { dex: dex.symbol.toLowerCase() }
    let base = { timestamp: nowish };

    dex.pairs.forEach(p => {
      p.token0.tradeVolume = parseFloat(p.token0.tradeVolume)
      p.token1.tradeVolume = parseFloat(p.token1.tradeVolume)
    });

    let basepricearray = dex_avaxprice(dex)

    let basepair = basepricearray[0];
    let avaxprice = basepricearray[2];
    let avaxtoken = pair_token(basepair, wavax)
    let stabletoken = pair_token(basepair, wavax, true)
    Object.assign(avaxtoken, base, { price: avaxprice }, dex_label)
    pushprice(prices, avaxtoken)
    Object.assign(stabletoken, base, { price: get_price(basepair, wavax) * avaxprice }, dex_label)
    pushprice(prices, stabletoken)

    let dexpair = basepricearray[1];
    Object.assign(pair_token(dexpair, wavax), avaxtoken)
    let dextoken = pair_token(dexpair, wavax, true)
    let dexprice = get_price(dexpair, wavax) * avaxprice
    Object.assign(dextoken, base, { price: dexprice }, dex_label)
    pushprice(prices, dextoken);
    dex.pairs.sort((a, b) => {        
      return pairscore(b, basepair, dextoken) - pairscore(a, basepair, dextoken);
    })
    dex.pairs.filter( p => { 
      return ![basepair, dexpair].includes(p) && accept(p)
    }).forEach( pair => {
      if ( pair_contains(pair, wavax) ) {
        let notavax = pair_token(pair, wavax, true);
        Object.assign(notavax, base, { price: get_price(pair, wavax) * avaxprice }, dex_label)
        pushprice(prices, notavax)
        Object.assign(pair_token(pair, wavax), avaxtoken)
      } else if (pair_contains(pair, stabletoken) ) {
        let op = pair.token0.symbol.toLowerCase() === stabletoken.symbol.toLowerCase() ? parseFloat(pair.token0Price) : parseFloat(pair.token1Price)
        let notstable = pair_token(pair, stabletoken, true)
        Object.assign(notstable, base, { price: op / avaxprice }, dex_label)
        pushprice(prices, notstable)
        Object.assign(pair_token(pair, stabletoken), stabletoken)
      } else if (pair_contains(pair, dextoken)) {
        let ot = pair_token(pair, dextoken, true)
        let otp = get_price(pair, dextoken) * dexprice
        //let otp2 = get_price(pair, tokens[dex_obj.dex_name], true) * dexprice
        //console.log(pairnick(pair), otp, otp2)          
        Object.assign(ot, base, { price: otp}, dex_label)
        pushprice(prices, ot)
        Object.assign(pair_token(pair, dextoken), base, dextoken, dex_label)
      }
    })
    dex.pairs.filter( p => { 
      return accept(p) && notpriced(p)
    }).forEach(p => {      
      if ( p.token0.price === undefined ) {
        let t0 = getpriced(prices, p.token0)  
        if ( t0 ) {
          Object.assign(p.token0, t0)
        }            
      }
      if ( p.token1.price === undefined ) {
        let t1 = getpriced(prices, p.token1)  
        if ( t1 ) {
          Object.assign(p.token1, t1)
        }
      }        
    });
    console.log('missing:', dex.pairs.filter( p => { return accept(p) && notpriced(p) }).length)
    return prices.filter(p => p?.price )
  })).then(results => {
    return results.flat()
  });
}

export { dexprices }