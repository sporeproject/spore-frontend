// src/Footer.js
import './Information.css';



import Tokenomics from './Tokenomics';
import PriceToken from './PriceToken';
//@ts-ignore
import Contributors from './contributors';

const Information = () => {
  return (
    <>


 
      <div className='container information '>
        <div className='row py-5'>

       
          <div className='col-md-7'>
            
          <h2 className='feature pb-4 py-5'>
              What is <span>Spore</span>?
            </h2>
            <p className='lead'>
              <b>Spore is an ecosystem that includes:</b>
            </p>
            <ul className='lead py-1'>
              <li><b>Reflect tokens</b></li>
              <li><b>Algorithmically generated NFTs</b></li>
              <li><b>Next-gen NFT prediction market</b></li>
            </ul>
            <p className='lead'>
              <b>Frictionless rewards will decrease infinitely as tokens continue to burn.</b>
            </p>
            <p className='lead'>
            <b>All holders enjoy the ever-decreasing circulating supply.</b>
            </p>
          </div>


          <div className='col-md-5 text-right'>
            <img className='img-fluid' alt='Mushroom' src='mushroom.png' />
          </div>

        </div>


          <div className='row py-5'>
                  
                        <PriceToken></PriceToken>
                      


                  
                  <div className='col-md-5 text-left larger'>
                      
                  
                      <h4>Our burn and redistribution rates are:</h4>
                        <div className="lead larger"> <b>On every Avalanche  <img height="30px" width="30px"
                          src='avalanche-logo.png' alt='Avalanche Network'></img> transaction:</b> </div>
                          <ul>
                        <li>4.6% is burned</li>
                        <li>1.4% is redistributed to hodlers</li>
                        </ul>
                        <div className="lead larger mt-3"> <b>On every BSC  <img height="30px" width="30px" src='binance-logo.png' alt="Binance Smart Chain"></img> transaction: </b></div> 
                        <ul>
                        <li>6% is burned</li>
                        </ul>
                      
                  </div>
              
            
          </div>
        

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
              <span className='roadmap-text'>Fair and stealth launch </span>
              <p>
                <i className='fa fa-check'></i> 18 March 2021
              </p>
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
              <span className='roadmap-text'>Setting up Airdrops & Incentive program </span>
              <p>
                <i className='fa fa-check'></i> 20 March 2021
              </p>
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
              <span className='roadmap-text'>Second layer blockchain development + Bridge (Binance Smart Chain)</span>
              <p>
                <i className='fa fa-check'></i> 6 April 2021
              </p>
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
              <span className='roadmap-text'>Farming Partnerships</span>
              <p>
                <i className='fa fa-check'></i> 12 April 2021
              </p>
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
              <span className='roadmap-text'>Algorithmically generated NFTs </span>
              <p>
                <i className='fa fa-check'></i> NFT v1: May 17 2021
              </p>
              <p>
                <i className='fa fa-spinner'></i> <b>NFT v2</b>: In Progress
              </p>
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
            <span className='roadmap-text'>Governance</span>
              <p>
                In Progress <i className='fa fa-spinner'></i>
              </p>
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
              <span className='roadmap-text'>Cross-chain compatibility</span>
              <p>
                Q3 2021 <i className='fa fa-spinner'></i>
              </p>
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
            <span className='roadmap-text'>NFTs Prediction Market</span>
              <p>
                Q4 2021 <i className='fa fa-spinner'></i>
              </p>
            </div>
            <div className='col-2 text-center top-right d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>8</div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-white min-vh-50 pb-5'>
        <div className='container information py-5'>
          <div className='row py-4'>
            <div className='col-md-12 text-center'>
              <h2 className='feature'>Developers</h2>
            </div>
          </div>
          <div className='row'>
            <Contributors />
          </div>
          <div className='row'>
          <div className='col-md-5 text-left py-4'>
            Complete list and legacy developers <a className="contribs" href= "https://github.com/sporeproject/spore-frontend/graphs/contributors">here</a>
            </div>
          
          </div>
        </div>
      </section>

      <section className='bg-white-darker pb-5'>
        <div className='container information py-5'>
          <div className='row py-4'>
            <div className='col-md-12 text-center'>
              <h2 className='feature'>Partnerships</h2>
            </div>
          </div>
          <div className='row py-4'>
            <div className='col-md-12 py-3 text-center'>
            <a href= "https://pangolin.exchange/"><img src="https://pangolin.exchange/logo.svg" alt="Pangolin Exchange" height="75" /></a>
            </div>
          </div>
          </div>
      </section>


      <div className='container information py-5'>
        <div className='row py-5'>
          <div className='col-md-12 text-center'>
            <h2 className='feature pb-4'>Contracts</h2>
            <div className="info">
              <div className="row social-links">
                <a
                  href='https://cchain.explorer.avax.network/address/0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985/transactions'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary mx-1 mb-2 zeros'
                >
                  Avalanche token address
                  </a>
                <a
                  href='https://bscscan.com/token/0x33a3d962955a3862c8093d1273344719f03ca17c'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary mx-1 mb-2'
                >
                  BSC token address
                  </a>
              </div>
              <div className="row social-links">
                <a
                  href='https://cchain.explorer.avax.network/tx/0x7df1694004dd6e994d31f76c3978718e017fe6e6112482866051aca7ab90caa6/token-transfers'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary mx-1 mb-2'
                >
                  2.5% of supply burnt tx
                  </a>
                <a
                  href='https://cchain.explorer.avax.network/tx/0xe3e92326e2993a270a2fdd44a7301e6adccb7dd1b40bcc4ed9ed88ec963a22ab/token-transfers'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary mx-1 mb-2'
                >
                  LP-burnt tx
                  </a>
              </div>
              <div className="row social-links">
                <a
                  href='https://cchain.explorer.avax.network/address/0x88Dd784dFaaB1a7752d2CC81071Fcd12C1c4E1db/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary mx-1 mb-2'
                >
                  DEV wallet address
                  </a>
                <a
                  href='https://cchain.explorer.avax.network/tx/0x5fa10181e6c9841aa2226b5468e2b92f0268feaf178626472428e9839ab76982/internal-transactions'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary mx-1 mb-2'
                >
                  Renounced ownership tx
                  </a>
              </div>
              <div className="row social-links">
                <a
                  href='https://cchain.explorer.avax.network/address/0xc2457F6Eb241C891EF74E02CCd50E5459c2E28Ea/contracts'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary mx-1 mb-2'
                >
                  NFT V1 Address
                  </a>
                <a
                  href='https://cchain.explorer.avax.network/address/0x6Fe55D097FC9C1d08B64f4b1c94ac9453B1c9abB/contracts'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary mx-1 mb-2'
                >
                  Multisig Wallet Contract
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>



	  
    </>
  )
}

export default Information
