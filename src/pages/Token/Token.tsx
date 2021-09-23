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
      <div className='container information'>
        <div className='row py-5'>
          <div className='col-md-12'>

          <div className="container md-5 py-4">
          <div className="inner-header w-100 h-100 d-flex flex-column justify-content-center align-items-center">
            <h1 className='feature'>The SPORE Token</h1>
            </div>
          </div>
        
        
        <p className='lead larger'>
          <b>SPORE is a cryptocurrency that powers the Spore ecosystem.  
          The token is available natively on the Avalanche network as an ARC-20 token 
          (the Avalanche equivalent of ERC-20) and as a bridged BEP-20 asset on Binance Smart Chain.</b>

          </p>
          <br></br>
          <div className='container information'>
          <div className='row py-7 '>
            <div className='col-md-4'>
              <p className='lead larger'>

              <a href='https://app.pangolin.exchange/#/swap?outputCurrency=0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985' 
                target='_blank' 
                rel='noopener noreferrer'
                style={{textDecoration:'none'}}
                className='btn btn-primary mx-2 mb-2 zeros'>
                <span>Buy on Avalanche <img height="30px" width="30px" src='avalanche-logo.png' alt='Avalanche Network' className="imagenespeciada"></img></span>
              </a>

              

              </p>
            </div>
            <div className='col-md-4'>
              
              <a href='https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x33a3d962955a3862c8093d1273344719f03ca17c' 
              target='_blank' 
              rel='noopener noreferrer' 
              style={{textDecoration:'none'}} 
              className='btn btn-primary mx-2 mb-2 zeros'>
                    Buy on Binance Smart Chain <img height="30px" width="30px" src='binance-logo.png' alt="Binance Smart Chain" className="imagenespeciada"></img>
                  </a>
              
            </div>
            <div className='col-md-4'>
              <p className='lead larger'>

              <div>
                <a href="/#"
                  className="dropdown-toggle btn btn-primary mx-2 mb-2 zeros"  data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"  >
                  Charts <span className="caret"></span>
                </a>
                <ul className="dropdown-menu dropdown-menu--chart">
                <li>
                    <a href='https://metamorphosis.chartex.pro/?symbol=AVAX_PANGOLIN%3ASPORE.0x0a63179a8838b5729E79D239940d7e29e40A0116&interval=240&theme=dark' target='_blank' rel='noopener noreferrer'>
                      Chartex (Avalanche)
                    </a>
                  </li>
                  <li>
                    <a href='https://charts.bogged.finance/?token=0x33A3d962955A3862C8093D1273344719f03cA17C' target='_blank' rel='noopener noreferrer'>
                      Bogged (BSC)
                    </a>
                  </li>
                  <li>
                    <a href='https://dex.guru/token/0x33a3d962955a3862c8093d1273344719f03ca17c-bsc' target='_blank' rel='noopener noreferrer'>
                      DexGuru (BSC)
                    </a>
                  </li>
                </ul>
              </div>

              </p>
            </div>
            </div>
        </div>

        <br></br><br></br>

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
        

          <br></br>

          </div>
          <div className='container information'>
          <h2>Hyperdeflation</h2>
          <p className='lead larger'> <b>
            SPORE is a hyperdeflationary currency taxed at 6 percent on every transfer, 
            with the majority of the taxed amount removed from circulation (or "burned") 
            forever, ensuring a constant reduction in the total supply. 
            A smaller portion of the tax (currently 1.4 percent) is redistributed back to existing holders.  
            Initially minted at 100 quadrillion tokens, more than 60 percent of the SPORE supply was burned 
            in the six months since the project's launch.
            </b>
            </p>
            <br></br>
            <h2>Currency</h2>
          <p className='lead larger'> <b>
          
We believe that deflationary money is the future, and consumer sentiment strongly supports that position.  We are driving the adoption of SPORE as a currency by developing products and services that will support the token and encourage its use.  Purchasing items at the Spore NFT Store currently requires burning a small amount of $SPORE.  We plan to continue to integrate the token into our own and our partners' products and to add utility to the token throughout both crypto and legacy ecosystems.

            </b>
            </p>
            <br></br>
          
            <h2>Decentalized Finance</h2>

          <p className='lead larger'> <b>
         
While Spore does not offer DeFi products or services, the token is an important Lego block in the top blockchain projects on Avalanche and BSC, such as Pangolin, Snowball, and PancakeSwap.  SPORE holders who wish to serve as liquidity providers with automated market makers (AMM) are able to earn trading fees and rewards in the form of various native tokens of participating platforms, rivaling some of the best APYs in the DeFi space.*
            </b>
            </p>

            <br></br><br></br>
              <p className='lead larger'>
             <b> Frictionless rewards will decrease infinitely as tokens continue to burn. All holders enjoy the ever-decreasing circulating supply.</b>
              </p>
           
        
      
            <br></br><br></br>
          <p className='lead'> *Providing liquidity carries risks and is not for everyone. Please familiarize yourself with common DeFi concepts, such as AMM and impermanent loss, and assess potential liabilities before decing to become an LP.  Spore does not provide financial services and merely provides links to decentralized services built by third-parties.
          
          
          </p>
          
          
          
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
