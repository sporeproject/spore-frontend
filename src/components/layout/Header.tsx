import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

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

              <li className='nav-item fire-container'>


                <div className="fire">
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
                <div className="fire2">
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
              </li>

              <li className="dropdown nav-item">
                <a href="/#" className="dropdown-toggle nav-link font-weight-bold" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  Buy SPORE<span className="caret"></span>
                </a>
                <ul className="dropdown-menu dropdown-menu--buy-spore">
                  <li>
                    <a href='https://legacy.pangolin.exchange/#/swap?outputCurrency=0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985' target='_blank' rel="noreferrer" style={{ textDecoration: 'none' }}>
                      <span className='nav-link'>Avalanche <img height="30px" width="30px" src='avalanche-logo.png' alt='Avalanche Network' className="imagenespeciada"></img></span>
                    </a>
                  </li>
                  <li>
                    <a href='https://pancakeswap.finance/swap?outputCurrency=0x33a3d962955a3862c8093d1273344719f03ca17c' target='_blank' rel="noreferrer" style={{ textDecoration: 'none' }}>
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
                </ul>
              </li>

              <li className="dropdown nav-item">
                <a href="/#"
                  className="dropdown-toggle nav-link font-weight-bold" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  Charts <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  
                  <li>
                    <a className='nav-link' href='https://coinmarketcap.com/currencies/spore/' target='_blank' rel='noopener noreferrer'>
                      CoinMarketCap
                    </a>
                  </li>
                  <li >
                    <a className='nav-link' href='https://www.coingecko.com/en/coins/spore' target='_blank' rel='noopener noreferrer'>
                      CoinGecko
                    </a>
                  </li>
                  <li >
                    <a className='nav-link' href='https://dexscreener.com/avalanche/0x0a63179a8838b5729e79d239940d7e29e40a0116' target='_blank' rel='noopener noreferrer'>
                      DEX Screener
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
