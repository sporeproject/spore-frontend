import { Helmet } from 'react-helmet';
import './Identity.scss';

const Identity = () => {
  const Metadata = () => (
    <Helmet>
      <title>Spore Visual Identity — CC0</title>
      <meta name='description' content='Download Spore’s logo and visual elements. No copyright. No restrictions. No ownership. Released under Creative Commons CC0.' />
    </Helmet>
  );

  return (
    <>
      <Metadata />
      <div className="container identity-page py-5">
        <div className="row">
          <div className="col-md-8 offset-md-2 text-center">
            <h1 className="identity-title">The Spore Identity</h1>
            <p className="lead">
              Symbols only matter when they’re unchained.
            </p>
            <p className="identity-description">
               <strong>Creative Commons CC0</strong>.
              No copyright. No restrictions. No ownership.
            </p>
         <div className="mt-5">
              <img src="spore-logo.png" alt="Spore Logo" className="img-fluid identity-preview" />

            </div>
            <div className="identity-downloads my-4">
              <a href="spore-logo.svg" className="btn btn-dark mx-2" download>SVG</a>
              <a href="spore-logo.jpg" className="btn btn-dark mx-2" download>JPG</a>
              <a href="spore-logo.png" className="btn btn-dark mx-2" download>PNG</a>

              </div>

               <p className="identity-download-text">For ownership-free, permissionless art. The chain is the truth.</p>

          </div>
        </div>
      </div>
    </>
  );
};

export default Identity;
