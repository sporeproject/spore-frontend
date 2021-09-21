import React from 'react';
import { PartnersWrapper } from './Information.style';

export const Partnerships = () => {
  return (
    <section className='bg-white pb-6'>
      <div className='container information py-5'>
        <div className='row py-6'>
          <div className='col-md-12 text-center'>
            <h2 className='feature'>Partnerships</h2>
          </div>
        </div>
        <PartnersWrapper className='row py-5'>
          <div className='col-md-6 py-3 text-center'>
            <a href="https://pangolin.exchange/">
              <img src="https://pangolin.exchange/logo.svg" alt="Pangolin Exchange" />
            </a>
          </div>

          <div className='col-md-6 py-3 text-center'>
            <a href="https://gaj.finance">
              <img src="/img/gaj.png" alt="Gaj Finance" />
            </a>
          </div>
        </PartnersWrapper>
      </div>
    </section>
  )
}