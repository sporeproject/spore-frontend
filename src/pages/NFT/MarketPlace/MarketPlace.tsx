import { useEffect } from 'react';
import { useState } from 'react';
import { ContractAddesses } from '../../../utils/addresses';
import { nftmetadata } from '../../../utils/nftmetadata';
import { SPORE_MARKET_ABI } from '../../../utils/SporeAbis';
import { EmptyNFTWrapper, ItemNFT, TagPrice } from './MarketPlace.style';
import { useMedia } from 'react-use';
import { useNavigate } from 'react-router-dom';
import { readContract } from "@wagmi/core";
import { wagmiConfig } from '../../../wagmi-config';

export interface MarketplaceItem {
  itemId: number;
  price: bigint;
  URI: string;
}

type Props = {
  bazaar: Array<any>;
  onSelected: (itemId: number) => void;
};

export const MarketPlaceView = ({ bazaar }: Props) => {
  const [marketPlaceItems, setMarketPlaceItems] = useState<
    Array<MarketplaceItem>
  >([]);
  const isLtMd = useMedia('(max-width: 600px)');
  const [loading, setLoading] = useState(false);
  const history = useNavigate();


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
      var builder = new Array<MarketplaceItem>();
      for (let i = 0; i < 72; i++) {
        if (bazaar[i] !== undefined && bazaar[i][1] > 0) {
          const URI: any = await readContract(wagmiConfig, { abi: SPORE_MARKET_ABI, address: ContractAddesses.AVAX_MARKET_MAINNET, functionName: 'tokenURI', args: [i] })
          builder.push({
            itemId: i,
            price: bazaar[i][1] / 10n ** 18n,
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

  if (loading) {
    return <div className='loader'> Loading...</div>;
  }


  return (
    <>
      {marketPlaceItems.length > 0 && marketPlaceItems.map((item: MarketplaceItem) => (
        <div key={item.itemId} className="col-6 col-sm-4 col-md-4 col-lg-3">
          <ItemNFT onClick={() => history("/nft/" + item.itemId)}>
            <div className="image-wrapper">
              <img src={findimage(item.itemId)} alt="Reload your page" />
            </div>
            <div className="item-description">
              <span  >ID: {item.itemId}</span>
              {isLtMd && (<TagPrice>{nFormatter(item.price, 2)} AVAX</TagPrice>)}
              {!isLtMd && (
                <TagPrice>{Number(item.price).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} AVAX</TagPrice>
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
