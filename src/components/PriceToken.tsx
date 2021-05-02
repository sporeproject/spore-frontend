// src/Footer.js

import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const PriceToken = () => {
  const [priceToken, setPriceToken] = useState({ avax: 0, zeros: 0, bsc: 0})
  useEffect(() => {
    async function getInfos() {
      await getPriceToken()      
      setInterval(async () => {
        await getPriceToken()
      }, 300000)
    }
    getInfos()
  }, [])

  const getPriceToken = async () => {
    await axios.get('https://x-api.snowball.network/spore/price')
    .then(res2 => {
      const {data = null} = res2
      if (data) {
        const avax = data.toFixed(18)
        const zeros = avax.match(/^0.(0)+/g) ? avax.match(/^0.(0)+/g)[0].length - 2 : 0
        setPriceToken({ avax, zeros, bsc: 0 })
      }
    }).catch(error => {
      console.error(error)
    })
  }

  return (
    <>
      <span className="price">
        <a
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn-primary mx-1 mb-2 larger' 
          href="https://app.pangolin.exchange/#/swap?inputCurrency=0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985">
          <img height="15px" width="15px" src="avalanche-logo.png" alt="Avalanche Network"></img>
          💲{priceToken.avax}
        </a>
      </span>      
      <span className="price larger">        
          That's {priceToken.zeros} zeros! 🚀
      </span>      
    </>
  );
}


export default PriceToken
