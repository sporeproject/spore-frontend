import React from "react";

import Carousel from "react-bootstrap/Carousel";
import './NFT.css';
import { nftmetadata } from '../../utils/nftmetadata';


const NFTGallery = (props: any) => {

    return (
      <> 
      
      <div className='container information py-2'>
        <div className='row pb-5 py-2'>
          <div className='col-lg-12'>
            <h2 className='feature pb-2 text-center'>
              Gallery
            </h2>
            
            <h3 className="text-center pb-2">Welcome to our first generation of NFTs</h3>
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

      <section className= "py-5">
      
      {' '}
      &nbsp;&nbsp;&nbsp;
      <Carousel>
            {nftmetadata.map((data:{id: string, name: string, external_url: string, author: string, description: string }) => (
              <Carousel.Item>
               <div key= {data.id} >
                <img 
                  className="d-block center-block rounded shadow"
                  src={data.external_url}
                  alt="Reload your page"
                  height= "400"
                />
                </div>
                
                <Carousel.Caption>
                  <h3>Name: {data.name}</h3>
                  <h4>Author: {data.author}</h4>
                  <p>{data.description}</p>
                </Carousel.Caption>
                
            </Carousel.Item>
            ))}
      </Carousel>
      </section>  

      <div className='container information py-2'>
        <div className='row pb-5 py-2'>
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
  export default NFTGallery
  