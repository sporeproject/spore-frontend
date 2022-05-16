import React from "react";

import MyParticles from "../../../components/Particles/Particles";

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import '../NFT.scss';

import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Helmet } from "react-helmet";
SwiperCore.use([Navigation, Pagination]);

const FirstGeneration = (props: any) => {
    const Metadata = () => (
        <Helmet>
            <title>Spore NFT Gallery - Spore</title>
            <meta name="description" content="Spore™ is an NFT platform on the Avalanche network and the developer of the hyperdeflationary SPORE currency." />
            <meta name="keywords" content="Spore, NFT, Avalanche, BSC" />
        </Helmet>
    )

    return (
        <>
            <div className="asciid-space">
                <Metadata />
                <div className='container overflow-hidden position-relative'>
                    <MyParticles />

                    <h2 className='feature pb-12 pt-5 text-center'>
                        ASCIId
                    </h2>

                    <h4 className="text-center pb-5">by: Ice-T</h4>

                    <div className='row py-4 pb-10'>
                        <div className='col-md-1'></div>

                        <div className='col-md-3'>
                            <img className="shrum-img" src="/img/asciid/1.png" alt="1" />
                        </div>

                        <div className='col-md-1'></div>

                        <div className='col-md-2'><img className="shrum-img" src="/img/asciid/2.png" alt="2" /> </div>

                        <div className='col-md-1'></div>

                        <div className='col-md-3'><img className="shrum-img" src="/img/asciid/3.png" alt="3" /></div>

                        <div className='col-md-1'></div>

                    </div>

                    <div className="row py-4">

                        <div className='col-md-3'><img className="shrum-img" src="/img/asciid/4.png" alt="4" /></div>

                        <div className='col-md-6 py-5 text-center'> <h5> Date of launch: TBA</h5></div>

                        <div className='col-md-3'><img className="shrum-img" src="/img/asciid/5.png" alt="5" /></div>

                    </div>

                    <div className="row py-4" >

                        <div className='col-md-1'></div>
                        <div className='col-md-2'><img className="shrum-img" src="/img/asciid/6.png" alt="6" /></div>
                        <div className='col-md-2'><img className="shrum-img" src="/img/asciid/7.png" alt="7" /></div>
                        <div className='col-md-2'><img className="shrum-img" src="/img/asciid/8.png" alt="8" /></div>
                        <div className='col-md-2'><img className="shrum-img" src="/img/asciid/9.png" alt="9" /></div>
                        <div className='col-md-2'><img className="shrum-img" src="/img/asciid/10.png" alt="10" /></div>
                        <div className='col-md-1'></div>
                    </div>

                    <div className="row py-4">

                        <div className='col-md-1'></div>
                        <div className='col-md-2'><img className="shrum-img" src="/img/asciid/11.png" alt="11" /></div>
                        <div className='col-md-2'><img className="shrum-img" src="/img/asciid/12.png" alt="12" /></div>
                        <div className='col-md-2'><img className="shrum-img" src="/img/asciid/13.png" alt="13" /></div>
                        <div className='col-md-2'><img className="shrum-img" src="/img/asciid/14-1.png" alt="14-1" /></div>
                        <div className='col-md-2'><img className="shrum-img" src="/img/asciid/14-2.png" alt="14-2" /></div>
                        <div className='col-md-1'></div>

                    </div>

                    <div className="row py-4">

                        <div className='col-md-3'><img className="shrum-img" src="/img/asciid/14-3.png" alt="14-3" /></div>

                        <div className='col-md-6 text-center py-5'><h5>BAT: TBA |  HC: 5/5 |  EA: TBA </h5></div>

                        <div className='col-md-3'><img className="shrum-img" src="/img/asciid/15.png" alt="15" /></div>


                    </div>

                    <div className='row py-4 pb-10'>
                        <div className='col-md-1'></div>

                        <div className='col-md-3'>
                            <img className="shrum-img" src="/img/asciid/16.png" alt="16" />
                        </div>

                        <div className='col-md-1'></div>

                        <div className='col-md-2'><img className="shrum-img" src="/img/asciid/17.png" alt="17" /> </div>

                        <div className='col-md-1'></div>

                        <div className='col-md-3'><img className="shrum-img" src="/img/asciid/18.png" alt="18" /></div>

                        <div className='col-md-1'></div>

                    </div>

                </div>



            </div>

        </>
    );
}
export default FirstGeneration
