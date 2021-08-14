import React from "react";

const win = window as any

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


export const UnlockMetamask = (props: any) => {
  return (
    <section className="bg-white" >
      <div className="container align-items-center d-flex justify-content-center" >

        
          <button onClick= {addAVAXRPC} className="alert alert-danger  py-3 px-5" > {props.message} </button>
        
      </div>
    </section>
  );
}

export default UnlockMetamask;
