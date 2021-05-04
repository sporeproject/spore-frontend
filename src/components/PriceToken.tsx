import axios from 'axios';
import { useEffect, useState } from 'react';

const PriceToken = () => {
  const [priceToken, setPriceToken] = useState({ avax: 0, zerosAvax: 0, zerosBnb: 0, bsc: 0})
  const [currency, setCurrency] = useState('avax')

  useEffect(() => {
    async function getInfos() {
      await getPriceToken() 
      setInterval(async () => {
        await getPriceToken()
      }, 300000)
    }
    getInfos()
  }, [])

  const toggleCurrency = (event: any) => {
    currency === 'bsc' 
    ? setCurrency('avax')
    : setCurrency('bsc')
  };


  const getPriceToken = async () => {
    await axios.get('https://api.coingecko.com/api/v3/coins/spore-finance-2?localization=false&tickers=true&market_data=false&community_data=false&developer_data=false&sparkline=false')
    .then(res2 => {
      const {data = null} = res2
      if (data) {
        const avax = data.tickers[1].last.toFixed(18)
        const bsc = data.tickers[0].last.toFixed(18)
        const zerosAvax = avax.match(/^0.(0)+/g) ? avax.match(/^0.(0)+/g)[0].length - 2 : 0
        const zerosBnb = bsc.match(/^0.(0)+/g) ? bsc.match(/^0.(0)+/g)[0].length - 2 : 0
        setPriceToken({ avax, zerosAvax, zerosBnb, bsc })
      }
    }).catch(error => {
      console.error(error)
    })
  }

  return (
    <>
      <span className='price'>
        <button
          className='btn btn-primary mx-1 mb-2 larger'
          onClick={toggleCurrency}
          >
          <svg height='18px' viewBox='0 0 8 8' className='icon'>
            <path fill='white' d="M6 0v1h-5c-.554 0-1 .446-1 1v1h1v-1h5v1l2-1.5-2-1.5zm-4 4l-2 1.5 2 1.5v-1h5c.542 0 1-.458 1-1v-1h-1v1h-5v-1z" id="loop"></path>
          </svg>
        </button>
      </span>
        <span className="price">
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary mx-1 mb-2 larger' 
            href={currency === 'bsc' 
            ? "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x33a3d962955a3862c8093d1273344719f03ca17c" 
            : "https://app.pangolin.exchange/#/swap?inputCurrency=0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985"}>
            <img className="mr-2" id="cur-logo" height="24px" width="24px" src={currency === 'bsc' ? "binance-logo.png" : "avalanche-logo.png"} alt={currency === 'bsc' ? "Binance" : "Avalanche Network"}></img>
            {currency === 'bsc' ? priceToken.bsc : priceToken.avax}
          </a>
        </span>
      <span className="price larger">        
          That's {currency === 'bsc' ? priceToken.zerosBnb : priceToken.zerosAvax} zeros! 🚀
      </span>      
    </>
  );
}


export default PriceToken
