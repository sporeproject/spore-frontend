import axios from 'axios';
import { useEffect, useState } from 'react';
import './PriceToken.scss';

const PriceToken = () => {
  const [data, setData] = useState({ avaxPrice: '0.00', bnbPrice: '0.00', priceDiff: '0.00' });
  const [marketCap, setMarketCap] = useState('0');




  useEffect(() => {
    async function fetchData() {
      try {
        await getMarketCap()
        const response = await axios.get('https://frontend-api.spore.ws/token/prices');
        const { AvaxSporePrice, BscSporePrice, PriceDiff } = response.data;
        setData({
          avaxPrice: parseFloat(AvaxSporePrice).toFixed(2),
          bnbPrice: parseFloat(BscSporePrice).toFixed(2),
          priceDiff: parseFloat(PriceDiff).toFixed(2),
        });
      } catch (error) {
        console.error('Error fetching price data:', error);
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 300000); // Refresh every 5 minutes
    return () => clearInterval(interval);
  }, []);


  const getMarketCap = async () => {
    await axios.get('https://api.coingecko.com/api/v3/coins/spore/market_chart?vs_currency=usd&days=1&interval=daily')
      .then(res => {
        const { data = null } = res
        if (data) {
          const currentMarketCap = data.market_caps[data.market_caps.length - 1][data.market_caps[data.market_caps.length - 1].length - 1].toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
          setMarketCap(currentMarketCap)
        }
      }).catch(error => {
        console.error(error)
      })
  }


  return (
    <div className='col-md-6 text-left'>
      <h3>
        <img width="52px" height="52px" className='img-fluid' alt='Burn Token' src='spore_128.png' /> $SPORE Price Details
      </h3>

      <div className='lead larger mt-3 nav-link'>
        <img height="30px" width="30px"
              src='avalanche-logo.png' alt='Avalanche Network'></img>
        <strong> 1 TRIL = </strong> ${data.avaxPrice} &nbsp;
        <a href="https://app.pangolin.exchange/#/swap?inputCurrency=0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985" target="_blank" rel="noopener noreferrer">&lt;buy on Avalanche&gt;</a>
      </div>
      <div className='lead larger mt-3 nav-link'>
        <img height="30px" width="30px" src='binance-logo.png' alt="Binance Smart Chain">
        </img> 
        <strong> 1 TRIL:</strong> ${data.bnbPrice} &nbsp;
        <a  href="https://pancakeswap.finance/?outputCurrency=0x33a3d962955a3862c8093d1273344719f03ca17c" target="_blank" rel="noreferrer">&lt;buy on BNB &gt;</a>
      </div>
      <dl className='lead larger mt-3'>
        <h4>Price Difference: {data.priceDiff}% </h4>
      </dl>
      <dl className='lead larger mt-3' >
          <h4>Market Cap: {marketCap}$ </h4>
        </dl>
    </div>
  );
};

export default PriceToken;
