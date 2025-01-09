import axios from 'axios';
import { useEffect, useState } from 'react';
import './PriceToken.scss';


const API_URL = import.meta.env.VITE_API_URL || "https://frontend-api.spore.ws";


const PriceToken = () => {
  const [data, setData] = useState({ avaxPrice: '0.00', bnbPrice: '0.00', priceDiff: '0.00' , marketCap: '0', liquidityAvax: '0', liquidityBnb: '0', percentLiqAvax: '0.00', percentLiqBnb: '0.00' });




  useEffect(() => {
    async function fetchData() {
      try {

        const endpoint = '/token/prices'; // Endpoint path
        const url = `${API_URL}${endpoint}`; // Construct the full URL
        const response = await axios.get(url); // Send the request to the API

        const { AvaxSporePrice, BscSporePrice,  LiquidityAvax, LiquidityBnb,  MarketCap,PercentLiquidityAvax, PercentLiquidityBnb, PriceDiff, } = response.data;


        setData({
          avaxPrice: parseFloat(AvaxSporePrice).toFixed(2),
          bnbPrice: parseFloat(BscSporePrice).toFixed(2),
          priceDiff: parseFloat(PriceDiff).toFixed(2),
          marketCap: MarketCap,
          liquidityAvax: LiquidityAvax,
          liquidityBnb: LiquidityBnb,
          percentLiqAvax: parseFloat(PercentLiquidityAvax).toFixed(2),
          percentLiqBnb:  parseFloat(PercentLiquidityBnb).toFixed(2)

        });
      } catch (error) {
        console.error('Error fetching price data:', error);
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 300000); // Refresh every 5 minutes
    return () => clearInterval(interval);
  }, []);





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
        <dl className='lead'>&nbsp; &nbsp; Liquidity: ${data.liquidityAvax} ({data.percentLiqAvax}%)</dl>
      </div>
      <div className='lead larger  nav-link'>
        <img height="30px" width="30px" src='binance-logo.png' alt="Binance Smart Chain">
        </img> 
        <strong> 1 TRIL:</strong> ${data.bnbPrice} &nbsp;
        <a  href="https://pancakeswap.finance/?outputCurrency=0x33a3d962955a3862c8093d1273344719f03ca17c" target="_blank" rel="noreferrer">&lt;buy on BNB &gt;</a>
        <dl className='lead'>&nbsp; &nbsp; Liquidity: ${data.liquidityBnb} ({data.percentLiqBnb}%)</dl>

        
        
        
      </div>
      <dl className='lead larger mt-3'>
        <h4>Price Difference: {data.priceDiff}% </h4>
      </dl>
      <dl className='lead larger mt-3' >
          <h4>Market Cap: ${data.marketCap} </h4>
        </dl>
    </div>
  );
};

export default PriceToken;
