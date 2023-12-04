import React from 'react';

export const Contracts = () => {
  return (
    <div className='container information py-5'>
      <div className='row py-5'>
        <div className='col-md-12 text-center'>
          <h2 className='feature pb-4'>Contracts</h2>
          <div className="info">
            <div className="row social-links">
              <a
                href='https://snowtrace.dev/address/0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985'
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
                href='https://snowtrace.dev/tx/0x7df1694004dd6e994d31f76c3978718e017fe6e6112482866051aca7ab90caa6'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-primary mx-1 mb-2'
              >
                2.5% of supply burnt tx
              </a>
              <a
                href='https://snowtrace.dev/tx/0xe3e92326e2993a270a2fdd44a7301e6adccb7dd1b40bcc4ed9ed88ec963a22ab'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-primary mx-1 mb-2'
              >
                LP-burnt tx
              </a>
            </div>
            <div className="row social-links">
              <a
                href='https://snowtrace.dev/address/0x88Dd784dFaaB1a7752d2CC81071Fcd12C1c4E1db'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-primary mx-1 mb-2'
              >
                DEV wallet address
              </a>
              <a
                href='https://snowtrace.dev/tx/0x5fa10181e6c9841aa2226b5468e2b92f0268feaf178626472428e9839ab76982'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-primary mx-1 mb-2'
              >
                Renounced ownership tx
              </a>
            </div>
            <div className="row social-links">
              <a
                href='https://snowtrace.dev/address/0xc2457F6Eb241C891EF74E02CCd50E5459c2E28Ea'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-primary mx-1 mb-2'
              >
                NFT V1 Address
              </a>
              <a
                href='https://snowtrace.dev/address/0x6Fe55D097FC9C1d08B64f4b1c94ac9453B1c9abB'
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
  )
}