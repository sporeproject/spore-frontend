import { Helmet } from 'react-helmet';
import PriceToken from '../../components/PriceToken/PriceToken';
import Tokenomics from '../../components/Tokenomics/Tokenomics';
import './Token.scss';

const Token = () => {
  const Metadata = () => (
    <Helmet>
      <title>Spore</title>
      <meta name="description" content="Spore™ is an NFT platform on the Avalanche network and the developer of the hyperdeflationary SPORE currency." />
      <meta name="keywords" content="Spore, NFT, Avalanche, BSC" />
    </Helmet>
  )
  
  return (
    <>
      <Metadata />

      <div className="container md-5 py-4">
          <div className="inner-header w-100 h-100 d-flex flex-column justify-content-center align-items-center">
            <h1 className='feature'><span>Tokenomics</span></h1>
            </div>
        </div>

      <div className='container information'>
        
        <div className='row pb-5'>
          <PriceToken></PriceToken>

          <div className='col-md-5 text-left larger'>
            <h3>Token burn and redistribution rates</h3>
            <div className="lead larger"> <b>On every Avalanche  <img height="30px" width="30px"
              src='avalanche-logo.png' alt='Avalanche Network'></img> transaction:</b> </div>
            <ul>
              <li>4.6% is burned</li>
              <li>1.4% is redistributed to hodlers</li>
            </ul>
            <div className="lead larger mt-3"> <b>On every BSC  <img height="30px" width="30px" src='binance-logo.png' alt="Binance Smart Chain">
            </img> transaction: </b></div>
            <ul>
              <li>6% is burned</li>
            </ul>
          </div>
        </div>

        
      </div>

      <section className='bg-white'>
        <Tokenomics />
      </section>

      
    </>
  )
}

export default Token;
