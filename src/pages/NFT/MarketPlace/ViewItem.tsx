import { useEffect } from 'react';
import { useState } from 'react';
// import { ContractAddresses } from '../../../utils/addresses';
import { nftmetadata } from '../../../utils/nftmetadata';
// import { SPORE_MARKET_ABI } from '../../../utils/SporeAbis';
import { ItemNFT, TagPrice } from './MarketPlace.style';
import { useMedia } from 'react-use';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL || "https://frontend-api.sporeproject.org";

// const win = window as any;

type ViewItemParams = {
  itemId: string,
};

const nFormatter = (num: bigint, digits: number): string => {
  const lookup = [
    { value: BigInt(1), symbol: '' },
    { value: BigInt(1e3), symbol: 'k' },
    { value: BigInt(1e6), symbol: 'M' },
    { value: BigInt(1e9), symbol: 'G' },
    { value: BigInt(1e12), symbol: 'T' },
    { value: BigInt(1e15), symbol: 'P' },
    { value: BigInt(1e18), symbol: 'E' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const numBigInt = BigInt(num);
  const item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return numBigInt >= item.value;
    });
  return item
    ? (Number(numBigInt / item.value).toFixed(digits).replace(rx, '$1') + item.symbol)
    : '0';
};

const findimage = (itemId: number) => {
  var item = itemId + 1;
  return nftmetadata
    .filter((x) => x.id === item.toString())
    .map((ext) => {
      console.log(ext.external_url);
      return ext.external_url;

    })
    .toString();
};


export const ViewItem = () => {

  let { itemId } = useParams<ViewItemParams>();
  const id = itemId;
  const [price, setPrice] = useState<bigint>(0n);
  const isLtMd = useMedia('(max-width: 600px)');

  useEffect(() => {
    const findPrice = async () => {
      const endpoint = '/nft/get_data';
      const url = `${API_URL}${endpoint}?q=${String(id)}`;
      const res = await axios.get(url); 
      const bazaar = res.data;
      // const SporeMarketv1 = new win.ava.eth.Contract(
      //   SPORE_MARKET_ABI,
      //   ContractAddresses.AVAX_MARKET_MAINNET
      // );
      // const bazaar = await SporeMarketv1.methods.Bazaar(id).call();
      setPrice(BigInt(bazaar[1]) / 10n ** 18n);
    };
    findPrice();
  }, [id, price]);



  return (
    <>
      <div className='col-md-12 text-center py-4'>
        <div key={itemId} className="col-12 col-sm-12 col-md-12 col-lg-4">
          <ItemNFT>
            <div className="image-wrapper">
              <img src={findimage(Number(id))} alt="Reload your page" />
            </div>
            <div className="item-description">
             
              {isLtMd && (<TagPrice>{nFormatter(price, 2)} AVAX</TagPrice>)}
              {!isLtMd && (
                <TagPrice>Price: {Number(price).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} AVAX</TagPrice>
              )}
              <span  >ID: {itemId}</span>
            </div>
          </ItemNFT>
        </div>
      </div>
    </>
  )

}

