import { useEffect, useMemo } from 'react';
import { useState } from 'react';
// import { ContractAddresses } from '../../../utils/addresses';
import { nftmetadata } from '../../../utils/nftmetadata';
// import { SPORE_MARKET_ABI } from '../../../utils/SporeAbis';
import { BoxOrderBy, EmptyNFTWrapper, ItemNFT, TagPrice } from './MarketPlace.style';
import { useMedia } from 'react-use';
import { wagmiConfig } from '../../../wagmi-config';
import { SporeABI } from '../../../utils/abis';
import { ContractAddresses } from '../../../utils/addresses';
import { useAccount, useChainId } from 'wagmi';
import { readContract, writeContract, connect } from "@wagmi/core";
import { SPORE_MARKET_ABI } from '../../../utils/SporeAbis';

export interface MarketplaceItem {
  itemId: number;
  price: bigint;
  // URI: string;
}

type Props = {
  bazaar: Array<any>;
  isLoading: boolean;
  onSelected: (itemId: number) => void;
};

const AvaxChainId = 43114;
const SporeAddress = '0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985';
const SporeAddressBSC = '0x33A3d962955A3862C8093D1273344719f03cA17C';

const textOrderBy = {
  "id": "ID",
  "low": "Low Price",
  "high": "High Price",
}

export const MarketPlaceView = ({ bazaar, isLoading }: Props) => {
  const { address: userAddress } = useAccount();
  const [marketPlaceItems, setMarketPlaceItems] = useState<
    Array<MarketplaceItem>
  >([]);
  const chainId = useChainId();
  const [loading, setLoading] = useState(isLoading);
  const [isSporeApproved, setIsSporeApproved] = useState(false);
  const [orderBy, setOrderBy] = useState<keyof typeof textOrderBy>("id");

  const isNetworkAvalanche = () => Boolean(chainId === AvaxChainId);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading])

  const SporeAddressByChainId = chainId === AvaxChainId ? SporeAddress : SporeAddressBSC;

  useEffect(() => {
    const load = async () => {
      if (isNetworkAvalanche()) {
        const allowance = await readContract(wagmiConfig, { abi: SporeABI, address: SporeAddressByChainId, functionName: 'allowance', args: [userAddress, ContractAddresses.AVAX_MARKET_MAINNET] })
        const permitAllowance = 100000000000n;
        setIsSporeApproved(allowance as bigint >= permitAllowance)
      }
    }
    load()
  }, [chainId, userAddress])

  const approveSporeToMarketplace = async () => {
    const SporeAddress = ContractAddresses.AVAX_SPORE_MAINNET;
    const SporeNFTMarketaddress = ContractAddresses.AVAX_MARKET_MAINNET;
    const approveFee = 100000000000n;
    var amount = BigInt(approveFee) * 10n ** 9n;
    try {
      await writeContract(wagmiConfig, {
        abi: SporeABI,
        address: SporeAddress,
        functionName: 'approve',
        args: [
          SporeNFTMarketaddress,
          amount
        ]
      })
      const allowance = await readContract(wagmiConfig, { abi: SporeABI, address: SporeAddressByChainId, functionName: 'allowance', args: [userAddress, ContractAddresses.AVAX_MARKET_MAINNET] })
      const permitAllowance = 100000000000n;
      setIsSporeApproved(allowance as bigint >= permitAllowance)
    } catch (error) {
      console.log(error);
    }
  }

  async function NFTbuy(itemId: number) {

    if (!userAddress) {
    }

    if (!isNetworkAvalanche()) {
      alert('Please connect to Avalanche Network before buy');
      return;
    }

    const bazaar: any = await readContract(wagmiConfig, { abi: SPORE_MARKET_ABI, address: ContractAddresses.AVAX_MARKET_MAINNET, functionName: 'Bazaar', args: [itemId] })
    try {
      await writeContract(wagmiConfig, {
        abi: SPORE_MARKET_ABI,
        address: ContractAddresses.AVAX_MARKET_MAINNET,
        functionName: 'buy',
        args: [
          itemId
        ],
        value: bazaar[1]
      })
    } catch (error: any) {
      alert(error.message);
    }
  }

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
      for (let i = 0; i < bazaar.length; i++) {

        // if (bazaar[i] !== undefined && bazaar[i][1] > 0) {
        // const URI: any = await readContract(wagmiConfig, { abi: SPORE_MARKET_ABI, address: ContractAddresses.AVAX_MARKET_MAINNET, functionName: 'tokenURI', args: [i] })
        // console.log("item ID?",bazaar[i][0])
        builder.push({
          itemId: bazaar[i][0],
          price: BigInt(bazaar[i][1]) / 10n ** 18n,
          // URI: URI,
        } as MarketplaceItem);
      }
      // }
      setMarketPlaceItems(builder);
      setLoading(false);
    };
    if (bazaar.length > 0 && marketPlaceItems.length !== 72) buildMarketPlace();
    // eslint-disable-next-line
  }, [bazaar]);

  const handleChangeOrder = (event: any) => {
    setOrderBy(event.target.value)
  }

  const marketList = useMemo(() => {
    return marketPlaceItems.slice().sort((itemPrev, itemNext) => {
      if (orderBy === "id") {
        return parseInt(String(itemPrev.itemId)) - parseInt(String(itemNext.itemId));
      } else if (orderBy === "low") {
        return parseFloat(String(itemPrev.price)) - parseFloat(String(itemNext.price));
      } else if (orderBy === "high") {
        return parseFloat(String(itemNext.price)) - parseFloat(String(itemPrev.price));
      } else {
        // Default case, sort by price descending
        return parseFloat(String(itemNext.price)) - parseFloat(String(itemPrev.price));
      }
    });
  }, [marketPlaceItems, orderBy]);

  if (loading) {
    return <div className='loader'> Loading...</div>;
  }
  console.log("orderBy", orderBy)
  return (
    <>
      <BoxOrderBy className='col-12'>
        Order by
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {textOrderBy[orderBy]}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
            {Array.from(Object.keys(textOrderBy)).map((key) => (<button className="dropdown-item" type="button" onClick={() => setOrderBy(key as keyof typeof textOrderBy)} >{textOrderBy[key as keyof typeof textOrderBy]}</button>))}
          </div>
        </div>

      </BoxOrderBy>
      {marketList.length > 0 && marketList.map((item: MarketplaceItem) => (
        <div key={item.itemId} className="col-6 col-sm-4 col-md-4 col-lg-3">
          <ItemNFT>
            <div className="image-wrapper">
              <img style={
                {
                  width: "100%",
                  maxWidth: "100%",
                  aspectRatio: 1,
                  objectFit: "cover",
                }
              } src={findimage(item.itemId)} alt="Reload your page" />
            </div>
            <div className="item-description">
              <div>ID {item.itemId}</div>
              <div>{Number(item.price).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} AVAX</div>
            </div>
            <div className='button-wrapper'>
              {!isSporeApproved ?
                <button className='nft-buy-button approve' onClick={() => approveSporeToMarketplace()} >
                  Approve
                </button> :
                <button className='nft-buy-button buy' onClick={() => NFTbuy(item.itemId)} >
                  Buy now
                </button>
              }
              <button className='nft-buy-button'>
                Buy
              </button>
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
