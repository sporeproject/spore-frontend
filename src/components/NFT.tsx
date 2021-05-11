import React from "react";
import Web3 from "web3";
import InstallMetamask from "./InstallMetamask";
import UnlockMetamask from "./UnlockMetamask";
import ReturnTokenURI from "./ReturnTokenURI";
import './NFT.css';
import { AVAX_SPORE_ABI, SPORE_MARKET_ABI } from '../utils/SporeAbis';
import { useState, useEffect } from 'react';
import { ContractAddesses } from '../utils/addresses';
import { approveContract } from '../utils/wallet';
const win = window as any
const docu = document as any

async function approve() {
  const SporeAddress = ContractAddesses.AVAX_SPORE_FUJI;
  const SporeNFTMarketaddress = ContractAddesses.AVAX_MARKET_FUJI;
  const SporeContract = new win.web3.eth.Contract(AVAX_SPORE_ABI, SporeAddress);
  var account = await win.web3.eth.getAccounts();
  account = account[0];
  var amount = docu.getElementById("_approveFee").value;
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
    ContractAddesses.AVAX_MARKET_FUJI
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
    ContractAddesses.AVAX_MARKET_FUJI
  );
  var _tokenID = docu.getElementById("_tokenID").value;
  var account = await win.web3.eth.getAccounts();
  account = account[0];
  console.log(account);
  const bazaar = await SporeMarketv1.methods.Bazaar(_tokenID).call();
  console.log(bazaar);
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
  const [tokenCounter, setTokenCounter] = useState(new Array<any>())
  const [totalCharacters, setTotalCharacters] = useState(72)
  const [totalSupplyLeft, setTotalSupplyLeft] = useState(0)
  const [tokensOfOwner, setTokensOfOwner] = useState(new Array<any>())
  const [balance, setBalance] = useState(0)
  const [marketPlaceBuilder, setMarketPlaceBuilder] = useState(new Array<any>())
  const marketPlace = {}
  let isnetworkID = false
  let web3Provider: any = undefined
  let isWeb3 = true

  useEffect(() => {
    async function startup() {
      let web3 = win.web3;
      if (win.ethereum) {
        win.web3 = new Web3(win.ethereum);
        win.ethereum.enable();
        console.log(win.ethereum);
      }
      if (typeof web3 !== "undefined") {
        // Use Mist/MetaMask's provider
        web3Provider = web3.currentProvider;
        web3 = new Web3(web3.currentProvider);
      } else {
        isWeb3 = false;
      }
      if (web3Provider.chainId == "0xa869") {
        isnetworkID = true;
      } else {
        isnetworkID = false;
      };
      console.log("webProvider:", web3Provider.chainId);

      const SporeMarketv1 = new win.web3.eth.Contract(
        SPORE_MARKET_ABI,
        ContractAddesses.AVAX_MARKET_FUJI
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
      console.log("tokencounter is");
      console.log(tokenCounter);

      const promises = [];
      for (let i = 0; i <= totalCharacters - 1; i++) {
        const characterForSale = SporeMarketv1.methods.Bazaar(i).call();
        promises.push(characterForSale);
      }

      Promise.all(promises).then((values) => {
        console.log("VALUES:", values);
        setBazaar(values)
        setTotalSupplyLeft(totalCharacters - totalSupply)
        setTokenCounter(tokenCounter)
        setBalance(balance)
        setTokensOfOwner(tokensOfOwnerTemp)
        console.log("Tokens of owner:", tokensOfOwnerTemp)

        for (let i = 0; i <= totalCharacters - 1; i++) {
          if (bazaar[i] !== undefined) {
            console.log("bazaar ", i, bazaar[i])
            if (bazaar[i].price > 0) {
              console.log("ok");
              console.log(bazaar[i]);
              setMarketPlaceBuilder(prev => [...prev, [i, bazaar[i].price / 10 ** 9]]);
            }

          }
        }
      });
    }
    startup()
  }, [])

  const MarketPlaceForSale = () => {
    if (marketPlaceBuilder.length > 0) {
      return (
        marketPlaceBuilder.map((item: any) => (
          <li key={item}>
            <img className="rounded shadow" src={item} height="200" />
            <p>ID: {item[0]}</p>
            <p>Price: {item[1]} Avax</p>

          </li>
        ))
      )
    }
    else {
      return (
        <> No NFTs for Sale </>
      )
    }
  }

  console.log(marketPlaceBuilder);

  if (balance > 0) {
    var image = <ReturnTokenURI tokensOfOwner={tokensOfOwner} />;
  } else {
    var image = <> You dont own any NFTs yet! </>;
  }

  if (isWeb3) {
    if (false) {
      return (
        <div>
          <UnlockMetamask message="Wrong Network, please switch" />
        </div>
      );
    } else {
      return (
        <>
          <div className='container information py-2'>
            <div className='row pb-5 py-2'>
              <div className='col-lg-12'>
                <h2 className='feature pb-2 text-center'>
                  <span>NFT version 1</span> : Vision, Pricing & Fair Launch
                </h2>
                <h3 className="text-center pb-2">Welcome to out first generation of NFTs</h3>
                <div className="row">
                  <div className="col-lg-4 col-sm-12">
                    <div className="box-rounded">
                      <h4>Objective</h4>
                      <p>The stepping stone in our road to decentralized governance.
                        Burn an additional 1.328% of the totalsupply.
                        Equivalent of 1328t (1.328e15) SPORE.
                      </p>
                      <ul>
                        <li>First 4 NFTs: 1t each </li>
                        <li>Next 8 NFTs: 3.5t each </li>
                        <li>Next 12 NFTs: 7t each </li>
                        <li>Next 24 NFTs: 14t each </li>
                        <li>Next 12 NFTs: 21t each </li>
                        <li>Next 8 NFTs: 28t each </li>
                        <li>Last 4 NFTs: 100t each </li>
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
                        activated allowing 24 hours to start buying the NFTs. All
                        SPORE used to mint the NFTs will go to the BURN address.</p>

                      <p>
                        <b className="important">There is no "DEV" fund.</b> The NFTs can be traded at
                        our marketplace using AVAX for settlement.</p>
                      <p>A small SPORE
                        tax will be burnt every time anyone buys an NFT from the
                        Marketplace (0.25t SPORE).</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12">
                    <div className="box-rounded">
                      <h4>Art Curation</h4>
                      <p>100% of the pieces have been made by community contribution.</p>
                      <p>Here an non exhaustive list about our artists (many thanks to them):</p>
                      <ul>
                        <li>Artist A : <i className="fab fa-twitter"></i> @artistA</li>
                        <li>Artist B : <i className="fab fa-twitter"></i> @artistB</li>
                        <li>Artist C : <i className="fab fa-twitter"></i> @artistC</li>
                        <li>Artist D : <i className="fab fa-twitter"></i> @artistD</li>
                        <li>Artist E : <i className="fab fa-twitter"></i> @artistE</li>
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
                        value="1000000000000000000000"
                        placeholder="1000000000000000000000"
                        className="form-control"
                      />
                      <div className="input-group-append">
                        <button onClick={approve} className="btn btn-primary">Approve</button>
                      </div>
                    </div>
                    <p className="text-muted">
                      <b>*Note: </b>Values in wei. Default 100t SPORE.
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
                  <ul>
                    {MarketPlaceForSale()}
                  </ul>
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
                    <b>*Note: </b>Values in wei. Only necessary if you havent approved before.</p>
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
                </div>
              </div>
            </div>
          </section>
          <section className="bg-white">
            <div className="container informations py-5">
              <div className="row py-5">
                <div className="col-md-12 text-center">
                  <h2>Your NFTs <small className="text-muted font-italic">({balance})</small></h2>
                </div>
                <div className="row">
                  {image}
                </div>
              </div>
            </div>
          </section>

        </>
      );
    }
  } else {
    return <InstallMetamask />;
  }

}
export default NFT
