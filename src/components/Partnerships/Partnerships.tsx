import React from 'react';
import { PartnersWrapper } from './Information.style';
import pangolinExchangeLogo from '../../assets/pangolin-exchange.svg';
export const Partnerships = () => {
  return (
    <section className='bg-white-darker pb-6'>
      <div className='container information py-5'>
        <div className='row py-6'>
          <div className='col-md-12 text-center'>
            <h2 className='feature'>Partnerships</h2>
          </div>
        </div>
        <PartnersWrapper className='row py-5'>
          <div className='col-md-12 py-3 text-center'>
            <a href="https://pangolin.exchange/">
              <img src={pangolinExchangeLogo} alt="Pangolin Exchange" />
            </a>
          </div>
        </PartnersWrapper>
      </div>
    </section>
  )
}