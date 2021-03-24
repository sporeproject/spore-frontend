// src/Footer.js
import './Information.css';

import React from 'react';
import BurnedTokens from './BurnedTokens';
import HowToBuyPDF from '../utils/how_to_buy.pdf';

function Information() {
  return (
    <>
      <div className='container information  py-5'>
        <div className='row py-5'>
          <div className='col-md-7'>
            <h2 className='feature pb-4'>
              What is <span>Spore Finance</span>
            </h2>
            <p className='lead'>
              Spore Finance aims at creating an ecosystem combining{' '}
              <b>reflect tokens</b>, <b>algorithmically generated NFTs</b> and
              the first <b>NFT prediction market</b>.
            </p>
            <p className='lead'>
              Amazed by the <b>Avalanche Network</b> first generation of pools,
              the first phase was to launch one of the first reflect tokens
              there to be.
            </p>

            <p className='lead'>
              On every transaction, 3% of the rewards are burnt forever and 3%
              are redistributed to all the owners.
              <br /> Earn frictionless rewards while your spores spread!
              Deflation reduces the supply increasing the token value over time.
              The vision of the project is the vision of the community. It is
              going to evolve as spores spread.
            </p>
          </div>
          <div className='col-md-5 text-right'>
            <img className='img-fluid' alt='Mushroom' src='mushroom.png' />
          </div>
        </div>
      </div>
      <section className='bg-white'>
        <div className='container information  py-5'>
          <div className='row py-5'>
            <div className='col-md-5 text-center'>
              <img className='img-fluid' alt='Burn Token' src='spore_256.png' />
            </div>
            <div className='col-md-7 text-left'>
              <h2 className='feature'>Tokeneconomics</h2>
              <ul className='list-unstyled'>
                <li> Dev fund : 0%</li>
                <li>
                  Total Supply : <b>100,000,000,000,000,000</b> SPORE
                </li>
                <>
                  <BurnedTokens />
                </>
              </ul>
            </div>
          </div>
        </div>
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
              <h5>Fair and stealth launch </h5>
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
              <h5>Setting up Airdrops & Incentive program </h5>
              <p>
                In Progress <i className='fa fa-spinner'></i>
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
              <h5>Farming Partnerships </h5>
              <p>
                <i className='fa fa-spinner'></i> In Progress{' '}
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
              <h5>Algorithmically generated NFTs </h5>
              <p>
                Q2 2021 <i className='fa fa-spinner'></i>
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
              <h5>Governance </h5>
              <p>
                Q2 2021 <i className='fa fa-spinner'></i>
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
              <h5>Second layer blockchain development </h5>
              <p>
                Q3 2021 <i className='fa fa-spinner'></i>
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
              <h5>Cross-chain compatibility</h5>
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
              <h5>NFTs Prediction Market</h5>
              <p>
                Q4 2021 <i className='fa fa-spinner'></i>
              </p>
            </div>
            <div className='col-2 text-center top-right d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>6</div>
            </div>
          </div>
        </div>
      </section>
      <div className='container information py-5'>
        <div className='row py-5'>
          <div className='col-md-12 text-center'>
            <h2 className='feature pb-4'>Links</h2>
            <a
              href='https://sporefinance.medium.com/spore-finance-fair-launch-7f048d01e85d'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary mx-1 mb-2'
            >
              Medium
            </a>
            <a
              href='https://cchain.explorer.avax.network/address/0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985/transactions'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary mx-1 mb-2'
            >
              Token address
            </a>
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
            <br />
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
            <a
              href='https://discord.gg/hYDnmyadJC'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary mx-1 mb-2'
            >
              Discord
            </a>
            <a
              href='https://t.me/joinchat/BN0YR2yy2cU1ZWJk'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary mx-1 mb-2'
            >
              Telegram
            </a>
            <br />
            <a
              href='https://www.youtube.com/watch?v=wK4vvE44Pfw'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary mx-1 mb-2'
            >
              How to buy (VIDEO)
            </a>
            <a
              href={HowToBuyPDF}
              download
              rel='noopener noreferrer'
              className='btn btn-primary mx-1 mb-2'
            >
              How to buy (PDF)
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Information;
