import MyParticles from "../../../components/Particles/Particles";

// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';
// import 'swiper/components/navigation/navigation.min.css';
// import 'swiper/components/pagination/pagination.min.css';
// import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import '../NFT.scss';

import { Link } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';
import { Helmet } from "react-helmet";

SwiperCore.use([Navigation, Pagination]);

const Gallery = () => {
  const Metadata = () => (
    <Helmet>
      <title>Spore NFT Gallery - Spore</title>
      <meta name="description" content="Spore™ is an NFT platform on the Avalanche network and the developer of the hyperdeflationary SPORE currency." />
      <meta name="keywords" content="Spore, NFT, Avalanche, BSC" />
    </Helmet>
  )

  return (
    <>
      <Metadata />
      <div className='container overflow-hidden position-relative'>
        <MyParticles />
        <h2 className='feature pb-2 pt-5 text-center'>
          Gallery
        </h2>

        <h3 className="text-center pb-5">"Spore's artworks are the manifestation of the community's nature"</h3>
      </div>

      <section className="bg-white-darker py-5">
        <div className='container information py-2'>
          <div className='row pb-5 py-2'>
            <div className='col-lg-12'>
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                  <div className="box-large">
                    <div className="box-body">

                      <div className="row">
                        <p>100% of the pieces have been made by community contribution.</p> &nbsp;
                        <p>Find a list of the collections:</p>
                      </div>
                      <div className="row">

                        <div className="col-lg-3">
                          <ul>
                          <li > <Link to='/charter'>
                              <span className= "box-link">Charter collection</span>
                            </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul>
                            <li>
                            <Link to='/asciid'>
                              <span className= "box-link">ASCII'd collection</span>
                            </Link>
                             </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul>
                            <li>TBA</li>
                          </ul>
                        </div>

                        <div className="col-lg-3">
                          <ul>
                            <li>TBA</li>
                          </ul>
                        </div>



                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row py-5"  >
                <div className="col-lg-12 col-sm-12">
                  Interested in curating Spore Art? reach us in the art channel at our discord.
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </>
  );
}
export default Gallery
