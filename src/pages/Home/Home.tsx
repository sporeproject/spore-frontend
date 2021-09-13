import { Contracts } from '../../components/Contracts/Contracts';
import Contributors from '../../components/Contributors/Contributors';
import { Partnerships } from '../../components/Partnerships/Partnerships';
import PriceToken from '../../components/PriceToken/PriceToken';
import Tokenomics from '../../components/Tokenomics/Tokenomics';
import './Home.scss';

const Home = () => {
  return (
    <>
      <div className='container information'>
        <div className='row py-5'>
          <div className='col-md-7'>

            <h1 className='feature pb-4 py-5'>
              What is <span>Spore</span>?
            </h1>
            <p className='lead'>
              Spore™ is an NFT platform on the Avalanche network and the developer of the hyperdeflationary SPORE currency.
            </p>

            <p className='lead'>Our products include
              the first mass-adopted cross-chain bridge from Avalanche to Binance Smart Chain, NFT collections to commemorate special
              events, a next-generation NFT prediction market (in development), and several yet-to-be-announced services that will stand at the
              intersection of blockspace and physical events and help transition the planet to decentralized living.
            </p>
          </div>

          <div className='col-md-5 text-right'>
            <img className='img-fluid' alt='Mushroom' src='mushroom.png' />
          </div>
        </div>

        <div className='row py-5'>
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
                Summer 2021 <i className='fa fa-check'></i>
              </p>
              <span className='roadmap-text'>Brand building</span><br />
              <span className='roadmap-text'>1 Quadrillion SPORE giveaway</span><br />
              <span className='roadmap-text'>Built liquidity via exchange incentives</span><br />
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
                Fall 2021
              </p>
              <span className='roadmap-text'>Special NFT events</span><br />
              <span className='roadmap-text'>Legal entity registration</span><br />
              <span className='roadmap-text'>New strategic partnerships</span>
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
                Future
              </p>
              <span className='roadmap-text'>NFT Prediction Market </span><br />
              <span className='roadmap-text'>TBA products and services </span><br />
              <span className='roadmap-text'>CEX listing </span><br />
              <span className='roadmap-text'>Fiat onramp </span><br />
              <span className='roadmap-text'>Governance </span>

            </div>
            <div className='col-2 text-center full d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>6</div>
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
