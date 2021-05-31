import Web3 from "web3";
import InstallMetamask from "../InstallMetamask";
import UnlockMetamask from "../UnlockMetamask";
import ReturnTokenURI from "./ReturnTokenURI";
import './NFT.css';
import { AVAX_SPORE_ABI, SPORE_MARKET_ABI } from '../../utils/SporeAbis';
import { useState, useEffect } from 'react';
import { ContractAddesses } from '../../utils/addresses';
import { approveContract } from '../../utils/wallet';
//import ReturnExternalURL from './ReturnExternalURL';
import { MarketPlaceView } from "./MarketPlace";
import { ethers } from "ethers";
const win = window as any
const docu = document as any

async function approve() {
    const SporeAddress = ContractAddesses.AVAX_SPORE_MAINNET;
    const SporeNFTMarketaddress = ContractAddesses.AVAX_MARKET_MAINNET;
    //const SporeContract = new win.web3.eth.Contract(AVAX_SPORE_ABI, SporeAddress);
    //var account = await win.web3.eth.getAccounts();
    //account = account[0];
    var amount = ethers.BigNumber.from(docu.getElementById("_approveFee").value).mul(10 ** 9);
    // try {
    //   await SporeContract.methods
    //     .approve(SporeNFTMarketaddress, amount)
    //     .send({ from: account, gasPrice: 225000000000 });
    // } catch (error) {
    //   alert(error);
    // }
    await approveContract(SporeAddress, AVAX_SPORE_ABI, SporeNFTMarketaddress, amount)
  }
  
  async function claim() {
    const SporeMarketv1 = new win.web3.eth.Contract(
      SPORE_MARKET_ABI,
      ContractAddesses.AVAX_MARKET_MAINNET
    );
    var account = await win.web3.eth.getAccounts();
    account = account[0];
    try {
      await SporeMarketv1.methods
        .claim()
        .send({ from: account, gasPrice: 225000000000 });
    } catch (error) {
      alert(error);
    }
  }

const NFTbsc = (props: any) => {
    const [tokenCounter, setTokenCounter] = useState(new Array<any>());
    //const [totalCharacters, setTotalCharacters] = useState(72);
    const [totalSupplyLeft, setTotalSupplyLeft] = useState(0);
    const [tokensOfOwner, setTokensOfOwner] = useState(new Array<any>());
    const [balance, setBalance] = useState(0);
    //const [isnetworkID, setisnetworkID] = useState({});
    const [web3Provider, setweb3Provider] = useState({});
    console.log(tokenCounter,web3Provider )
    const [isWeb3 , setisWeb3 ] = useState({});
  
  
    useEffect(() => {
      async function startup() {
  
        const totalCharacters = 72
        
        let web3 = win.web3;
        if (win.ethereum) {
          win.web3 = new Web3(win.ethereum);
          win.ethereum.enable();
          console.log(win.ethereum);
        }
        if (typeof web3 !== "undefined") {
          // Use Mist/MetaMask's provider
          setweb3Provider({ web3Provider: web3.currentProvider});
          web3 = new Web3(web3.currentProvider);
        } else {
          setisWeb3({ isWeb3: true});
        }
        if (web3.currentProvider.chainId === "0xa86a") {
          const isnetworkID = true;
          console.log("webProvider:", isnetworkID);
        } else {
          const isnetworkID = false;
          console.log("webProvider:", isnetworkID);
        };
        
  
        const SporeMarketv1 = new win.web3.eth.Contract(
          SPORE_MARKET_ABI,
          ContractAddesses.AVAX_MARKET_MAINNET
        );
  
        const accounts = await win.ethereum.request({ method: "eth_accounts" });
        //We take the first address in the array of addresses and display it
        const account = accounts[0];
        console.log(accounts);
  
        const balance = await SporeMarketv1.methods.balanceOf(account).call();
        const tokensOfOwnerTemp = await SporeMarketv1.methods
          .tokensOfOwner(account)
          .call();
        const totalSupply = await SporeMarketv1.methods.totalSupply().call();
        console.log(tokensOfOwnerTemp);
        const tokenCounter = await SporeMarketv1.methods.tokenCounter;


        setTotalSupplyLeft(totalCharacters - totalSupply)
        setTokenCounter(tokenCounter)
        setBalance(balance)
        setTokensOfOwner(tokensOfOwnerTemp)

      }
      startup()
    }, [])
  
  
    var image: any;
  
    if (balance > 0) {
       image = <ReturnTokenURI tokensOfOwner={tokensOfOwner} />;
    } else {
       image = <> You dont own any NFTs yet! </>;
    }


if (isWeb3) {
    return (
        <>
        <div className='container information py-2'>
              <div className='row pb-5 py-2'>
                <div className='col-lg-12'>
                  <h2 className='feature pb-2 text-center'>
                    <span>BSC 1000 NFT Giveaway</span> 
                  </h2>
                  <h3 className="text-center pb-2">Thanks for believing in SPORE!</h3>
                  <div className="row">
                    <div className="col-lg-6 col-sm-12">
                      <div className="box-rounded">
                        <h4>Diamond Hands BSC Holder</h4>
                        <p>We are doing a little giveaway to reward you for surviving this crazy 
                            roller coaster of emotions called SPORE.
                        </p>
                        <p>1000 NFTs for people holding more than 1t (10^12) SPORE 
                            on BSC side. There is a very small proof of sacrifice...
                        </p>
                        <ul>
                          <li>First 500 NFTs: 1b each </li> 
                          <li>Last 500 NFTs:  5b each </li>  
                        </ul>
                        <p className='pt-4'>
                          Thanks to all our diamond hands holders. Big up to OzzyKyle
                          for helping us with the NFTs designs.

                          </p>
  
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <div className="box-rounded">
                        <h4>Rules for claiming</h4>
                        <ul>
                        <li>ONLY FOR BSC HOLDERS WITH MORE THAN 1t SPORE. </li> 
                        <li>After the public announcement, a timelock will be
                          activated allowing 24 hours to start claiming the NFTs. </li> 
                         <li>There are 2 designs to choose from: tipe 0 and tipe 1. Choose wisely because
                          you can only claim ONCE.</li> 
                        <li>
                          All SPORE used to mint the NFTs will go to the BSC BURN address.</li> 
                          </ul>
                      </div>
                    </div>
                  </div>
  
                </div>
              </div>
        </div>
        <section className="bg-white" id="claim">
              <div className="container py-5">
                <div className="row py-5">
                  <div className="col-md-12">
                    <div>
                      <h2 className="text-center">Choose your BSC NFT</h2>
                      <p className="mb-1">
                        <i>NFTs left to claim: {totalSupplyLeft}</i>
                      </p>
                      <div className="input-group mb-0">
                        <input
                          type="number"
                          id="_approveFee"
                          defaultValue="5000000000"
                          className="form-control"
                        />
                        <div className="input-group-append">
                          <button onClick={approve} className="btn btn-primary">Approve</button>
                        </div>
                      </div>
                      <p className="text-muted">
                        <b>*Note: </b> Approve first before claiming. Default 5b SPORE.
                      </p>
                      
                      <div className="mb-0">
                      <p className="mb-1">
                        <i>Choose your nft: 0, 1</i>
                      </p>
                      <p className="mb-1">
                      <div className="col-md-12 text-center">
                      
                      <div className="row py-5">
                            <img className="d-block center-block rounded shadow" src="/bscnft/0.png" alt="0" height="120" />
                            <img className="d-block center-block rounded shadow" src="/bscnft/1.png" alt="1" height="120" />
                        </div>
                      </div>
                      </p>
                      <p className="text-center mb-1">
                      <p className="mb-1">
                        <i>Input the number you want: 0, 1</i>
                      </p>
                      <div className="input-group mb-1">
                      
                        <input
                          type="number"
                          id="_chooseNFT"
                          className="form-control"
                        />
                      </div>
                        <button onClick={claim} className="btn btn-secondary btn-lg px-5 py-2 text-uppercase">Claim your NFT</button>
                      </p>
      
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </section>
        <section className="bg-white-darker">
              <div className="container informations py-5">
                <div className="row py-5">
                  <div className="col-md-12 text-center">
                    <h2>Your BSC NFTs <small className="text-muted font-italic">({balance})</small></h2>
                  </div>
                  <div className="row">
                    {image}
                  </div>
                </div>
              </div>
            </section>

        </>
        )
    } else {
    return <InstallMetamask />;
  }

}
export default NFTbsc