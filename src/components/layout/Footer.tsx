import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faReddit, faTelegram , faDiscord, faFacebook, faInstagram, faTiktok, faYoutube, faMediumM, faGithub} from '@fortawesome/free-brands-svg-icons';

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
            className='btn btn-primary mx-1 mb-2'
            aria-label='Twitter'
          >
             <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a
            href='https://t.me/sporeproject'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary mx-1 mb-2'
            aria-label='Telegram'
          >
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a
            href='https://www.instagram.com/sporeproject'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary mx-1 mb-2'
            aria-label='Instagram'
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href='https://tiktok.com/@sporeproject'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary mx-1 mb-2'
            aria-label='TikTok'
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a
            href='https://www.facebook.com/sporeearth'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary mx-1 mb-2'
            aria-label='Facebook'
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href='https://discord.gg/hYDnmyadJC'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary mx-1 mb-2'
            aria-label='Discord'
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a
            href='https://www.reddit.com/r/sporeproject/'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary mx-1 mb-2'
            aria-label='Reddit'
          >
            <FontAwesomeIcon icon={faReddit} />
          </a>
          <a
            href='https://sporeproject.medium.com'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary mx-1 mb-2'
            aria-label='Medium'
          >
            <FontAwesomeIcon icon={faMediumM} />
          </a>
          <a
            href='https://www.youtube.com/sporeproject'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary mx-1 mb-2'
            aria-label='YouTube'
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a
            href='https://github.com/sporeproject'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary mx-1 mb-2'
            aria-label='Github'
          >
            <FontAwesomeIcon icon={faGithub} />
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

