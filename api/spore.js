const Web3 = require('web3');

const abi_erc20 = [
  {
    "constant":true,
    "inputs":[
       
    ],
    "name":"token0",
    "outputs":[
       {
        "name":"",
        "type":"address"
       }
    ],
    "payable":false,
    "type":"function"
 },
 {
  "constant":true,
  "inputs":[
     
  ],
  "name":"token1",
  "outputs":[
     {
        "name":"",
        "type":"address"
     }
  ],
  "payable":false,
  "type":"function"
 }, 
 {
     "constant":true,
     "inputs":[
        
     ],
     "name":"name",
     "outputs":[
        {
           "name":"",
           "type":"string"
        }
     ],
     "payable":false,
     "type":"function"
  },
  {
     "constant":true,
     "inputs":[
        
     ],
     "name":"name",
     "outputs":[
        {
           "name":"",
           "type":"string"
        }
     ],
     "payable":false,
     "type":"function"
  },
  {
     "constant":true,
     "inputs":[
        
     ],
     "name":"owner",
     "outputs":[
        {
           "name":"",
           "type":"address"
        }
     ],
     "payable":false,
     "type":"function"
  },
  {
     "constant":true,
     "inputs":[
        
     ],
     "name":"decimals",
     "outputs":[
        {
           "name":"",
           "type":"uint8"
        }
     ],
     "payable":false,
     "type":"function"
  },
  {
     "constant":true,
     "inputs":[
        {
           "name":"_owner",
           "type":"address"
        }
     ],
     "name":"balanceOf",
     "outputs":[
        {
           "name":"balance",
           "type":"uint256"
        }
     ],
     "payable":false,
     "type":"function"
  },
  {
     "constant":true,
     "inputs":[
        
     ],
     "name":"symbol",
     "outputs":[
        {
           "name":"",
           "type":"string"
        }
     ],
     "payable":false,
     "type":"function"
  },
  {
     "constant":true,
     "inputs":[
        
     ],
     "name":"totalFees",
     "outputs":[
        {
           "name":"",
           "type":"uint256"
        }
     ],
     "payable":false,
     "type":"function"
  },
  {
     "constant":true,
     "inputs":[
        
     ],
     "name":"burned",
     "outputs":[
        {
           "name":"",
           "type":"uint256"
        }
     ],
     "payable":false,
     "type":"function"
  },
  {
     "constant":true,
     "inputs":[
        
     ],
     "name":"totalSupply",
     "outputs":[
        {
           "name":"",
           "type":"uint256"
        }
     ],
     "payable":false,
     "type":"function"
  }
];

const tokens = [  
  {
      bsc: '0x33a3d962955a3862c8093d1273344719f03ca17c',
      id: '0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985',
      avaburn: '0x000000000000000000000000000000000000dEaD'
  }
];

const bsc = new Web3('https://bsc-dataseed1.binance.org');
const ava = new Web3('wss://api.avax.network/ext/bc/C/ws');

const find_token = (tokens, filter) => {
  return tokens.filter(t => { return t[filter.key].toLowerCase() === filter.value.toLowerCase()})[0]
};

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
};

const process_Values = async () =>
{
  await Promise.all(Object.keys(tokens).map(k => { return tokens[k]}).map(async (token) => {
    return populate(token)
  }))
};

module.exports = async (req, res) => {
  await process_Values();
  let spore = find_token(tokens, {key:'symbol', value: 'spore'})
  let bscBurned = await new bsc.eth.Contract(abi_erc20, spore.bsc).methods.burned().call()
  let avaBurned = await new ava.eth.Contract(abi_erc20, spore.id).methods.balanceOf(spore.avaburn).call()
    
  let report = {
      bscBurned: bscBurned / 10 ** spore.decimals,
      avaBurned: avaBurned / 10 ** spore.decimals
  }

  report.circulatingSupply = spore.totalSupply - report.avaBurned - report.bscBurned; // - spore.totalFees / 2
  spore = Object.assign({}, spore.prices.filter(p => p.dex === 'png')[0], report)

  console.log(spore);
  res.status(200).json(spore);
}