import React from 'react';
import Web3 from 'web3';
import './SporeFairy.css';
import { nftmetadata } from '../utils/nftmetadata';
import { useState, useEffect } from 'react';
import { SPORE_FAIRY_ABI } from '../utils/SporeAbis';
import { ContractAddesses } from '../utils/addresses';



const win = window as any
win.ava = new Web3('https://api.avax.network/ext/bc/C/rpc')

const connectMetaMask = () => {
  if (win.ethereum) {
    win.web3 = new Web3(win.ethereum);
    win.ethereum.enable();
  }
}

const addAVAXRPC = async () => {
    const chainId = "0xa86a";
    const chaindName = "Avalanche Mainnet C-Chain";
    const nativeCurrency = {
        name: "AVAX",
        symbol: "AVAX",
        decimals: 18
    };
    const rpcUrl = ["https://api.avax.network/ext/bc/C/rpc"]
    const blockExplorerUrl = ["https://cchain.explorer.avax.network/"]
    const nid = win.web3.currentProvider.chainId;
    if(nid !== "0xa86a"){
        try {
            // wasAdded is a boolean. Like any RPC method, an error may be thrown.
            const wasAdded = await win.web3.currentProvider.sendAsync({
            method: 'wallet_addEthereumChain',
            params: [{
                chainId: chainId,
                chainName: chaindName,
                nativeCurrency: nativeCurrency,
                rpcUrls: rpcUrl,
                blockExplorerUrls: blockExplorerUrl // A string url of the token logo
                }]
            });
        
            if (wasAdded === null) {
            console.log('Thanks for your interest!');
            } else {
            console.log('Your loss!');
            }
        } catch (error) {
            console.log(error);
        }
    }
    else{
        console.log('You are on the AVALANCHE!');
    }
}

const claimAirdrop = async (e: any) => {
  e.preventDefault();
  connectMetaMask();
  const ABI = SPORE_FAIRY_ABI;
  const fairyContract = new win.web3.eth.Contract(
    ABI,
    ContractAddesses.SPORE_FAIRY
  );
  var account = await win.web3.eth.getAccounts();
  account = account[0];
  console.log(account);
  const nid= win.web3.currentProvider.chainId
    if (nid === "0xa86a") {
  try {
    await fairyContract.methods
      .get()
      .send({ from: account, gasPrice: 225000000000, gas: 200000 });
  } catch (error) {
    alert(error);
  }
    }
    else{
        addAVAXRPC();
        console.log("switch to the avalanche network first!")
    }
}

const getFairyBalance = async () => {
    const ABI = SPORE_FAIRY_ABI;
    const fairyContract = new win.ava.eth.Contract(
            ABI,
            ContractAddesses.SPORE_FAIRY)
    try {
        var contractBalance = await fairyContract.methods.balance().call();
        console.log(contractBalance)
        return contractBalance
    } catch (error) {
        console.log(error);
        return 0
    }
}


const SporeFairy = (props: any) => {
    const [fairyBalance, setFairyBalance] = useState(0);

    useEffect(() => {
        async function startup() {
       
            var callFairyBalance = await getFairyBalance()/ 10 ** 16;
            setFairyBalance(callFairyBalance);

        }
        startup()
      }, [])

    return (
      <> 
      
      <div className='container information py-5'>
        <div className='row pb-1 py-2'>
          <div className='col-lg-12'>
            <h2 className='feature pb-2 text-center'>
            The Spore Fairy
            </h2>
            
            <h3 className="text-center pb-2">aka Airdrop</h3>
            <div className="row">

              <div className="col-lg-12 col-sm-12">
                                <div className="box-large">
                                      <div className="box-body">

                                              <div className="row fairy">
                                                              <p>The Spore Fairy is a special <b><a href="https://cchain.explorer.avax.network/address/0xeAdf7D005596dbad55e067C1208080f83258D452/contracts">smart contract</a> </b>
                                                              that lets you claim 10 million $SPORE on the 
                                                                  Avalanche Network given the following conditions:</p> 
                                              </div>
                                              <div className="row">
                                            
                                                    <ul>
                                                              <li>You must not hold any $Spore in your wallet </li>
                                                              <li>You have not claimed the airdrop before</li>
                                                    </ul>
                                             
                                                </div>
                                      </div>
                                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <section className= " text-center">
      
      
      
      <div className= "py-4"> The fairy can be claimed {fairyBalance.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} times.</div>
         <button
                  className='btn btn-outline-light'
                  onClick={claimAirdrop}
                >
                  Claim Airdrop
        </button>
     
      </section>  

      <div className='container information py-2'>
        <div className='row pb-5 py-2'>
          <div className='col-lg-12'>

                <img 
                  className="d-block center-block rounded shadow"
                  src={nftmetadata[69].external_url}
                  alt="Spore Fairy"
                  height= "400"
                />


          </div>
        </div>
      </div>

      

      
      
    </>
    );
  }
  export default SporeFairy
  
