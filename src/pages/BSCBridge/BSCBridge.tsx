import { ChangeEvent, useEffect, useState } from 'react';
//@ts-ignore
import { ethers, toBigInt } from 'ethers';
import './BSCBridge.scss';
import { CardBridge, TransferButton } from './BSCBridge.style';
import { Helmet } from 'react-helmet';
import { AvaxBridgeABI, BscBridgeABI, SporeABI } from '../../utils/abis';
// @ts-ignore
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useChainId } from 'wagmi';
import { readContract, writeContract, switchChain } from "@wagmi/core";
import { wagmiConfig } from '../../wagmi-config';

const docu = document as any;

const SporeAddress = '0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985';
const AvaxBridgeAdress = '0x1aFCEF48379ECad5a6D790cE85ad1c87458C0f07';
const SporeAddressBSC = '0x33A3d962955A3862C8093D1273344719f03cA17C';

const BSCChainId = 56;
const AvaxChainId = 43114;

const BSCBridge = () => {
  const { address: userAddress } = useAccount();
  const chainId = useChainId();
  const SporeAddressByChainId = chainId === AvaxChainId ? SporeAddress : SporeAddressBSC;
  const [balanceOfSpore, setBalanceOfSpore] = useState(0n);
  const [checkTenPercentageBSC, setCheckTenPercentageBSC] = useState(false);

  const feesBNB = 0.005;
  const feesAVAX = 0.03;

  const [sporeValue, setSporeValue] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        const balance = await readContract(wagmiConfig, { abi: SporeABI, address: SporeAddressByChainId, functionName: 'balanceOf', args: [userAddress] })
        setBalanceOfSpore(balance as bigint / 10n ** 9n);
      } catch (error) {
        console.log(error);
      }
    }
    load();
  }, [chainId, userAddress])


  const approve = async () => {
    if (sporeValue === '' || !Boolean(sporeValue)) {
      alert('Please enter a valid spore value');
      return;
    }
    var amount = BigInt(sporeValue) * 10n ** 9n;
    try {
      await writeContract(wagmiConfig, {
        abi: SporeABI,
        address: SporeAddress,
        functionName: 'approve',
        args: [
          AvaxBridgeAdress,
          amount
        ],
      })
    } catch (error: any) {
      alert(error.message);
    }
  };

  const swapFromAVAX = async () => {
    if (sporeValue === '' || !Boolean(sporeValue)) {
      alert('Please enter a valid spore value');
      return;
    }

    var amount = BigInt(sporeValue) * 10n ** 9n;
    var fees = 30000000000000000n;
    try {
      await writeContract(wagmiConfig, {
        abi: AvaxBridgeABI,
        address: AvaxBridgeAdress,
        functionName: 'burn',
        args: [
          amount
        ],
        value: fees,
      })
    } catch (error: any) {
      alert(error.message);
    }
  };
  //7:38
  const swapFromBSC = async () => {
    console.log({ sporeValue });
    if (sporeValue === '' || !Boolean(sporeValue)) {
      alert('Please enter a valid spore value');
      return;
    }
    const BscBridgeAdress = '0x638E8FE7AD4D9C05735Ecb6b9c66013679276651';
    var amount = BigInt(sporeValue) * 10n ** 9n;
    var fees = 5000000000000000n;
    try {
      if (docu.getElementById('checkbox').checked) {
        var percent = 10;

        await writeContract(wagmiConfig, {
          abi: BscBridgeABI,
          address: BscBridgeAdress,
          functionName: 'burnAndSwap',
          args: [
            userAddress,
            amount,
            percent
          ],
          value: fees,
        })
      } else {
        await writeContract(wagmiConfig, {
          abi: BscBridgeABI,
          address: BscBridgeAdress,
          functionName: 'burn',
          args: [
            userAddress,
            amount
          ],
          value: fees,
        })
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  // const addBSCRPC = async () => {
  //   const chainId = '0x38';
  //   const chaindName = 'BSC';
  //   const nativeCurrency = {
  //     name: 'BNB',
  //     symbol: 'BNB',
  //     decimals: 18,
  //   };
  //   const rpcUrl = ['https://bsc-dataseed.binance.org/'];
  //   const blockExplorerUrl = ['https://bscscan.com'];
  //   const nid = provider.chainId;
  //   if (nid !== '0x38') {
  //     try {
  //       // wasAdded is a boolean. Like any RPC method, an error may be thrown.
  //       const wasAdded = await provider.sendAsync({
  //         method: 'wallet_addEthereumChain',
  //         params: [
  //           {
  //             chainId: chainId,
  //             chainName: chaindName,
  //             nativeCurrency: nativeCurrency,
  //             rpcUrls: rpcUrl,
  //             blockExplorerUrls: blockExplorerUrl, // A string url of the token logo
  //           },
  //         ],
  //       });

  //       if (wasAdded === null) {
  //         console.log('Thanks for your interest!');
  //       } else {
  //         console.log('Your loss!');
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } else {
  //     console.log('You are on the BSC!');
  //   }
  // };

  // const addAVAXRPC = async () => {
  //   if (!connected) return;
  //   const chainId = '0xa86a';
  //   const chaindName = 'Avalanche';
  //   const nativeCurrency = {
  //     name: 'AVAX',
  //     symbol: 'AVAX',
  //     decimals: 18,
  //   };
  //   const rpcUrl = [AVAX_NETWORK_RPC];
  //   const blockExplorerUrl = ['https://cchain.explorer.avax.network/'];
  //   const nid = provider.chainId;
  //   if (nid !== '0xa86a') {
  //     try {
  //       // wasAdded is a boolean. Like any RPC method, an error may be thrown.
  //       const wasAdded = await provider.sendAsync({
  //         method: 'wallet_addEthereumChain',
  //         params: [
  //           {
  //             chainId: chainId,
  //             chainName: chaindName,
  //             nativeCurrency: nativeCurrency,
  //             rpcUrls: rpcUrl,
  //             blockExplorerUrls: blockExplorerUrl, // A string url of the token logo
  //           },
  //         ],
  //       });

  //       if (wasAdded === null) {
  //         console.log('Thanks for your interest!');
  //       } else {
  //         console.log('Your loss!');
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } else {
  //     console.log('You are on the AVALANCHE!');
  //   }
  // };

  // const addSporeBSC = async () => {
  //   if (!connected) return;
  //   const tokenAddress = '0x33a3d962955a3862c8093d1273344719f03ca17c';
  //   const tokenSymbol = 'SPORE';
  //   const tokenDecimals = 9;
  //   const tokenImage =
  //     'https://raw.githubusercontent.com/sporeproject/spore-frontend/master/public/spore_256.png';
  //   const nid = provider.chainId;
  //   if (nid === '0x38') {
  //     try {
  //       // wasAdded is a boolean. Like any RPC method, an error may be thrown.
  //       const wasAdded = await provider.sendAsync({
  //         method: 'wallet_watchAsset',
  //         params: {
  //           type: 'ERC20', // Initially only supports ERC20, but eventually more!
  //           options: {
  //             address: tokenAddress, // The address that the token is at.
  //             symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
  //             decimals: tokenDecimals, // The number of decimals in the token
  //             image: tokenImage, // A string url of the token logo
  //           },
  //         },
  //       });

  //       if (wasAdded) {
  //         console.log('Thanks for your interest!');
  //       } else {
  //         console.log('Your loss!');
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } else {
  //     console.log('You are not on the BSC!');
  //   }
  // };

  // const addSporeAvalanche = async () => {
  //   if (!connected) return;
  //   const tokenAddress = '0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985';
  //   const tokenSymbol = 'SPORE';
  //   const tokenDecimals = 9;
  //   const tokenImage =
  //     'https://raw.githubusercontent.com/sporeproject/spore-frontend/master/public/spore_256.png';
  //   const nid = provider.chainId;
  //   if (nid === '0xa86a') {
  //     try {
  //       // wasAdded is a boolean. Like any RPC method, an error may be thrown.
  //       const wasAdded = await provider.sendAsync({
  //         method: 'wallet_watchAsset',
  //         params: {
  //           type: 'ERC20', // Initially only supports ERC20, but eventually more!
  //           options: {
  //             address: tokenAddress, // The address that the token is at.
  //             symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
  //             decimals: tokenDecimals, // The number of decimals in the token
  //             image: tokenImage, // A string url of the token logo
  //           },
  //         },
  //       });

  //       if (wasAdded) {
  //         console.log('Thanks for your interest!');
  //       } else {
  //         console.log('Your loss!');
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } else {
  //     console.log('You are not on the AVALANCHE!');
  //   }
  // };

  const setMaxSpore = async () => {
    setSporeValue(String(balanceOfSpore).split('.')[0]);
  };

  const Metadata = () => (
    <Helmet>
      <title>Spore NFT Marketplace - Spore</title>
      <meta
        name='description'
        content='Spore is a decentralized global community and the developer of the hyperdeflationary SPORE currency.'
      />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );

  const isChainIdAvalanche = () => chainId > 431;

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
                <ConnectButton />
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
                        <div className='card-text'>
                          Balance : {Number(balanceOfSpore)}
                        </div>
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
                              onClick={setMaxSpore}
                              disabled={!userAddress}
                              type='button'>
                              MAX
                            </button>
                          </div>
                        </div>
                        <div className='offset-lg-3 col-lg-6 text-center py-1'>
                          <button
                            onClick={approve}
                            disabled={!userAddress}
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
                      if (!userAddress) {
                        alert('Plase connect your wallet');
                        return;
                      }
                      if (switchChain) {
                        if (isChainIdAvalanche()) {
                          switchChain(wagmiConfig, { chainId: BSCChainId });
                        } else {
                          switchChain(wagmiConfig, { chainId: AvaxChainId });
                        }
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
                        <div className='card-text'>
                          Balance : <span id='balance'>{Number(balanceOfSpore)}</span>
                        </div>
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
                              disabled={!userAddress}
                              onClick={setMaxSpore}>
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
                      disabled={!userAddress}
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
                      disabled={!userAddress}
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
                <div className='text-left'>
                  <div>
                    <b>Note </b>: The Bridge may encounter occasional delays
                    depending on network conditions.
                  </div>
                  <div>
                    If you encounter issues, ask for help in our{' '}
                    <a href='https://telegram.me/sporefinanceofficial'>
                      Telegram
                    </a>{' '}
                    group.{' '}
                  </div>
                </div>
              </div>
            </div>

            <div className='container'>
              <div className='offset-lg-3 col-lg-6 text-center py-4'>
                <h3>Trust wallet Steps 😎  </h3>



                <div className='text-left'>

                  <div><b>Step 1</b> - Enable Avalanche C-Chain AVAX  🔺 in Trustwallet

                  </div>
                  <div>
                    <b>Step 2</b> - Add SPORE token (Avalanche){' '}<br></br>
                    <ul>
                      <li>Network: Avalanche C-Chain</li>
                      <li>Contract Address: <br></br>0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985</li>
                      <li>Name: Spore</li>
                      <li>Symbol: SPORE</li>
                      <li>Decimals: 9</li>
                    </ul>


                  </div>

                  <div>
                    <b>Step 3 </b> - Connect to Bridge{' '}<br></br>
                    <ul>
                      <li>click connect button + select Trust</li>
                      <li>select BSC network + connect</li>
                    </ul>
                  </div>

                  <div>
                    <b>Step 4 </b> - Transfer SPORE{' '}<br></br>
                    <ul>
                      <li>set SPORE amount [MAX] </li>
                      <li>click Transfer</li>
                      <li>confirm transaction in Trustwallet</li>
                    </ul>
                    <div>
                      <b>Step 5</b> - Congratulations, you bridged your SPORE ;){' '}<br></br>

                    </div>


                  </div>
                </div>
              </div>
            </div>
            {/* 
            <div className='container'>
              <div className='offset-lg-3 col-lg-6 text-center py-4'>
                <h3>Metamask Steps 🦊 </h3>

                <div className='text-left'>
                  <div>
                    <b>Step 1 </b>- Use the Connect button on the top right{' '}
                    and choose to connect to <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href='https://metamask.io'>
                      MetaMask
                    </a>.
                  </div>
                  <div>
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
                  </div>
                  <div>
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
                  </div>

                  <div>
                    <b>Step 4 </b>- Refresh the page click on max and transfer{' '}
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div >
    </>
  );
};

export default BSCBridge;
