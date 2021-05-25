// src/Header.js
import './Header.css';

import React from 'react';
import Web3 from 'web3';
import { Link } from 'react-router-dom';

const win = window as any
const connectMetaMask = () => {
  if (win.ethereum) {
    win.web3 = new Web3(win.ethereum);
    win.ethereum.enable();
  }
}

const claimAirdrop = async (e: any) => {
  e.preventDefault();
  connectMetaMask();
  const ABI = [
    {
      type: 'constructor',
      stateMutability: 'nonpayable',
      inputs: [
        { type: 'address', name: 'contrak', internalType: 'contract IERC20' }
      ]
    },
    {
      type: 'event',
      name: 'Deposit',
      inputs: [
        {
          type: 'address',
          name: 'user',
          internalType: 'address',
          indexed: true
        },
        {
          type: 'uint256',
          name: 'pid',
          internalType: 'uint256',
          indexed: false
        },
        {
          type: 'uint256',
          name: 'amount',
          internalType: 'uint256',
          indexed: false
        }
      ],
      anonymous: false
    },
    {
      type: 'event',
      name: 'OwnershipTransferred',
      inputs: [
        {
          type: 'address',
          name: 'previousOwner',
          internalType: 'address',
          indexed: true
        },
        {
          type: 'address',
          name: 'newOwner',
          internalType: 'address',
          indexed: true
        }
      ],
      anonymous: false
    },
    {
      type: 'event',
      name: 'Withdraw',
      inputs: [
        {
          type: 'address',
          name: 'user',
          internalType: 'address',
          indexed: true
        },
        {
          type: 'uint256',
          name: 'pid',
          internalType: 'uint256',
          indexed: false
        },
        {
          type: 'uint256',
          name: 'amount',
          internalType: 'uint256',
          indexed: false
        }
      ],
      anonymous: false
    },
    {
      type: 'function',
      stateMutability: 'view',
      outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
      name: 'balance',
      inputs: []
    },
    {
      type: 'function',
      stateMutability: 'view',
      outputs: [{ type: 'address', name: '', internalType: 'contract IERC20' }],
      name: 'contractaddress',
      inputs: []
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'deposit',
      inputs: [{ type: 'uint256', name: '_amount', internalType: 'uint256' }]
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'get',
      inputs: []
    },
    {
      type: 'function',
      stateMutability: 'view',
      outputs: [{ type: 'address', name: '', internalType: 'address' }],
      name: 'owner',
      inputs: []
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'renounceOwnership',
      inputs: []
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'transferOwnership',
      inputs: [{ type: 'address', name: 'newOwner', internalType: 'address' }]
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'update',
      inputs: [{ type: 'uint256', name: '_amount', internalType: 'uint256' }]
    }
  ];
  const fairyContract = new win.web3.eth.Contract(
    ABI,
    '0xeAdf7D005596dbad55e067C1208080f83258D452'
  );
  var account = await win.web3.eth.getAccounts();
  account = account[0];
  console.log(account);
  try {
    await fairyContract.methods
      .get()
      .send({ from: account, gasPrice: 225000000000, gas: 200000 });
  } catch (error) {
    alert(error);
  }
}

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
                <ul className="dropdown-menu">
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
                  <Link to='/comingsoon' style={{ textDecoration: 'none' }}>
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
                <ul className="dropdown-menu">
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
                </ul>
              </li>
                  
                <li className="dropdown nav-item">
                <a href="/#" className="dropdown-toggle nav-link font-weight-bold" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Docs<span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                  <Link to='/static/media/how_to_buy.d27bfe52.pdf' target='_blank' rel="noreferrer">
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

              <li className='nav-item'>
                <button
                  className='btn btn-outline-light'
                  onClick={claimAirdrop}
                >
                  Claim Airdrop
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
