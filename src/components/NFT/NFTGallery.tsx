import React from "react";

import Carousel from "react-bootstrap/Carousel";
import './NFT.css';
import { nftmetadata } from '../../utils/nftmetadata';


const NFTGallery = (props: any) => {

    return (
      <> 
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
    </>
    );
  }
  export default NFTGallery
  