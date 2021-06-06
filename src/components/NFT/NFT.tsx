//import React, { useCallback } from "react";
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
win.ava = new Web3('https://api.avax.network/ext/bc/C/rpc')

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

async function NFTbuy() {
  const SporeMarketv1 = new win.web3.eth.Contract(
    SPORE_MARKET_ABI,
    ContractAddesses.AVAX_MARKET_MAINNET
  );
  var _tokenID = docu.getElementById("_tokenID").value;
  var account = await win.web3.eth.getAccounts();
  account = account[0];
  const bazaar = await SporeMarketv1.methods.Bazaar(_tokenID).call();
  try {
    await SporeMarketv1.methods
      .buy(_tokenID)
      .send({ from: account, gasPrice: 225000000000, value: bazaar.price });
  } catch (error) {
    alert(error);
  }
}


const NFT = (props: any) => {
  const [bazaar, setBazaar] = useState(new Array<any>())
  //const [tokenCounter, setTokenCounter] = useState(new Array<any>());
  //const [totalCharacters, setTotalCharacters] = useState(72);
  const [totalSupplyLeft, setTotalSupplyLeft] = useState(0);
  const [tokensOfOwner, setTokensOfOwner] = useState(new Array<any>());
  const [balance, setBalance] = useState(0);
  //const [marketPlaceBuilder, setMarketPlaceBuilder] = useState(new Array<any>());
  //const marketPlace = {};
  const [isnetworkID, setisnetworkID] = useState({});
  const [web3Provider, setweb3Provider] = useState({});
  console.log(web3Provider );
  const [isWeb3 , setisWeb3 ] = useState({});


  useEffect(() => {
    async function startup() {

      const totalCharacters = 72
      
      let web3 = win.web3;
      if (win.ethereum) {
        win.web3 = new Web3(win.ethereum);
        win.ethereum.enable();
      }
      if (typeof web3 !== "undefined") {
        // Use Mist/MetaMask's provider
        setweb3Provider({ web3Provider: web3});
        web3 = new Web3(web3.currentProvider);        
      } else {
        setisWeb3(true);
      }

      if(win.web3.currentProvider.chainId === undefined){
        setisWeb3(false);
      }
      else{
        setisWeb3(true);
      }

      const SporeMarketv1 = new win.ava.eth.Contract(
        SPORE_MARKET_ABI,
        ContractAddesses.AVAX_MARKET_MAINNET
      );

      
      const totalSupply = await SporeMarketv1.methods.totalSupply().call();
      //const tokenCounter = await SporeMarketv1.methods.tokenCounter;

      const promises = [];
      for (let i = 0; i <= totalCharacters - 1; i++) {
        const characterForSale = SporeMarketv1.methods.Bazaar(i).call();
        promises.push(characterForSale);
      }

      Promise.all(promises).then((values) => {
        setBazaar(values)
        setTotalSupplyLeft(totalCharacters - totalSupply)
        //setTokenCounter(tokenCounter)        
      }).then(async () => {

        if (win.web3.currentProvider.chainId === "0xa86a") {
          const accounts = await win.ethereum.request({ method: "eth_accounts" });
          //We take the first address in the array of addresses and display it
          const account = accounts[0];
          

          const balance = await SporeMarketv1.methods.balanceOf(account).call();
          const tokensOfOwnerTemp = await SporeMarketv1.methods
            .tokensOfOwner(account)
            .call();
          setBalance(balance);
          setTokensOfOwner(tokensOfOwnerTemp);
          setisnetworkID(true);
        } else {
          setisnetworkID(false);
          console.log(typeof web3);
        };
      });
    }
    startup()
  }, [])


  var image: any;

  if (balance > 0) {
     image = <ReturnTokenURI tokensOfOwner={tokensOfOwner} />;
  } else {
     image = <> You dont own any NFTs yet! </>;
  }

  return (
    <>
      <div className='container information py-2'>
        <div className='row pb-5 py-2'>
          <div className='col-lg-12'>
            <h2 className='feature pb-2 text-center'>
              <span>NFT version 1</span> : Vision, Pricing & Fair Launch
            </h2>
            <h3 className="text-center pb-2">Welcome to our first generation of NFTs</h3>
            <div className="row">
              <div className="col-lg-4 col-sm-12">
                <div className="box-rounded">
                  <h4>Objective</h4>
                  <p>The stepping stone in our road to decentralized governance.
                    Burn an additional 0.0578% of the totalsupply.
                    Equivalent of 57t (0.057e15) SPORE.
                  </p>
                  <ul>
                    <li>First 4 NFTs: 1b each </li> 
                    <li>Next 8 NFTs:  2b each </li>  
                    <li>Next 12 NFTs: 50b each </li> 
                    <li>Next 24 NFTs: 100b each </li> 
                    <li>Next 12 NFTs: 500b each </li> 
                    <li>Next 8 NFTs: 1t each </li> 
                    <li>Last 4 NFTs: 10t each </li> 
                  </ul>
                  <p className='pt-4'>
                    This first generation of NFTs have a special meaning :
                    they will be used for setting up a system of
                    off-chain/on-chain governance over the next deployments
                    using hashed signatures.</p>

                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="box-rounded">
                  <h4>Fair Launch</h4>
                  <p>After the public announcement, a timelock will be
                    activated allowing 6 hours to start buying the NFTs. 
                    A sniper lock will not allow the first person to claim the NFTs but will have 
                    1 in 3 possibilities to unlock the contract, allowing the following people to
                    claim the rest of the NFTs normally.
                    Only 1 NFT allowed to claim per wallet!
                    All SPORE used to mint the NFTs will go to the BURN address.</p>

                  <p>
                    <b className="important">There is no "DEV" fund.</b> The NFTs can be traded at
                    our marketplace using AVAX for settlement or in other marketplaces inside the Avalanche Ecosystem</p>
                  <p>A small SPORE
                    tax will be burnt every time anyone buys an NFT from the
                    Marketplace (10 million SPORE).</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="box-rounded">
                  <h4>Art Curation</h4>
                  <p>100% of the pieces have been made by community contribution.</p>
                  <p>Here an non exhaustive list about our artists (many thanks to them):</p>
                  <ul>
                    <li>Papipaz </li>
                    <li>Gamatar</li>
                    <li>Tchoco</li>
                    <li>JC </li>
                    <li>Brotoshi</li>
                    <li>Mlolotte</li>
                    <li>Freelancer</li>
                    <li>NightlyCatGirl</li>
                    <li>OrionDeimos</li>
                    <li>Berserk</li>
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
                <h2 className="text-center">Claim your NFT and spread the Spore !</h2>
                <p className="mb-1">
                  <i>NFTs left to claim: {totalSupplyLeft}</i>
                </p>
                <div className="input-group mb-0">
                  <input
                    type="number"
                    id="_approveFee"
                    defaultValue="10000000000000"
                    className="form-control"
                  />
                  <div className="input-group-append">
                    <button onClick={approve} className="btn btn-primary">Approve</button>
                  </div>
                </div>
                <p className="text-muted">
                  <b>*WARNING: </b> Only approve the SPORE that you are willing to spend. Default: 10t SPORE.
                </p>
                <p className="text-center">
                  <button onClick={claim} className="btn btn-secondary btn-lg px-5 py-2 text-uppercase">Claim your NFT</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-white-darker'>
        <div className="container information py-5">
          <div className='row py-5'>
            <div className='col-md-12 text-center'>
              <h2 className="text-secondary-color">Marketplace</h2>
            </div>
            <div className='col-md-12'>
            <div className="row">
                <MarketPlaceView bazaar={bazaar}  />
              </div>
              <br />
              {" "}
              <div className="input-group">
                <input
                  type="text"
                  id="_approveFee"
                  value="100000000000"
                  className="form-control"
                />
                <div className="input-group-append">
                  <button onClick={approve} className="btn btn-primary">Approve Fee</button>
                </div>
              </div>
              <p className="text-muted">
                <b>*Note: </b>Default is 10 million SPORE.</p>
              <div className="input-group">
                <input
                  type="text"
                  id="_tokenID"
                  placeholder="NFT_ID (ex: 0)"
                  className="form-control"
                />
                <div className="input-group-append">
                    <button onClick={NFTbuy} className="btn btn-primary">Buy NFT</button>
                </div>
                </div>
                <p className="text-muted">
                    <b>*Note: </b>Displayed price is rounded up if not an integer (you may pay a little less than expected).</p>
            </div>
          </div>
        </div>
      </section>
      
      { isWeb3 ? (
        <section className="bg-white">
          <div className="container informations py-5">
            <div className="row py-5">
              <div className="col-md-12 text-center">
                <h2>Your NFTs <small className="text-muted font-italic">({isnetworkID ? balance : 0})</small></h2>
              </div>
                {
                  isnetworkID ? (<div className="row">{image}</div>) : 
                  
                  (<div className="col-md-12 text-center"> <UnlockMetamask message="Wrong Network, please switch" /> </div>)
                }
            </div>
          </div>
        </section>
      )        
      : 
      (<InstallMetamask />)
      }
    </>
  );

}
export default NFT
