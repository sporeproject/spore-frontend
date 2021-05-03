import { request, gql } from 'graphql-request';

const pairsql = gql`query getPairs($skip: Int!) {  
    pairs(skip: $skip) {
      token0Price
      id
      reserveETH
      token0 {
        id
        symbol
        name
        tradeVolume
      }
      token1Price
      token1 {
        id
        symbol
        name
        tradeVolume
      }
      totalSupply   
    }
  }`

const userql = gql`query getUser($userId: String!) {
    user(id: $userId) {
      liquidityPositions {
        id
        pair {
          totalSupply
          reserveUSD
          token0 {
              symbol
          }
          token1 {
            symbol
          }          
        }
        liquidityTokenBalance
      }      
    } 
}`;

const dexpairs = async (dex) => {
    let skip = 0
    let pairs = []
    while ( skip % 100 == 0 ) {      
        let pairsData = await request(dex.graphql, pairsql, { skip })
        pairs = [...pairs,...pairsData.pairs]
        skip = pairsData.pairs.length
    }
    return Promise.resolve(pairs);
};

const userliquidity = async (endpoint, account, symbol0, symbol1, avaxprice, nick) => {
    
    return request(endpoint, userql, { userId: account.toLowerCase() }).then(response => {        
        if ( !response.user ) { 
          console.log('no user!')
          return 0 
        }
        
        let mv = 0
        response.user.liquidityPositions.filter(lp => {
            let b = lp.liquidityTokenBalance / lp.pair.totalSupply * lp.pair.reserveUSD;
            if ( b > 0 ) {
              mv += b              
            } else {              
              console.log('account:', account, 'liquidity:', response.user.liquidityPositions)
            }            
        })[0]         
        let ul = mv * avaxprice
        if ( ul === 0 ) {
          console.log('user liqudity zero symbol:', symbol0, 'symbol:', symbol1, 'avaxprice:', avaxprice, 'nick:', nick)
        }
        return ul
    });
}


export { dexpairs, userliquidity }
