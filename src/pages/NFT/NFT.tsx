import Web3 from 'web3';
import ReturnTokenURI from './ReturnTokenURI';
import './NFT.scss';
import { AVAX_SPORE_ABI, SPORE_MARKET_ABI } from '../../utils/SporeAbis';
import { useState, useEffect } from 'react';
import { ContractAddesses } from '../../utils/addresses';
import { approveContract } from '../../utils/wallet';
import { MarketPlaceView } from './MarketPlace/MarketPlace';
import { ethers } from 'ethers';
import axios from 'axios';
import { API_COVALENTHQ, AVAX_NETWORK_RPC } from '../../utils/constants';
import { MarketStat } from './NFT.style';
import MyParticles from '../../components/Particles/Particles';
import UnlockMetamask from '../../components/UnlockMetamask/UnlockMetamask';
import InstallMetamask from '../../components/InstallMetamask/InstallMetamask';
import { Helmet } from 'react-helmet';
import AccountInfo from '../../components/Connect/Header';
import Web3Modal from 'web3modal';
import ConnectButton from '../../components/Connect/ConnectButton';
import { getChainData } from '../../utils/utilities';
// @ts-ignore
import WalletConnectProvider from '@walletconnect/web3-provider';

const win = window as any;
win.ava = new Web3(AVAX_NETWORK_RPC);

const SporeMarketv2 = new win.ava.eth.Contract(
  SPORE_MARKET_ABI,
  ContractAddesses.AVAX_MARKET_MAINNET
);

function initWeb3(provider: any) {
  const web3: any = new Web3(provider);
  win.web3 = web3;
  web3.eth.extend({
    methods: [
      {
        name: 'chainId',
        call: 'eth_chainId',
        outputFormatter: web3.utils.hexToNumber,
      },
    ],
  });
  return web3;
}

const NFT = (props: any) => {

  const [bazaar, setBazaar] = useState(new Array<any>());
  const [buys, setBuys] = useState(new Array<any>());
  const [tokensOfOwner, setTokensOfOwner] = useState(new Array<any>());
  const [balance, setBalance] = useState(0);
  const [itemId, setItemId] = useState<number>();
  const [buysQuantity, setBuysQuantity] = useState(0);
  const [sumTotal, setSumtotal] = useState(0);
  const [bazaarPrices, setBazaarPrices] = useState(new Array<any>());
  const [floorPrice, setFloorPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [approveFee, setApproveFee] = useState(100000000000);

  /* ----------------------------------------------------------------**/

  const [address, setAddress] = useState('');
  const [web3, setWeb3] = useState<any>(null);
  const [connected, setConnected] = useState(false);
  const [chainId, setChainId] = useState(1);
  /* ----------------------------------------------------------------**/

  async function approve() {
    if (!connected) {
      alert('Please connect before your walllet');
      return;
    }

    const SporeAddress = ContractAddesses.AVAX_SPORE_MAINNET;
    const SporeNFTMarketaddress = ContractAddesses.AVAX_MARKET_MAINNET;
    var amount = ethers.BigNumber.from(approveFee).mul(10 ** 9);
    await approveContract(
      SporeAddress,
      AVAX_SPORE_ABI,
      SporeNFTMarketaddress,
      amount
    ).catch((error) => {
      alert(error.message);
    });
  }

  async function NFTbuy() {
    if (!isNetworkAvalanche()) {
      alert('Please connect to Avalanche Network before buy');
      return;
    }
    if (!connected || !address) {
      alert('Please connect before your walllet');
      return;
    }

    const SporeMarketv1 = new web3.eth.Contract(
      SPORE_MARKET_ABI,
      ContractAddesses.AVAX_MARKET_MAINNET
    );
    const bazaar = await SporeMarketv1.methods.Bazaar(itemId).call();
    if (!itemId) {
      return;
    }

    try {
      await SporeMarketv1.methods
        .buy(itemId)
        .send({ from: address, gasPrice: 225000000000, value: bazaar.price });
    } catch (error: any) {
      alert(error.message);
    }
  }

  const getBuysData = async () => {
    await axios
      .get(API_COVALENTHQ)
      .then(async (res) => {
        const abiDecoder = require('abi-decoder'); // NodeJS
        abiDecoder.addABI(SPORE_MARKET_ABI);
        await Promise.all(
          res.data.data.items.map(async (item: any) => {
            const transaction = await win.ava.eth.getTransaction(item.tx_hash);
            const decodedData = abiDecoder.decodeMethod(transaction.input);
            if (decodedData !== undefined && decodedData.name === 'buy') {
              if (transaction.value !== '0') {
                setBuys((previousBuys) => {
                  return [...previousBuys, transaction.value];
                });
              }
            }
          })
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const isNetworkAvalanche = () => Boolean(chainId === 0xa86a);

  async function startup() {
    setLoading(true);
    const totalCharacters = 72;

    const promises = [];
    for (let i = 0; i <= totalCharacters - 1; i++) {
      const characterForSale = await SporeMarketv2.methods.Bazaar(i).call();
      promises.push(characterForSale);
    }

    Promise.all(promises).then((values) => {
      setBazaar(values);
      values.forEach((value) => {
        if (value.price !== '0') {
          return setBazaarPrices((previousPrice) => {
            return [...previousPrice, value.price];
          });
        }
      });
      setLoading(false);
    });
  }

  useEffect(() => {
    if (bazaarPrices.length > 0) {
      setFloorPrice(Math.min(...bazaarPrices) / 10 ** 18);
    }
  }, [bazaarPrices]);


  useEffect(() => {
    let sum: number = 43.5;
    buys.forEach((a) => (sum += +a / 10 ** 18));
    setSumtotal(sum);

    const _buysQuantity = buys[buys.length - 1] / 10 ** 18;
    setBuysQuantity(_buysQuantity);
  }, [buys]);

  const getNetwork = () => getChainData(chainId).network;

  const resetApp = async () => {
    if (web3 && web3.currentProvider && web3.currentProvider.close) {
      await web3.currentProvider.close();
    }
    await web3Modal.clearCachedProvider();
    setWeb3(null);
    setAddress('');
    setChainId(1);
    setConnected(false);
  };

  const subscribeProvider = async (provider: any) => {
    if (!provider.on) {
      return;
    }

    provider.on('close', () => resetApp());
    provider.on('accountsChanged', async (accounts: string[]) => {
      setAddress(accounts[0]);
    });
    provider.on('chainChanged', async (chainId: number) => {
      setChainId(Number(chainId));
      web3Modal.clearCachedProvider();
      web3Modal.toggleModal();
      onConnect();
    });
  };

  const getBalance = async () => {
    const SporeMarketv1 = new web3.eth.Contract(
      SPORE_MARKET_ABI,
      ContractAddesses.AVAX_MARKET_MAINNET
    );
    //We take the first address in the array of addresses and display it
    const _balance = await SporeMarketv1.methods.balanceOf(address).call();
    const tokensOfOwnerTemp = await SporeMarketv1.methods
      .tokensOfOwner(address)
      .call();
    setBalance(_balance);
    setTokensOfOwner(tokensOfOwnerTemp);
  };

  const onConnect = async () => {
    try {
      const provider = await web3Modal.connect();
      await subscribeProvider(provider);
      const web3: any = initWeb3(provider);
      const accounts = await web3.eth.getAccounts();
      const address = accounts[0];
      const chainId = await web3.eth.chainId();
      if (Boolean(address)) {
        setWeb3(web3);
        setConnected(Boolean(address));
        setAddress(address);
        if (Number(chainId) === 1) {
          setChainId(0xa86a);
          return;
        }
        setChainId(chainId);
      } else {
        resetApp();
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const getProviderOptions = () => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: '3dd9be7637c24ef6938fad45f832b2ce',
          rpc: {
            56: 'https://bsc-dataseed.binance.org/',
            97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
            43114: 'https://api.avax.network/ext/bc/C/rpc',
          },
        },
      },
    };
    return providerOptions;
  };

  const web3Modal: Web3Modal = new Web3Modal({
    network: getNetwork(),
    cacheProvider: true,
    providerOptions: getProviderOptions(),
  });

  useEffect(() => {
    if (web3Modal.cachedProvider) onConnect();
    getBuysData();
    startup();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (connected && address) getBalance();
    // eslint-disable-next-line
  }, [connected, address]);

  const Metadata = () => (
    <Helmet>
      <title>Spore NFT Marketplace - Spore</title>
      <meta
        name='description'
        content='Spore™ is an NFT platform on the Avalanche network and the developer of the hyperdeflationary SPORE currency.'
      />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"/>

      
    </Helmet>
  );

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
                {buysQuantity || 0}{' '}
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
                {floorPrice}{' '}
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
                {sumTotal}{' '}
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
          <AccountInfo
            connected={connected}
            address={address}
            chainId={chainId}
            killSession={resetApp}>
            <>
              {!connected ? (
                <ConnectButton onClick={() => onConnect()} />
              ) : null}
            </>
          </AccountInfo>
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
                  <button onClick={approve} className='btn btn-primary'>
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
                  <button onClick={NFTbuy} className='btn btn-primary'>
                    Buy NFT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {web3 ? (
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
                  {balance > 0 ? (
                    <ReturnTokenURI
                      tokensOfOwner={tokensOfOwner}
                      chainId={chainId}
                      address={address}
                      web3={web3}
                      connected={connected}
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