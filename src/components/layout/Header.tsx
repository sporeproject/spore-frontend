// src/Header.js
import './Header.css';

import React from 'react';

import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <header className='header'>
      <nav className='navbar navbar-expand-lg py-3'>
        <div className='container-fluid'>
          <a href='/' className='navbar-brand'>
            <img src='spore_128.png' className='logo' alt='Spore' />{' '}
            <h1 className='font-weight-bold d-inline'>Spore</h1>
          </a>
          <button
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            className='navbar-toggler navbar-toggler-right'>
            <i className='fa fa-bars'></i>
          </button>
          <div id='navbarSupportedContent' className='collapse navbar-collapse'>
            <ul className='navbar-nav ml-auto'>
               <li className="dropdown nav-item">
                <a href="/#" className="dropdown-toggle nav-link font-weight-bold" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  Buy SPORE<span className="caret"></span>
                </a>
                <ul className="dropdown-menu dropdown-menu--buy-spore">
                  <li>
                  <a href='https://app.pangolin.exchange/#/swap?inputCurrency=0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985' target='_blank' rel="noreferrer" style={{textDecoration:'none'}}>
                    <span className='nav-link'>Avalanche <img height="30px" width="30px" src='avalanche-logo.png' alt='Avalanche Network' className="imagenespeciada"></img></span>
                  </a>
                  </li>
                  <li>
                  <a href='https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x33a3d962955a3862c8093d1273344719f03ca17c' target='_blank' rel="noreferrer" style={{textDecoration:'none'}}>
                    <span className='nav-link'>Binance Smart Chain <img height="30px" width="30px" src='binance-logo.png' alt="Binance Smart Chain" className="imagenespeciada"></img></span>
                  </a>
                  </li>
                </ul>
              </li> 
              
              <li className='nav-item'>
                <Link to='/bridge' style={{ textDecoration: 'none' }}>
                  <span className='nav-link font-weight-bold' title='Spore Avalanche-BSC Bridge'>Bridge</span>
                </Link>
              </li>


              <li className="dropdown nav-item">
                <a href="/#" className="dropdown-toggle nav-link font-weight-bold" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">NFT<span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                  <Link to='/nft' style={{ textDecoration: 'none' }}>
                    <span className='nav-link'>Market</span>
                  </Link>
                  </li>
                  <li>
                  <Link to='/gallery' style={{ textDecoration: 'none' }}>
                    <span className='nav-link'>Gallery</span>
                  </Link>
                  </li>
                  <li>
                  <Link to='/coming-soon' style={{ textDecoration: 'none' }}>
                    <span className='nav-link'>Giveaway</span>
                  </Link>
                  </li>
                </ul>
               </li>
                  
              <li className="dropdown nav-item">
                <a href="/#"
                  className="dropdown-toggle nav-link font-weight-bold" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  Charts <span className="caret"></span>
                </a>
                <ul className="dropdown-menu dropdown-menu--chart">
                <li>
                    <a href='https://metamorphosis.chartex.pro/?symbol=AVAX_PANGOLIN%3ASPORE.0x0a63179a8838b5729E79D239940d7e29e40A0116&interval=240&theme=dark' target='_blank' rel='noopener noreferrer'>
                      Chartex (AVAX)
                    </a>
                  </li>
                
                  <li>
                    <a href='https://info.pangolin.exchange/#/token/0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985' target='_blank' rel='noopener noreferrer'>
                      Pangolin (AVAX)
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
                  <li>
                    <a href='https://poocoin.app/tokens/0x33a3d962955a3862c8093d1273344719f03ca17c' target='_blank' rel='noopener noreferrer'>
                      PooCoin (BSC)
                    </a>
                  </li>
                </ul>
              </li>
                              
                <li className="dropdown nav-item">
                <a href="/#" className="dropdown-toggle nav-link font-weight-bold" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Docs<span className="caret"></span>
                </a>
                <ul className="dropdown-menu dropdown-menu--how-to-buy mb-2">
                  <li>
                  <Link to='./pdf/how-to-buy.pdf' target='_blank' rel="noreferrer">
                    <span className='nav-link'>How to buy (PDF)</span>
                  </Link>
                  </li>
                  <li>
                  <a href='https://www.youtube.com/watch?v=wK4vvE44Pfw' target='_blank' rel="noreferrer">
                    <span className='nav-link'>How to buy (video)</span>
                  </a>
                  </li>
                </ul>
              </li>

              {/*<li className='nav-item'>
                <a
                  className='btn btn-outline-light'
                  href='/airdrop'
                >
                  Claim Airdrop
                </a>
              </li>*/}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
