import ReturnTokenURI from './ReturnTokenURI';
import './NFT.scss';
import { AVAX_SPORE_ABI, SPORE_MARKET_ABI } from '../../utils/SporeAbis';
import { useState, useEffect } from 'react';
import { ContractAddesses } from '../../utils/addresses';
import { MarketPlaceView } from './MarketPlace/MarketPlace';
import { MarketStat } from './NFT.style';
import MyParticles from '../../components/Particles/Particles';
import UnlockMetamask from '../../components/UnlockMetamask/UnlockMetamask';
import InstallMetamask from '../../components/InstallMetamask/InstallMetamask';
import { Helmet } from 'react-helmet';
import { useAccount, useChainId } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { readContract, writeContract, } from "@wagmi/core";
import { wagmiConfig } from '../../wagmi-config';
import axios from 'axios';



const AvaxChainId = 43114;
const API_URL = import.meta.env.VITE_API_URL || "https://frontend-api.sporeproject.org";


const NFT = () => {
  const { address } = useAccount();
  const chainId = useChainId();

  const [bazaar, setBazaar] = useState(new Array<any>());
  const [tokensOfOwner, setTokensOfOwner] = useState(new Array<any>());
  const [balance, setBalance] = useState(0);
  const [itemId, setItemId] = useState<number>();
  // const [bazaarPrices, setBazaarPrices]  = useState<BigInt[]>([]);
  const [floorPrice, setFloorPrice] = useState(0);
  const [lastSale, setLastSale] = useState(0);
  const [totalVolume, setTotalVolume] = useState(0);
  const [loading, setLoading] = useState(false);
  const [approveFee, setApproveFee] = useState(100000000000);

  async function approve() {
    const SporeAddress = ContractAddesses.AVAX_SPORE_MAINNET;
    const SporeNFTMarketaddress = ContractAddesses.AVAX_MARKET_MAINNET;
    var amount = BigInt(approveFee) * 10n ** 9n;
    try {
      await writeContract(wagmiConfig, {
        abi: AVAX_SPORE_ABI,
        address: SporeAddress,
        functionName: 'approve',
        args: [
          SporeNFTMarketaddress,
          amount
        ],
      })
    } catch (error: any) {
      alert(error.message);
    }
  }

  async function NFTbuy() {
    if (!isNetworkAvalanche()) {
      alert('Please connect to Avalanche Network before buy');
      return;
    }

    const bazaar: any = await readContract(wagmiConfig, { abi: SPORE_MARKET_ABI, address: ContractAddesses.AVAX_MARKET_MAINNET, functionName: 'Bazaar', args: [itemId] })
    if (!itemId) {
      return;
    }

    try {
      await writeContract(wagmiConfig, {
        abi: SPORE_MARKET_ABI,
        address: ContractAddesses.AVAX_MARKET_MAINNET,
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



  const isNetworkAvalanche = () => Boolean(chainId === AvaxChainId);



  async function startup() {
    setLoading(true);
    const get_nft_data = async () => {
      const endpoint = '/nft/get_data';
      const url = `${API_URL}${endpoint}`;
      const res = await axios.get(url); 
      setBazaar(res.data);
    }
    // const totalCharacters = 72;
    await get_nft_data();

    // const promises = [];
    // for (let i = 0; i <= totalCharacters - 1; i++) {
    //   const characterForSale: any = await readContract(wagmiConfig, { abi: SPORE_MARKET_ABI, address: ContractAddesses.AVAX_MARKET_MAINNET, functionName: 'Bazaar', args: [i] })
    //   promises.push(characterForSale);
    // }
    // // setBazaarPrices([]);
    // console.log("promises")
    // console.log(promises)
    
    // setBazaar(promises);
    // promises.forEach((values) => {
    //   if (values[1] !== 0n) {
    //     return setBazaarPrices((previousPrice) => {
    //       return [...previousPrice, values[1]];
    //     });
    //   }
    // });
    setLoading(false);
  }

  // useEffect(() => {
  //   if (bazaarPrices.length > 0) {
  //     setFloorPrice(Math.min(...bazaarPrices.map(el => Number(el))) / 10 ** 18);
  //   }
  // }, [bazaarPrices]);

  useEffect(() => {
    async function getInfos() {
      
      await get_floor_price();
      await get_last_sale();
      await get_total_volume();

      setInterval(async () => {
        await update_database();
        await get_floor_price();
        await get_last_sale();
        await get_total_volume();
      }
        , 6000000);
    }
    getInfos();
    }, []);


  const get_floor_price = async () => {
    const endpoint = '/nft/get_floor_price';
    const url = `${API_URL}${endpoint}`;
    const res = await axios.get(url); 
    setFloorPrice(res.data.floor_price);
  }

  const get_last_sale = async () => {
    const endpoint = '/nft/get_last_sale';
    const url = `${API_URL}${endpoint}`;
    const res = await axios.get(url); 
    setLastSale(res.data.last_sale);
  }

  const get_total_volume = async () => {
    const endpoint = '/nft/get_total_volume';
    const url = `${API_URL}${endpoint}`;
    const res = await axios.get(url); 
    setTotalVolume(res.data.total_volume);
  }

  const update_database = async () => {
    const endpoint = '/nft/update_nft_db';
    const url = `${API_URL}${endpoint}`;
    await axios.get(url); 
  }


  const getBalance = async () => {
    if (!address) {
      console.log('No address provided');
      return;
    }
    //We take the first address in the array of addresses and display it
    const _balance = await readContract(wagmiConfig, { abi: SPORE_MARKET_ABI, address: ContractAddesses.AVAX_MARKET_MAINNET, functionName: 'balanceOf', args: [address] })
    const tokensOfOwnerTemp = await readContract(wagmiConfig, { abi: SPORE_MARKET_ABI, address: ContractAddesses.AVAX_MARKET_MAINNET, functionName: 'tokensOfOwner', args: [address] })
    setBalance(_balance as number);
    setTokensOfOwner(tokensOfOwnerTemp as any);
  };

  useEffect(() => {
    startup();
  }, []);

  useEffect(() => {
    getBalance();
    // eslint-disable-next-line
  }, [address]);

  const Metadata = () => (
    <Helmet>
      <title>Spore NFT Marketplace - Spore</title>
      <meta
        name='description'
        content='Spore™ is an NFT platform on the Avalanche network and the developer of the hyperdeflationary SPORE currency.'
      />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );

  function formatNumber(num:any) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  }

  return (
    <>
      <Metadata />
      <div className='container information overflow-hidden position-relative'>
        <MyParticles />
        <h2 className='feature pb-4 py-5 text-center'>Spore NFT Marketplace</h2>

        <div className='row pb-5'>
          <div className='col-md-4'>
            <MarketStat>
              <span>Last traded price:</span>
              <h4>
                {formatNumber(lastSale)}{' '}
                <img
                  className='mr-2'
                  id='cur-logo'
                  height='28px'
                  width='28px'
                  src='avalanche-logo.png'
                  alt='Avalanche Network'></img>
              </h4>
            </MarketStat>
          </div>

          <div className='col-md-4'>
            <MarketStat>
              <span>Floor Price:</span>
              <h4>
                {formatNumber(floorPrice)}{' '}
                <img
                  className='mr-2'
                  id='cur-logo'
                  height='28px'
                  width='28px'
                  src='avalanche-logo.png'
                  alt='Avalanche Network'></img>
              </h4>
            </MarketStat>
          </div>

          <div className='col-md-4'>
            <MarketStat>
              <span>Total volume:</span>
              <h4>
                {formatNumber(totalVolume)}{' '}
                <img
                  className='mr-2'
                  id='cur-logo'
                  height='28px'
                  width='28px'
                  src='avalanche-logo.png'
                  alt='Avalanche Network'></img>
              </h4>
            </MarketStat>
          </div>
        </div>
      </div>

      <section className='bg-white-darker'>
        <div className='container information py-5'>
          <ConnectButton />
          <div className='row py-5'>
            <div className='col-md-12'>
              <div className='row pb-5'>
                {loading && <div className='loader'> Loading...</div>}
                {!loading && (
                  <MarketPlaceView
                    bazaar={bazaar}
                    onSelected={(nftId: number) => setItemId(nftId)}
                  />
                )}
              </div>
              <div className='input-group'>
                <input
                  type='text'
                  id='_approveFee'
                  value={approveFee}
                  onChange={(event: any) => setApproveFee(event.target.value)}
                  className='form-control'
                />
                <div className='input-group-append'>
                  <button disabled={chainId !== AvaxChainId} onClick={approve} className='btn btn-primary'>
                    Approve Fee
                  </button>
                </div>
              </div>
              <p className='text-muted'>
                <b>*Note: </b>Default is 10 million SPORE, that will be burned
                whenever any NFT is bought.
              </p>
              <div className='input-group'>
                <input
                  id='_tokenID'
                  type='number'
                  value={itemId}
                  readOnly={false}
                  onChange={(event: any) => setItemId(event.target.value)}
                  placeholder='NFT_ID (ex: 0)'
                  className='form-control'
                />
                <div className='input-group-append'>
                  <button disabled={chainId !== AvaxChainId} onClick={NFTbuy} className='btn btn-primary'>
                    Buy NFT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {address ? (
        <section className='bg-white'>
          <div className='container informations py-5'>
            <div className='row py-5'>
              <div className='col-md-12 text-center'>
                <h2>
                  Your NFTs{' '}
                  <small className='text-muted font-italic'>
                    ({chainId ? balance : 0})
                  </small>
                </h2>
              </div>
              {isNetworkAvalanche() ? (
                <div className='row'>
                  {balance > 0n ? (
                    <ReturnTokenURI
                      tokensOfOwner={tokensOfOwner}
                      chainId={chainId}
                      address={address!}
                      onUpdate={getBalance}
                    />
                  ) : (
                    <> You dont own any NFTs yet! </>
                  )}
                </div>
              ) : (
                <div className='col-md-12 text-center'>
                  {' '}
                  <UnlockMetamask message='Wrong Network, please switch' />{' '}
                </div>
              )}
            </div>
          </div>
        </section>
      ) : (
        <InstallMetamask />
      )}
    </>
  );
};
export default NFT;