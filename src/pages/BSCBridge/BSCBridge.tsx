import React, { ChangeEvent, useState } from 'react';
import Web3 from 'web3';
//@ts-ignore
import { ethers } from 'ethers';

import './BSCBridge.scss';
import { useEffect } from 'react';
import { CardBridge, TransferButton } from './BSCBridge.style';
import { Helmet } from 'react-helmet';
import { AVAX_NETWORK_RPC } from '../../utils/constants';
import { AvaxBridgeABI, BscBridgeABI, SporeABI } from '../../utils/abis';

import AccountInfo from '../../components/Connect/Header';
import Web3Modal from 'web3modal';
import ConnectButton from '../../components/Connect/ConnectButton';
import { getChainData } from '../../utils/utilities';
// @ts-ignore
import WalletConnectProvider from '@walletconnect/web3-provider';

const docu = document as any;

function initWeb3(provider: any) {
  const web3: any = new Web3(provider);

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

const SporeAddress = '0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985';
const AvaxBridgeAdress = '0x1aFCEF48379ECad5a6D790cE85ad1c87458C0f07';
const SporeAddressBSC = '0x33A3d962955A3862C8093D1273344719f03cA17C';

const BSCBridge = () => {
  const [address, setAddress] = useState('');
  const [web3, setWeb3] = useState<any>({});
  const [connected, setConnected] = useState(false);
  const [chainId, setChainId] = useState(1);
  const [numberOfSporeAVAX, setNumberOfSporeAVAX] = useState(0);
  const [numberOfSporeBSC, setNumberOfSporeBSC] = useState(0);
  const [checkTenPercentageBSC, setCheckTenPercentageBSC] = useState(false);

  const feesBNB = 0.005;
  const feesAVAX = 0.03;

  const [sporeValue, setSporeValue] = useState('');

  const approve = async () => {
    if (!connected) return;
    if (sporeValue === '' || !Boolean(sporeValue)) {
      alert('Please enter a valid spore value');
      return;
    }
    const SporeContract = new web3.eth.Contract(SporeABI, SporeAddress);
    var amount = ethers.BigNumber.from(sporeValue).mul(10 ** 9);
    try {
      await SporeContract.methods
        .approve(AvaxBridgeAdress, amount)
        .send({ from: address, gasPrice: 225000000000 });
    } catch (error: any) {
      alert(error.message);
    }
  };

  const swapFromAVAX = async () => {
    if (!connected) return;
    if (sporeValue === '' || !Boolean(sporeValue)) {
      alert('Please enter a valid spore value');
      return;
    }
    const AvaxBridgeContract = new web3.eth.Contract(
      AvaxBridgeABI,
      AvaxBridgeAdress
    );
    var amount = ethers.BigNumber.from(sporeValue).mul(10 ** 9);
    var fees = ethers.BigNumber.from('30000000000000000');
    try {
      await AvaxBridgeContract.methods
        .burn(amount)
        .send({ from: address, gasPrice: 225000000000, value: fees });
    } catch (error: any) {
      alert(error.message);
    }
  };
  //7:38
  const swapFromBSC = async () => {
    if (!connected) return;
    console.log({ sporeValue });
    if (sporeValue === '' || !Boolean(sporeValue)) {
      alert('Please enter a valid spore value');
      return;
    }
    const BscBridgeAdress = '0x638E8FE7AD4D9C05735Ecb6b9c66013679276651';
    const BscBridgeContract = new web3.eth.Contract(
      BscBridgeABI,
      BscBridgeAdress
    );
    var amount = ethers.BigNumber.from(sporeValue).mul(10 ** 9);
    var fees = ethers.BigNumber.from('5000000000000000');
    try {
      if (docu.getElementById('checkbox').checked) {
        var percent = 10;
        await BscBridgeContract.methods
          .burnAndSwap(address, amount, percent)
          .send({ from: address, value: fees });
      } else {
        await BscBridgeContract.methods
          .burn(address, amount)
          .send({ from: address, value: fees });
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  const addBSCRPC = async () => {
    if (!connected) return;
    const chainId = '0x38';
    const chaindName = 'BSC';
    const nativeCurrency = {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18,
    };
    const rpcUrl = ['https://bsc-dataseed.binance.org/'];
    const blockExplorerUrl = ['https://bscscan.com'];
    const nid = web3.currentProvider.chainId;
    if (nid !== '0x38') {
      try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const wasAdded = await web3.currentProvider.sendAsync({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: chainId,
              chainName: chaindName,
              nativeCurrency: nativeCurrency,
              rpcUrls: rpcUrl,
              blockExplorerUrls: blockExplorerUrl, // A string url of the token logo
            },
          ],
        });

        if (wasAdded === null) {
          console.log('Thanks for your interest!');
        } else {
          console.log('Your loss!');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('You are on the BSC!');
    }
  };

  const addAVAXRPC = async () => {
    if (!connected) return;
    const chainId = '0xa86a';
    const chaindName = 'Avalanche';
    const nativeCurrency = {
      name: 'AVAX',
      symbol: 'AVAX',
      decimals: 18,
    };
    const rpcUrl = [AVAX_NETWORK_RPC];
    const blockExplorerUrl = ['https://cchain.explorer.avax.network/'];
    const nid = web3.currentProvider.chainId;
    if (nid !== '0xa86a') {
      try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const wasAdded = await web3.currentProvider.sendAsync({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: chainId,
              chainName: chaindName,
              nativeCurrency: nativeCurrency,
              rpcUrls: rpcUrl,
              blockExplorerUrls: blockExplorerUrl, // A string url of the token logo
            },
          ],
        });

        if (wasAdded === null) {
          console.log('Thanks for your interest!');
        } else {
          console.log('Your loss!');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('You are on the AVALANCHE!');
    }
  };

  const addSporeBSC = async () => {
    if (!connected) return;
    const tokenAddress = '0x33a3d962955a3862c8093d1273344719f03ca17c';
    const tokenSymbol = 'SPORE';
    const tokenDecimals = 9;
    const tokenImage =
      'https://raw.githubusercontent.com/sporeproject/spore-frontend/master/public/spore_256.png';
    const nid = web3.currentProvider.chainId;
    if (nid === '0x38') {
      try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const wasAdded = await web3.currentProvider.sendAsync({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20', // Initially only supports ERC20, but eventually more!
            options: {
              address: tokenAddress, // The address that the token is at.
              symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
              decimals: tokenDecimals, // The number of decimals in the token
              image: tokenImage, // A string url of the token logo
            },
          },
        });

        if (wasAdded) {
          console.log('Thanks for your interest!');
        } else {
          console.log('Your loss!');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('You are not on the BSC!');
    }
  };

  const addSporeAvalanche = async () => {
    if (!connected) return;
    const tokenAddress = '0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985';
    const tokenSymbol = 'SPORE';
    const tokenDecimals = 9;
    const tokenImage =
      'https://raw.githubusercontent.com/sporeproject/spore-frontend/master/public/spore_256.png';
    const nid = web3.currentProvider.chainId;
    if (nid === '0xa86a') {
      try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const wasAdded = await web3.currentProvider.sendAsync({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20', // Initially only supports ERC20, but eventually more!
            options: {
              address: tokenAddress, // The address that the token is at.
              symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
              decimals: tokenDecimals, // The number of decimals in the token
              image: tokenImage, // A string url of the token logo
            },
          },
        });

        if (wasAdded) {
          console.log('Thanks for your interest!');
        } else {
          console.log('Your loss!');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('You are not on the AVALANCHE!');
    }
  };

  const getSporeInWalletAVAX = async () => {
    const SporeContract = new web3.eth.Contract(SporeABI, SporeAddress);
    try {
      var spores = await SporeContract.methods.balanceOf(address).call();
      return spores;
    } catch (error) {
      return 0;
    }
  };

  const getSporeInWalletBSC = async () => {
    const SporeContract = new web3.eth.Contract(SporeABI, SporeAddressBSC);
    try {
      var spores = await SporeContract.methods.balanceOf(address).call();
      console.log({ spores });
      return spores;
    } catch (error) {
      console.log(error);
      return 0;
    }
  };

  const setMaxSporeAVAX = async () => {
    if (!connected) return;
    var maxSpores = await getSporeInWalletAVAX();
    const spore = maxSpores / 10 ** 9;
    setSporeValue(String(spore).split('.')[0]);
  };

  const setMaxSporeBSC = async () => {
    if (!connected) return;
    var maxSpores = await getSporeInWalletBSC();
    const spore = maxSpores / 10 ** 9;
    setSporeValue(String(spore).split('.')[0]);
  };

  const Metadata = () => (
    <Helmet>
      <title>Bridge - Spore</title>
      <meta
        name='description'
        content='Spore™ is an NFT platform on the Avalanche network and the developer of the hyperdeflationary SPORE currency.'
      />
      <meta name='keywords' content='Spore, NFT, Avalanche, BSC' />
    </Helmet>
  );

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
      console.log({ chainId });
      web3Modal.clearCachedProvider();
      web3Modal.toggleModal();
      onConnect();
    });
  };

  const onConnect = async () => {
    try {
      const provider = await web3Modal.connect();
      await subscribeProvider(provider);
      const web3: any = initWeb3(provider);
      const accounts = await web3.eth.getAccounts();
      const address = accounts[0];
      const chainId = await web3.eth.chainId();
      setWeb3(web3);
      setConnected(true);
      setAddress(address);
      if (Number(chainId) === 1) {
        setChainId(0xa86a);
        return;
      }
      setChainId(chainId);
    } catch (error) {
      console.log('error', error);
    }
  };

  const web3Modal = new Web3Modal({
    network: getNetwork(),
    cacheProvider: true,
    providerOptions: getProviderOptions(),
  });

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      onConnect();
    }
    // eslint-disable-next-line
  }, []);

  async function getMaxSporeCountInBalances() {
    if (isChainIdAvalanche()) {
      var numberOfSporeAVAX = (await getSporeInWalletAVAX()) / 10 ** 9;
      setNumberOfSporeAVAX(numberOfSporeAVAX);
    } else {
      var numberOfSporeBSC = (await getSporeInWalletBSC()) / 10 ** 9;
      setNumberOfSporeBSC(numberOfSporeBSC);
    }
  }

  const isChainIdAvalanche = () => chainId > 431;

  useEffect(() => {
    if (web3 && address && connected) {
      getMaxSporeCountInBalances();
    }
    // eslint-disable-next-line
  }, [web3, address, chainId, connected]);

  return (
    <>
      <Metadata />
      <div className='container py-5' id='bridge'>
        <div className='row py-5'>
          <div className='col-lg-12'>
            <div className='row'>
              <div className='col-lg-8'>
                <h2>AVALANCHE / BSC SPORE BRIDGE</h2>
              </div>
              <div className='col-lg-12 text-right'>
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
              </div>
            </div>
            <div className='wrapBridge pt-2'>
              <div className='row rowBridge'>
                {isChainIdAvalanche() && (
                  <div className='col-lg-6 col-coin pr-lg-0'>
                    <CardBridge
                      type='avalanche'
                      className='card px-lg-5 h-100 avalanche'>
                      <div className='card-body'>
                        <h5 className='card-title'>
                          <span>FROM</span> Avalanche{' '}
                        </h5>
                        <p className='card-text'>
                          Balance : {numberOfSporeAVAX}
                        </p>
                        <div className='input-group'>
                          <input
                            type='text'
                            className='form-control'
                            id='spores'
                            placeholder='0.0'
                            value={sporeValue}
                            onChange={(event: ChangeEvent<HTMLInputElement>) =>
                              setSporeValue(event.target.value)
                            }
                          />
                          <div className='input-group-append'>
                            <button
                              className='btn btn-outline-secondary white'
                              onClick={setMaxSporeAVAX}
                              disabled={!connected}
                              type='button'>
                              MAX
                            </button>
                          </div>
                        </div>
                        <div className='offset-lg-3 col-lg-6 text-center py-1'>
                          <button
                            onClick={approve}
                            disabled={!connected}
                            className='btn btn-primary'
                            id='approve-btn'>
                            APPROVE
                          </button>
                        </div>
                      </div>
                    </CardBridge>
                  </div>
                )}
                {!isChainIdAvalanche() && (
                  <div className='col-lg-6 col-coin pr-lg-0'>
                    <CardBridge
                      type='avalanche'
                      className='card px-lg-5 h-100 avalanche'
                      id='reverted-1'>
                      <div className='card-body'>
                        <h5 className='card-title'>
                          <span>TO </span> Avalanche{' '}
                        </h5>
                      </div>
                    </CardBridge>
                  </div>
                )}
                <div
                  className={`arrow ${isChainIdAvalanche() ? 'avax' : 'bsc'}`}>
                  <button
                    className='btn btn-outline-light'
                    onClick={async () => {
                      if (!connected) {
                        alert('Plase connect your wallet');
                        return;
                      }
                      if (isChainIdAvalanche()) {
                        await addBSCRPC();
                      } else {
                        await addAVAXRPC();
                      }
                      setSporeValue('');
                    }}>
                    {isChainIdAvalanche() ? (
                      <i className='fa fa-arrow-right'></i>
                    ) : (
                      <i className='fa fa-arrow-left'></i>
                    )}
                  </button>
                </div>
                {isChainIdAvalanche() && (
                  <div className='col-lg-6 col-coin pl-lg-0' id='reverted-2'>
                    <CardBridge className='card px-lg-5 h-100 binance'>
                      <div className='card-body'>
                        <h5 className='card-title'>
                          <span>TO</span> Binance Smart Chain{' '}
                        </h5>
                      </div>
                    </CardBridge>
                  </div>
                )}
                <div className='col-lg-6 col-coin pl-lg-0'>
                  {!isChainIdAvalanche() && (
                    <CardBridge className='card px-lg-5 h-100 binance'>
                      <div className='card-body'>
                        <h5 className='card-title'>
                          <span>FROM</span> Binance Smart Chain{' '}
                        </h5>
                        <p className='card-text'>
                          Balance : <span id='balance'>{numberOfSporeBSC}</span>
                        </p>
                        <div className='input-group'>
                          <input
                            type='text'
                            className='form-control'
                            id='spores2'
                            placeholder='0.0'
                            value={sporeValue}
                            onChange={(event: ChangeEvent<HTMLInputElement>) =>
                              setSporeValue(event.target.value)
                            }
                          />
                          <div className='input-group-append'>
                            <button
                              className='btn btn-outline-secondary white'
                              type='button'
                              disabled={!connected}
                              onClick={setMaxSporeBSC}>
                              MAX
                            </button>
                          </div>
                        </div>
                        <label className='py-2'>
                          <input
                            type='checkbox'
                            id='checkbox'
                            name='pay-fees-spore'
                            value='1'
                            checked={checkTenPercentageBSC}
                            onChange={() => {
                              setCheckTenPercentageBSC((val) => !val);
                            }}
                          />{' '}
                          Swap some SPORE for AVAX (10%){' '}
                        </label>
                      </div>
                    </CardBridge>
                  )}
                </div>
              </div>
              <div className='row'>
                {isChainIdAvalanche() ? (
                  <div className='col-lg-12 text-center py-4 col-coin'>
                    <div className='pb-2'>Transfer fees : {feesAVAX} AVAX</div>
                    <TransferButton
                      disabled={!connected}
                      onClick={swapFromAVAX}
                      className='btn btn-primary btn-lg'
                      id='swap-btn'>
                      TRANSFER
                    </TransferButton>
                  </div>
                ) : (
                  <div className='col-lg-12 text-center py-4 col-coin'>
                    <div className='pb-2'>Transfer fees : {feesBNB} BNB</div>
                    <TransferButton
                      onClick={swapFromBSC}
                      disabled={!connected}
                      className='btn btn-primary btn-lg'
                      id='swap-btn'>
                      TRANSFER
                    </TransferButton>
                  </div>
                )}
              </div>
            </div>

            <div className='container'>
              <div className='offset-lg-3 col-lg-6 text-center py-4'>
                <p className='text-left'>
                  <p>
                    <b>Note </b>: The Bridge may encounter occasional delays
                    depending on network conditions.
                  </p>
                  <p>
                    If you encounter issues, ask for help in our{' '}
                    <a href='https://telegram.me/sporefinanceofficial'>
                      Telegram
                    </a>{' '}
                    group.{' '}
                  </p>
                </p>
              </div>
            </div>

            <div className='container'>
              <div className='offset-lg-3 col-lg-6 text-center py-4'>
                <h3>Trust Wallet Steps 😎 </h3>

                <p className='text-left'>
                  <p>
                    <b>Step 1 </b>- Install{' '}
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href='https://metamask.io'>
                      MetaMask{' '}
                    </a>{' '}
                    🦊 extension - and import your 12 words Recovery Phrase from
                    trustwallet
                  </p>
                  <p>
                    <b>Step 2 </b>- Add{' '}
                    <button
                      onClick={addAVAXRPC}
                      className='btn btn-primary'
                      id='addAVAXRPC'>
                      {' '}
                      Avalanche🔺 Network
                    </button>{' '}
                    and <br></br>
                    <br></br>
                    <button
                      onClick={addSporeAvalanche}
                      className='btn btn-primary '
                      id='addAvalanche'>
                      {' '}
                      add Avalanche 🔺 Spore🍄
                    </button>
                  </p>
                  <p>
                    <b>Step 3</b>- Add{' '}
                    <button
                      onClick={addBSCRPC}
                      className='btn btn-primary'
                      id='addBSCRPC'>
                      {' '}
                      BSC 🔶 Network{' '}
                    </button>{' '}
                    and{' '}
                    <button
                      onClick={addSporeBSC}
                      className='btn btn-primary'
                      id='addBSC'>
                      {' '}
                      add BSC 🔶 Spore 🍄
                    </button>
                    <br></br> <br></br>
                  </p>

                  <p>
                    <b>Step 4 </b>- Refresh the page click on max and transfer{' '}
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BSCBridge;
