import React, { useEffect } from 'react';
import { useState } from 'react';
import { ContractAddesses } from '../../../utils/addresses';
import { nftmetadata } from '../../../utils/nftmetadata';
import { SPORE_MARKET_ABI } from '../../../utils/SporeAbis';
import { EmptyNFTWrapper, ItemNFT, TagPrice } from './MarketPlace.style';
import { useMedia } from 'react-use';

import { useHistory } from "react-router-dom";



const win = window as any;

export interface MarketplaceItem {
  itemId: number;
  price: number;
  URI: string;
}

type Props = {
  bazaar: Array<any>;
  onSelected: (itemId: number) => void;
};

export const MarketPlaceView = ({ bazaar, onSelected }: Props) => {
  const [marketPlaceItems, setMarketPlaceItems] = useState<
    Array<MarketplaceItem>
  >([]);
  const isLtMd = useMedia('(max-width: 600px)');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  

  const findimage = (itemId: number) => {
    var item = Number(itemId) + 1;
    return nftmetadata
      .filter((x) => x.id === item.toString())
      .map((ext) => {
        return ext.compressed_url;
      })
      .toString();
  };

  useEffect(() => {
    const buildMarketPlace = async () => {
      setLoading(true);
      const SporeMarketv1 = new win.ava.eth.Contract(
        SPORE_MARKET_ABI,
        ContractAddesses.AVAX_MARKET_MAINNET
      );
      var builder = new Array<MarketplaceItem>();
      for (let i = 0; i <= 72 - 1; i++) {
        if (bazaar[i] !== undefined && bazaar[i].price > 0) {
          const URI = await SporeMarketv1.methods.tokenURI(i).call();
          builder.push({
            itemId: i,
            price: bazaar[i].price / 10 ** 18,
            URI: URI,
          } as MarketplaceItem);
        }
      }
      setMarketPlaceItems(builder);
      setLoading(false);
    };
    if (bazaar.length > 0 && marketPlaceItems.length !== 72) buildMarketPlace();
    // eslint-disable-next-line
  }, [bazaar]);

  const nFormatter = (num: number, digits: number) => {
    const lookup = [
      { value: 1, symbol: '' },
      { value: 1e3, symbol: 'k' },
      { value: 1e6, symbol: 'M' },
      { value: 1e9, symbol: 'G' },
      { value: 1e12, symbol: 'T' },
      { value: 1e15, symbol: 'P' },
      { value: 1e18, symbol: 'E' },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup
      .slice()
      .reverse()
      .find(function (item) {
        return num >= item.value;
      });
    return item
      ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
      : '0';
  };

  if (loading) {
    return <div className='loader'> Loading...</div>;
  }
  

  return (
    <>
      {marketPlaceItems.length > 0 && marketPlaceItems.map((item: MarketplaceItem) => (
        <div key={item.itemId} className="col-6 col-sm-4 col-md-4 col-lg-3">



          <ItemNFT onClick={() => history.push("/nft/"+item.itemId )}>
            <div className="image-wrapper">
              <img src={findimage(item.itemId)} alt="Reload your page" />
            </div>
            <div className="item-description">
              <span  >ID: {item.itemId}</span>
              {isLtMd && (<TagPrice>{nFormatter(item.price, 2)} AVAX</TagPrice>)}
              {!isLtMd && (
                <TagPrice>{item.price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} AVAX</TagPrice>
              )}
            </div>
          </ItemNFT>
        </div>
      ))}

      {marketPlaceItems.length === 0 && (
        <EmptyNFTWrapper>
          <h4>No NFTs for Sale</h4>
        </EmptyNFTWrapper>
      )}
    </>
  );
};
