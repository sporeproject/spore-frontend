// src/Footer.js

import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';



const PriceToken = () => {
  const [priceToken, setPriceToken] = useState({ price: 0, zeros: 0})
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
    const res = await axios.get('https://x-api.snowball.network/spore/price');
    if ( res.data !== undefined ) {
      let ps = res.data.toFixed(18)
      console.log(ps)
      let suffix = ps.split('.')[1]
      console.log(suffix)
      let i = 0;
      while ( suffix.substring(i, i + 1) === '0' ) {
        console.log('got here:', i, suffix.substring(i, 1))
        i += 1;
      }      
      setPriceToken({ price: res.data.toFixed(18), zeros: i})
    }
  }

  return (
    <>
      <span className="price">
      💲{priceToken.price}
      </span>      
      <span className="price">
      That's {priceToken.zeros} zeroes 🚀
      </span>      
    </>
  );
}


export default PriceToken
