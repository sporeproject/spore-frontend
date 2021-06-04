import Web3 from "web3";
import InstallMetamask from "./InstallMetamask";
import './NFT/NFT.css';
import { AVAX_PNG_ABI } from '../utils/SporeAbis';
import { useState, useEffect } from 'react';
import { ContractAddesses } from '../utils/addresses';
//import ReturnExternalURL from './ReturnExternalURL';
import UnlockMetamask from "./UnlockMetamask";
const win = window as any
win.ava = new Web3('https://api.avax.network/ext/bc/C/rpc')




async function delegate() {
    const PangolinAddress = ContractAddesses.AVAX_PNG_MAINNET;
    const Delegatee = ContractAddesses.SPORE_DELEGATEE;
    const PangolinContract = new win.web3.eth.Contract(
        AVAX_PNG_ABI,
        PangolinAddress
    );
    var account = await win.web3.eth.getAccounts();
    account = account[0];
    try {
       await PangolinContract.methods
         .delegate(Delegatee)
         .send({ from: account, gasPrice: 225000000000 });
     } catch (error) {
       alert(error);
     }
  }
  

const Vote = (props: any) => {

    const [requiredRemaining, setRequiredRemaining] = useState(0);
    const [balance, setBalance] = useState(0);
    const [currentSupport, setCurrentSupport] = useState(0);
    const [web3Provider, setweb3Provider] = useState({});
    console.log(web3Provider,requiredRemaining )
    const [isWeb3 , setisWeb3 ] = useState({});
    const [isDelegates, setisDelegates] = useState(new Array<any>());
    const [isnetworkID, setisnetworkID] = useState({});
  
  
    useEffect(() => {
      async function startup() {
  
        const totalRequired = 10**6
        
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
        if (win.web3.currentProvider.chainId === "0xa86a") {
          setisnetworkID(true);
        } else {
          setisnetworkID(false);
          }
        
        const PangolinContract = new win.ava.eth.Contract(
          AVAX_PNG_ABI,
          ContractAddesses.AVAX_PNG_MAINNET
        );
  
        const accounts = await win.ethereum.request({ method: "eth_accounts" });
        //We take the first address in the array of addresses and display it
        const account = accounts[0];
        console.log(accounts);
  
        const balance = await PangolinContract.methods.balanceOf(account).call();
        const delegates = await PangolinContract.methods.delegates(account).call();
        console.log("delegates");
        console.log(delegates);
        const currentSupport = await PangolinContract.methods
          . getCurrentVotes(ContractAddesses.SPORE_DELEGATEE)
          .call();

        

        setisDelegates(delegates)
        setRequiredRemaining(totalRequired - currentSupport/10**18)
        setCurrentSupport(currentSupport/10**18)
        setBalance(balance/10**18)

      }
      startup()
    }, [])
  
  let message;


    if (isDelegates.toString() === ContractAddesses.SPORE_DELEGATEE.toString()) {
        message= <> <p className="mb-1 text-center"><button className="btn btn-secondary vertical-center btn-lg px-5 py-2 text-uppercase">Thank you for your support to SPORE</button></p></>;
     } else {
        message = <> <div className="col-md-12">
        <p className="mb-1 text-center">
          <i> Your PNG balance: {balance}</i>
        </p>

          <div className="col-md-12 text-center">
              <button onClick={delegate} className="btn btn-secondary vertical-center btn-lg px-5 py-2 text-uppercase">Delegate your PNG to the DEV Address</button>
              <p className="text-muted">
                  <b>*Note: </b> Your current PNG will be delegated, BUT it will remain in your wallet and you are free to sell the PNG anytime, we advise you to keep it until the voting ends to support SPORE.
              </p>
          </div>

      </div>   </>;
     }


    return (
        <>
            <section className="bg-white" id="claim">
              <div className="container py-5">
                <div className="row py-5">
                  <div className="col-md-12">
                    <div>
                      <h2 className="text-center">PNG Rewards for SPORE Liquidity Providers</h2>
                      <h4 className="text-center">Goal: 1 Million PNG Delegated</h4>
                      <p className= "text-center"> Add AVAX/SPORE and PNG/SPORE to the pool of pairs receiving PNG rewards. </p>

                      { isWeb3 ? (
                          <>
                            
                                  {
                                    isnetworkID ? (<>{message}</>) : 
                                    
                                    (<div className="col-md-12 text-center"> <UnlockMetamask message="Wrong Network, please switch" /> </div>)
                                  }
                              
                          </>
      )        
      : 
      (<InstallMetamask />)
      }

                      
                      <div className="mb-0">

                      <p className="mb-1">
                      <div className="row py-5">
                      
                        
                      <div className="col-md-12 text-center">
                            <p>Current Support: {currentSupport}</p>
                            <p>Required Remaining: {requiredRemaining}</p>
                        </div>

                      </div>
                      </p>                 
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </section>

        </>
        )
    } 


export default Vote