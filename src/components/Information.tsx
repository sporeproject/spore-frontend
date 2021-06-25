// src/Footer.js
import './Information.css';



import Tokenomics from './Tokenomics';
//@ts-ignore
import Contributors from './contributors';
import Discover from './Discover'

const Information = () => {
  return (
    <>
      <div className="section_banner d-flex">
        <div className="container information px-0">
          <div className="row w-100 h-100 mx-0">
            <div className="col">
              <div className="inner-header w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                <h1 className='feature pb-4 text-center'>Welcome to <span>Spore</span></h1>
                <div className="text-kecil">
                  <h3 className="text-center">A community of artists, developers and anarchists redefining the concept of blockchain development.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Discover />
      
      <Tokenomics />

      <section className='bg-white-darker pb-5'>
        <div className='container information py-5'>
          <div className='row py-4'>
            <div className='col-md-12 text-center'>
              <h2 className='feature'><b>Roadmap</b></h2>
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
      <section className='bg-white pb-5'>
        <div className='container information py-5'>
          <div className='row py-4'>
            <div className='col-md-12 text-center'>
              <h2 className='feature'>Developers</h2>
            </div>
          </div>
          <div className='row'>
            <>
              <Contributors />
            </>
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
            </div>
          </div>
        </div>
      </div>




    </>
  )
}

export default Information
