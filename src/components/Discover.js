import React from 'react'
import PriceToken from './PriceToken';

const Discover = () => {
  return (
    <div className='section_discover min-vh-100 py-5 bg-white-darker d-flex justify-content-center align-items-center'>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className='feature pb-1 text-center'><b>Activities</b></h1>
          </div>
        </div>
        <div className='row py-5'>
          <div className='col-md-7 py-5 '>
            <h3 >
              Discover our ecosystem of
            </h3>
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
        <div className='row pt-5'>
          <div className='col-md-5'>
            <dl className='lead  '>
              <h3>Our burn and redistribution rates are:</h3>
              <dt>On every Avalanche  <img height="30px" width="30px"
                src='avalanche-logo.png' alt='Avalanche Network'></img> transaction:</dt>
              <dd>4.6% is burned</dd>
              <dd>1.4% is redistributed to hodlers</dd>
              <dt>On every BSC  <img height="30px" width="30px" src='binance-logo.png' alt="Binance Smart Chain"></img> transaction: </dt>
              <dd>6% is burned</dd>
            </dl>
          </div>
          <div className='col-md-6 text-right'>
            <dl className='lead ' >
              <h3><img width="52px" height="52px" className='img-fluid' alt='Burn Token' src='spore_256.png' /> $SPORE live price: </h3>
            </dl>
            <div className='lead larger burnbox'>
              <PriceToken />
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Discover