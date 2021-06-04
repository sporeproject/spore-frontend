import Web3 from "web3";
import InstallMetamask from "./InstallMetamask";
import './Vote.css';
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


  const [balance, setBalance] = useState(0);
  const [currentSupport, setCurrentSupport] = useState(0);
  const [isWeb3, setisWeb3] = useState<boolean>(false);
  const [isDelegates, setisDelegates] = useState(new Array<any>());
  const [isnetworkID, setisnetworkID] = useState<boolean>(false);


  useEffect(() => {
    async function startup() {

      

      let web3 = win.web3;
      if (win.ethereum) {
        win.web3 = new Web3(win.ethereum);
        win.ethereum.enable();
      }
      if (typeof web3 !== "undefined") {
        // Use Mist/MetaMask's provider
        setisWeb3(true);
        web3 = new Web3(web3.currentProvider);
      }

      const chainId = await win.web3.currentProvider.chainId;
      console.log("chainid")
      console.log(chainId)
      if (chainId === "0xa86a" || chainId === null   ) {
        setisnetworkID(true);
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
        .getCurrentVotes(ContractAddesses.SPORE_DELEGATEE)
        .call();


      setisDelegates(delegates)
      
      setCurrentSupport(currentSupport / 10 ** 18)
      setBalance(balance / 10 ** 18)

    }
    startup()
  }, [])

  let message;


  const numberWithCommas = (x: number) => {
    return x.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
  if (isDelegates.toString() === ContractAddesses.SPORE_DELEGATEE.toString()) {
    message = <> 
    <div className="col-md-12">
      <p className="mb-1 text-center">
        <i> Your wallet balance is {balance} PNG.  </i>
      </p>

      <div className="col-md-12 text-center">
        <button className="btn btn-secondary vertical-center btn-lg px-5 py-2 text-uppercase">Thank you for your vote 🍄</button>
      </div>

    </div>
    
    </>;
  } else {
    message = <> <div className="col-md-12">
      <p className="mb-1 text-center">
        <i> Your wallet balance is {numberWithCommas(balance)} PNG. You have not delegated yet. </i>
      </p>

      <div className="col-md-12 text-center">
        <button onClick={delegate} className="btn btn-secondary vertical-center btn-lg px-5 py-2 text-uppercase">Delegate</button>
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
                <p className="vote">
              <div className="row py-5">
              <img src="vote.png" height="100" alt="Reload your page"/> <h2 >Vote for SPORE! </h2> <img src="vote.png" height="100" alt="Reload your page"  />
              </div></p>
                <p>
                  The Pangolin vote begins June 5, 2021 at 0:32 GMT (more details <a className="link-color" href="https://twitter.com/pangolindex/status/1400613246655090691">here</a>). 
                  All $PNG holders are eligible to vote. To vote for Spore, use the “Delegate” button below. 
                  You have to be connected to the Avalanche network with Metamask.</p>
                <p>Your PNG will remain in your wallet.  You are merely delegating your right to vote to Spore, and your only cost is the AVAX gas fee. 
                  If you need help or have any questions, please ask in Telegram or Discord.</p>
                <div>
                  {isWeb3 ? (
                    <>

                      {
                        isnetworkID ? (<>{message}</>) :

                          (<div className="col-md-12 "> <UnlockMetamask message="Please connect to the Avalanche Network with Metamask" /> </div>)
                      }

                    </>
                  )
                    :
                    (<InstallMetamask />)
                  }
                </div>

                <div className="mb-0">

                  <p className="mb-1">
                    <div className="row py-5">


                      <div className="col-md-12 text-center">
                        <h4>Total PNG delegated to Spore: </h4>
                        <h2>{numberWithCommas(currentSupport)}</h2>
                      </div>
                      <div className="col-md-12 text-center">
                        <h4>Thank you for your support! </h4>
                        <h4>  &#127812; 🚀 </h4>
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