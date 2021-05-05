const find_token = (tokens, filter) => {
  return tokens.filter(t => { return t[filter.key].toLowerCase() === filter.value.toLowerCase()})[0]
}

const pair_token = (pair, filter, inverse) => {
  try {
    if ( pair.token0.id.toLowerCase() === filter.id.toLowerCase() ) {
      return inverse ?  pair.token1: pair.token0
    }
    return inverse ? pair.token0: pair.token1
  } catch (err) {
    console.log(err)
    return err
  }
}

const get_price = (pair, find, inverse) => {
  if (inverse) {
    return parseFloat(pair.token0.id.toLowerCase() === find.id.toLowerCase() ? pair.token1Price : pair.token0Price)
  } else {
    return parseFloat(pair.token0.id.toLowerCase() === find.id.toLowerCase() ? pair.token0Price : pair.token1Price)
  }
};

const pair_contains = (pair, find1, find2 ) => {
    let has1 = pair.token0.id.toLowerCase() === find1.id.toLowerCase() || pair.token1.id.toLowerCase() === find1.id.toLowerCase()  
    if ( !find2 ) {
      return has1
    }
    let has2 = pair.token0.id.toLowerCase() === find2.id.toLowerCase() || pair.token1.id.toLowerCase() === find2.id.toLowerCase();
    return has1 && has2
};

const refuse = ['0xc5b25a5bed03bb7c9030dfe5be56f21f5c3fcb1b', '0x67e1e9195e3e3eebc862b83af9abe1fa24d108f5', '0xa40903b205881e4a4da16121e2625d3997c4322d', '0x0362d330f94fae853d5c462e57357f7ef7c2ea1d', '0x212ae83a676d3cc71ee111fdaa7aa0b0cd63001c', '0x64ea9156199161b0c54825c2f117cd71dbde859c'];

const rawusdt = { id: '0xde3a24028580884448a5397872046a019649b084'}
const rawwavax = { id: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7'}

const dex_avaxprice = (dex) => {
  let base = dex.pairs.filter(avaxpair => {
      return pair_contains(avaxpair, rawwavax , dex.stable ? dex.stable : rawusdt)
  })[0];        
  let baseprice = get_price(
      base,
      dex.stable ? dex.stable : rawusdt
  )
  let basedex = dex.pairs.filter(dexpair => {
    return pair_contains(dexpair, rawwavax) &&
      (dex.id.toLowerCase() === dexpair.token0.id.toLowerCase() || dex.id.toLowerCase() === dexpair.token1.id.toLowerCase())
  })[0];
  return [base, basedex, baseprice]
}

const pairnick = (pair) => {
  return pair.token0.symbol.toLowerCase() + '-' + pair.token1.symbol.toLowerCase()
}

const pairprice = (pair) => {
  return pair.token0?.price + '/' + pair.token1?.price
}
module.exports.refuse = refuse;
module.exports = {
  find_token,
  pair_token,
  get_price,
  pair_contains,
  dex_avaxprice,
  pairnick,
  pairprice
}