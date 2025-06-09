import { Helmet } from 'react-helmet';
import { Contracts } from '../../components/Contracts/Contracts';
import { Contributors } from '../../components/Contributors/Contributor';
import { Partnerships } from '../../components/Partnerships/Partnerships';
import PriceToken from '../../components/PriceToken/PriceToken';
import './Home.scss';
import Tokenomics from '../../components/Tokenomics/Tokenomics';
import { Link } from 'react-router-dom';

const Home = () => {
  const Metadata = () => (
    <Helmet>
      <title>Spore Hyperdeflationary Art - Spore</title>
      <meta
        name='description'
        content='Spore is a decentralized global community and the developer of the hyperdeflationary SPORE currency.'
      />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"/>
    </Helmet>
  )
  
  return (
    <>
      <Metadata />
      <div className='container information'>
        <div className='row py-5'>
          <div className='col-md-7'>

            <h1 className='feature pb-4 py-5'>
              What is <span>Spore</span>?
            </h1>
            <p className='lead'>
              Spore is a decentralized community fueled by the passion of those who build freely — and for free — since 2021.
            </p>

            <p className='lead'> Milestones include the first widely adopted Avalanche-to-BNB Chain bridge, NFT collections honoring community artists, and decentralized experiments born from global collaboration.
             </p>
            <p className='lead'>Future developments explore NFT prediction tools, community-driven games, governance experiments, and anything else that emerges from those who choose to build.
              
               </p>
            <p className='lead'> Spore endures not because it was owned — but because it resists ownership.
The only thing that grows is what survives the fire. 🍄</p>
           



          </div>

          <div className='col-md-5 text-right'>
            <br></br>
            <br></br>

<Link to="/identity">
    <img className='img-fluid' alt='Mushroom' src='mushroom.png' style={{ cursor: 'pointer' }} />
  </Link>          </div>
        </div>

        <div className='row py-5'>
          <PriceToken></PriceToken>

          <div className='col-md-5 text-left larger'>
            <h3>Token burn and redistribution rates</h3>
            <div className="lead larger"> <b>On every Avalanche  <img height="30px" width="30px"
              src='avalanche-logo.png' alt='Avalanche Network'></img> transaction:</b> </div>
            <ul>
              <li>5.3% is burned</li>
              <li>0.7% is redistributed to hodlers</li>
            </ul>
            <div className="lead larger mt-3"> <b>On every BSC  <img height="30px" width="30px" src='binance-logo.png' alt="Binance Smart Chain">
            </img> transaction: </b></div>
            <ul>
              <li>6% is burned</li>
            </ul>
          </div>
        </div>

        <p className='lead'>
          Frictionless rewards will decrease infinitely as tokens continue to burn. All holders enjoy the ever-decreasing circulating supply.
        </p>
      </div>

      <section className='bg-white'>
        <Tokenomics />
      </section>

      <section className='bg-white-darker pb-5'>
        <div className='container information py-5'>
          <div className='row py-4'>
            <div className='col-md-12 text-center'>
              <h2 className='feature'>Roadmap</h2>
            </div>
          </div>

          <div className='row align-items-center how-it-works d-flex'>
            <div className='col-2 text-center bottom d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>1</div>
            </div>
            <div className='col-6'>
              <p>
                March 2021 <i className='fa fa-check'></i>
              </p>
              <span className='roadmap-text'>Fair and stealth launch </span><br />
              <span className='roadmap-text'>Airdrops and incentives </span><br />
            </div>
          </div>

          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner top-right'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner left-bottom'></div>
            </div>
          </div>

          <div className='row align-items-center justify-content-end how-it-works d-flex'>
            <div className='col-6 text-right'>
              <p>
                April 2021  <i className='fa fa-check'></i>
              </p>
              <span className='roadmap-text'>BSC token and bridge deployed </span>
            </div>
            <div className='col-2 text-center full d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>2</div>
            </div>
          </div>

          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner right-bottom'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner top-left'></div>
            </div>
          </div>

          <div className='row align-items-center how-it-works d-flex'>
            <div className='col-2 text-center full-left d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>3</div>
            </div>
            <div className='col-6'>
              <p>
                May 2021 <i className='fa fa-check'></i>
              </p>
              <span className='roadmap-text'>NFT Charter Collection released </span>
            </div>
          </div>

          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner top-right'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner left-bottom'></div>
            </div>
          </div>

          <div className='row align-items-center justify-content-end how-it-works d-flex'>
            <div className='col-6 text-right'>
              <p>
                2021 <i className='fa fa-check'></i>
              </p>
              <span className='roadmap-text'>Brand building</span><br />
              <span className='roadmap-text'>1 Quadrillion SPORE giveaway (1% of the supply)</span><br />
              <span className='roadmap-text'>Built liquidity via exchange incentives (Pangolin and Olive)</span><br />
              <span className='roadmap-text'>Strategic partnerships</span>
            </div>

            <div className='col-2 text-center full d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>4</div>
            </div>
          </div>

          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner right-bottom'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner top-left'></div>
            </div>
          </div>

          <div className='row align-items-center how-it-works d-flex'>
            <div className='col-2 text-center full-left d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>5</div>
            </div>
            <div className='col-6'>
              <p>
                2022 <i className='fa fa-check'></i>
              </p>
              <span className='roadmap-text'>Spore Forum (closed)</span><br />
              <span className='roadmap-text'>Off-chain governance </span><br />
              <span className='roadmap-text'>Spore Projects crowdfunding </span><br />

            </div>
          </div>

          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner top-right'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner left-bottom'></div>
            </div>
          </div>

          <div className='row align-items-center justify-content-end how-it-works d-flex'>
            <div className='col-6 text-right'>
              <p>
                2023
              </p>
              <span className='roadmap-text'>Spore API</span><br />
              <span className='roadmap-text'>New server hosting</span><br />
              <span className='roadmap-text'>NOSTR relay spore.ws and paid.spore.ws (closed) </span><br />

            </div>
            <div className='col-2 text-center full d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>6</div>
            </div>
          </div>


          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner right-bottom'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner top-left'></div>
            </div>
          </div>

          <div className='row align-items-center how-it-works d-flex'>
            <div className='col-2 text-center full-left d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>7</div>
            </div>
            <div className='col-6'>
              <p>
                2024
              </p>
              <span className='roadmap-text'>Open source website and API </span><br />
              <span className='roadmap-text'> CMC strategic positioning </span><br />
              <span className='roadmap-text'> Establishment and growth of brand equity </span><br />

            </div>
          </div>

          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner top-right'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner left-bottom'></div>
            </div>
          </div>

          <div className='row align-items-center justify-content-end how-it-works d-flex'>
            <div className='col-6 text-right'>
              <p>
                2025
              </p>
              <span className='roadmap-text'>Return to the original logo </span><br />
              <span className='roadmap-text'>Spore Analytics </span><br />
      
            </div>
            <div className='col-2 text-center full d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>8</div>
            </div>
          </div>


           <div className='row timeline'>
            <div className='col-2'>
              <div className='corner right-bottom'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner top-left'></div>
            </div>
          </div>

          <div className='row align-items-center how-it-works d-flex'>
            <div className='col-2 text-center full-left d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>9</div>
            </div>
             <div className='col-6 text-right'>
              <p>
                Future
              </p>
              <span className='roadmap-text'>Open source IPFS forum and Governance </span><br />
              <span className='roadmap-text'>TBA products and services </span><br />
              <span className='roadmap-text'>CEX listing </span><br />

            </div>
          </div>

          
        </div>
      </section>
      
      <Contributors />

      <Partnerships />

      <Contracts />
    </>
  )
}

export default Home;
