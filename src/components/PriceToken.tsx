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
    const res2 = await axios.get('https://x-api.snowball.network/spore/price');
    if ( res2.data !== undefined ) {
      let ps = res2.data.toFixed(18)
      let suffix = ps.split('.')[1]
      let i = 0;
      while ( suffix.substring(i, i + 1) === '0' ) {
        i += 1;
      }      
      setPriceToken({ avax: res2.data.toFixed(18), zeros: i, bsc: 0 })
    }
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
