// src/Footer.js
import './Footer.css';

import React from 'react';

const Footer = () => {
  return (
    <div className='container-fluid footer pt-5'>
      <h5 className="row social-links">Follow us!</h5>
      <div className="info">
      
        <div className="row social-links">
          <a
            href='https://twitter.com/sporeproject'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary mx-1 mb-2 fab fa-twitter'
            aria-label='Twitter'
          >
          </a>
          <a
            href='https://www.reddit.com/r/sporeproject/'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary mx-1 mb-2 fab fa-reddit'
            aria-label='Reddit'
          >
          </a>
          <a
            href='https://t.me/sporefinanceofficial'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary mx-1 mb-2 fas fa-paper-plane'
            aria-label='Telegram'
          >
          </a>
          <a
            href='https://discord.gg/hYDnmyadJC'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary mx-1 mb-2 fab fa-discord'
            aria-label='Discord'
          >
          </a>
          <a
            href='https://www.facebook.com/sporeearth'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary mx-1 mb-2 fab fa-facebook'
            aria-label='Facebook'
          >
          </a>
          <a
            href='https://www.instagram.com/sporeproject'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary mx-1 mb-2 fab fa-instagram'
            aria-label='Instagram'
          >
          </a>
          <a
            href='https://tiktok.com/@sporeproject'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary mx-1 mb-2 fab fa-tiktok'
            aria-label='TikTok'
          >
          </a>
          <a
            href='https://www.youtube.com/sporeproject'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary mx-1 mb-2 fab fa-youtube'
            aria-label='YouTube'
          >
          </a>
          <a
            href='https://sporeproject.medium.com'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary mx-1 mb-2 fab fa-medium-m'
            aria-label='Medium'
          >
          </a>
          <a
            href='https://github.com/sporeproject'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary mx-1 mb-2 fab fa-github'
            aria-label='Github'
          >
          </a>
        </div>
        </div>
        <div className='row'>
          <div className='col-md-12 text-center py-4'>
            <a
              href='https://github.com/sporeproject/Spore-frontend'
              target='_blank'
              className='credit'
              rel='noopener noreferrer'
            >
              
              Made with &#127812; by the Spore community
            </a>
          </div>
        </div>
    </div>
  );
}

export default Footer;

