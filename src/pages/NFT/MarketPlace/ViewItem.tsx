import { useEffect } from 'react';
import { useState } from 'react';
import { ContractAddesses } from '../../../utils/addresses';
import { nftmetadata } from '../../../utils/nftmetadata';
import { SPORE_MARKET_ABI } from '../../../utils/SporeAbis';
import { ItemNFT, TagPrice } from './MarketPlace.style';
import { useMedia } from 'react-use';
import { useParams } from 'react-router-dom';

const win = window as any;

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
  var item = Number(itemId) + 1;
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
  const id = Number(itemId);
  const [price, setPrice] = useState<bigint>(0n);
  const isLtMd = useMedia('(max-width: 600px)');

  useEffect(() => {
    const findPrice = async () => {
      const SporeMarketv1 = new win.ava.eth.Contract(
        SPORE_MARKET_ABI,
        ContractAddesses.AVAX_MARKET_MAINNET
      );
      const bazaar = await SporeMarketv1.methods.Bazaar(id).call();
      setPrice(bazaar[1] / 10n ** 18n);
    };
    findPrice();
  }, [id, price]);



  return (
    <>
      <div className='col-md-12 text-center py-4'>
        <div key={itemId} className="col-12 col-sm-12 col-md-12 col-lg-4">
          <ItemNFT>
            <div className="image-wrapper">
              <img src={findimage(id)} alt="Reload your page" />
            </div>
            <div className="item-description">
              <span  >ID: {itemId}</span>
              {isLtMd && (<TagPrice>{nFormatter(price, 2)} AVAX</TagPrice>)}
              {!isLtMd && (
                <TagPrice>Price: {Number(price).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} AVAX</TagPrice>
              )}
            </div>
          </ItemNFT>
        </div>
      </div>
    </>
  )

}

