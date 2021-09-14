import React from "react";
import { nftmetadata } from '../../../utils/nftmetadata';
import { GalleryItem, GalleryWrapper } from './Gallery.style';
import MyParticles from "../../../components/Particles/Particles";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import '../NFT.scss';

import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Helmet } from "react-helmet";
SwiperCore.use([Navigation,Pagination]);

const Gallery = (props: any) => {
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

        <h3 className="text-center pb-5">Welcome to our first generation of NFTs</h3>
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
                        <p>Here an non exhaustive list about our artists (many thanks to them):</p>
                      </div>
                      <div className="row">

                        <div className="col-lg-2">
                          <ul>
                            <li>Papipaz </li>
                            <li>Gamatar</li>
                          </ul>
                        </div>
                        <div className="col-lg-2">
                          <ul>
                            <li>Tchoco</li>
                            <li>JC </li>
                          </ul>
                        </div>
                        <div className="col-lg-2">
                          <ul>
                            <li>Brotoshi</li>
                            <li>Mlolotte</li>
                          </ul>
                        </div>

                        <div className="col-lg-2">
                          <ul>
                            <li>Freelancer</li>
                            <li>NightlyCatGirl</li>
                          </ul>
                        </div>
                        <div className="col-lg-2">
                          <ul>
                            <li>OrionDeimos</li>
                            <li>Berserk</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className='container'>
          <div className="row">
            <GalleryWrapper>
              <Swiper
                grabCursor={true}
                centeredSlides={true}
                navigation={true}
                breakpoints={{
                  "640": {
                    "slidesPerView": 2,
                    "spaceBetween": 24
                  },
                  "768": {
                    "slidesPerView": 2,
                    "spaceBetween": 24
                  },
                  "1024": {
                    "slidesPerView": 3,
                    "spaceBetween": 24
                  }
                }}
                
              >
                {nftmetadata.map((data: { id: string, name: string, external_url: string, author: string, description: string }) => (
                  <SwiperSlide key={data.id}>
                    <GalleryItem>
                      <div className="main-wrapper">
                        <img
                          src={data.external_url}
                          alt="Reload your page"
                          height="400"
                        />
                      </div>
                      <div className="info-wrapper">
                        <div style={{ fontSize: '24px' }}>Name: {data.name}</div>
                        <div style={{ fontSize: '14px' }}>Author: {data.author}</div>
                        <p style={{ fontSize: '16px', marginTop: '.5rem' }}>{data.description}</p>
                      </div>
                    </GalleryItem>
                  </SwiperSlide>
                ))}
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
              </Swiper>
            </GalleryWrapper>
          </div>
        </div>
      </section>

      <div className='container information pt-5'>
        <div className='row pb-5 pt-2'>
          <div className='col-lg-12'>
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="box-rounded">
                  <h4>Objective</h4>
                  <p>The stepping stone in our road to decentralized governance.
                    Burn an additional 0.0578% of the totalsupply.
                    Equivalent of 57t (0.057e15) SPORE.
                  </p>
                  <ul>
                    <li>First 4 NFTs: 1b each </li>
                    <li>Next 8 NFTs:  2b each </li>
                    <li>Next 12 NFTs: 50b each </li>
                    <li>Next 24 NFTs: 100b each </li>
                    <li>Next 12 NFTs: 500b each </li>
                    <li>Next 8 NFTs: 1t each </li>
                    <li>Last 4 NFTs: 10t each </li>
                  </ul>
                  <p className='pt-4'>
                    This first generation of NFTs have a special meaning :
                    they will be used for setting up a system of
                    off-chain/on-chain governance over the next deployments
                    using hashed signatures.</p>

                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="box-rounded">
                  <h4>Fair Launch</h4>
                  <p>After the public announcement, a timelock will be
                    activated allowing 6 hours to start buying the NFTs.
                    A sniper lock will not allow the first person to claim the NFTs but will have
                    1 in 3 possibilities to unlock the contract, allowing the following people to
                    claim the rest of the NFTs normally.
                    Only 1 NFT allowed to claim per wallet!
                    All SPORE used to mint the NFTs will go to the BURN address.</p>

                  <p>
                    <b className="important">There is no "DEV" fund.</b> The NFTs can be traded at
                    our marketplace using AVAX for settlement or in other marketplaces inside the Avalanche Ecosystem</p>
                  <p>A small SPORE
                    tax will be burnt every time anyone buys an NFT from the
                    Marketplace (10 million SPORE).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Gallery
