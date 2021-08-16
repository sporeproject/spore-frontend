import React, { useState } from 'react';
import Web3 from 'web3';
//@ts-ignore

import './BSCBridge.css';
import { useEffect } from 'react';

const win = window as any

const connectMetaMask = async () => {
    if (win.ethereum) {
        win.web3 = new Web3(win.ethereum);
        win.ethereum.enable();
    } else { console.log("Already connected to MetaMask") }
}

const getNetworkId = async () => {
    const networks = new Map();
    networks.set("0x61", "BSC Testnet")
    networks.set("0x38", "Binance Smart Chain")
    networks.set("0xa86a", "Avalanche")
    networks.set("0xa869", "Fuji Testnet")
    return "Network : " + networks.get(win.web3.currentProvider.chainId);
}

const getConnectedAccount = async () => {
    var account = await win.web3.eth.getAccounts();
    account = account[0];
    return "Account: " + account;
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


const addBSCRPC = async () => {
    const chainId = "0x38";
    const chaindName = "Smart Chain";
    const nativeCurrency = {
        name: "BNB",
        symbol: "BNB",
        decimals: 18
    };
    const rpcUrl = ["https://bsc-dataseed.binance.org/"]
    const blockExplorerUrl = ["https://bscscan.com"]
    const nid = win.web3.currentProvider.chainId;
    if(nid !== "0x38"){
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
        console.log('You are on the BSC!');
    }
}

const addSporeBSC = async () => {
    const tokenAddress = "0x33a3d962955a3862c8093d1273344719f03ca17c";
    const tokenSymbol = "SPORE";
    const tokenDecimals = 9;
    const tokenImage = "https://raw.githubusercontent.com/sporeproject/spore-frontend/master/public/spore_256.png";
    const nid= win.web3.currentProvider.chainId
    if (nid === "0x38") {
        try {
            // wasAdded is a boolean. Like any RPC method, an error may be thrown.
            const wasAdded = await win.web3.currentProvider.sendAsync({
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
}

const addSporeAvalanche = async () => {
    const tokenAddress = "0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985";
    const tokenSymbol = "SPORE";
    const tokenDecimals = 9;
    const tokenImage = "https://raw.githubusercontent.com/sporeproject/spore-frontend/master/public/spore_256.png";
    const nid= win.web3.currentProvider.chainId
    if (nid === "0xa86a") {
        try {
            // wasAdded is a boolean. Like any RPC method, an error may be thrown.
            const wasAdded = await win.web3.currentProvider.sendAsync({
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
}



const CommCrew = () => {
    const [network, setNetwork] = useState<any>(<button onClick={connectMetaMask} className="btn btn-light">Connect wallet </button>)
    const [connectedAccount, setConnectedAccount] = useState<any>()


    // network: <button onClick={connectMetaMask} className="btn btn-light">Connect wallet </button>,
    useEffect(() => {
        async function startup() {
            connectMetaMask();
            var nid = await getNetworkId();
            var connected_account= await getConnectedAccount();
            setNetwork(nid)
            setConnectedAccount(connected_account)

        }
        startup()

    }, [])




    return (
        <div className="container py-5" id="bridge">
            <div className="row py-5">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2>AVALANCHE / BSC SPORE BRIDGE</h2>
                        </div>
                        <div className="col-lg-10  ">
                                {connectedAccount}
                            </div>
                        
                            <div className="col-lg-10 text-right">
                                {network}
                            
                            
                        </div>


                    </div>
                      
                        
                        
                        
                        
                        
                        <div className="container text-center">
                            <div className="  py-4">
                                <h3>Disclaimer: this is a version alpha. Use at your own risk. 
                                </h3>
                            </div>
                        </div>

                        <div className="container">
                    <div className="offset-lg-3 col-lg-6 text-center py-4">

                                <p className="text-left">                                    
                                    <p><b>Note </b>: The Bridge may encounter occasional delays depending on network conditions.</p>
                                    <p>If you encounter any problems come to our <a href="t.me/sporefinanceofficial">Telegram</a> and we will answer your questions</p>
                                    <p>Always check the domain to be spore.earth, be aware of impersonators/scams!</p>
                                   
                                </p>
                            </div>
                            </div>
                    
                    <div className="container">
                    <div className="offset-lg-3 col-lg-6 text-center py-4">
                                <h3>Trust Wallet Steps 😎 </h3>

                                <p className="text-left">                                    
                                    <p><b>Step 1 </b>- Install <a 
                                        target="_blank"  
                                        rel='noopener noreferrer'                                    
                                        href="https://metamask.io">
                                        MetaMask </a> 🦊 extension - and import your 12 words Recovery Phrase from trustwallet</p>
                                    <p><b>Step 2 </b>- Add custom RPC for {' '}
                                    <button onClick={addAVAXRPC} className="btn btn-primary" id="addAVAXRPC" > Avalanche 🔺</button> and  {' '} 
                                       <button onClick={addBSCRPC} className="btn btn-primary" id="addBSCRPC" > BSC 🔶 </button> (in one click!)</p>
                                    <p><b>Step 3</b>- Add 🍄 SPORE token address: <br></br> <br></br> 
                                    <button onClick={addSporeBSC} className="btn btn-primary" id="addBSC">+ add BSC 🔶 Spore 🍄</button>
                                    <br></br> <br></br> <button onClick={addSporeAvalanche} className="btn btn-primary " id="addAvalanche"> + add Avalanche 🔺 Spore🍄</button>
                                     </p>
                                    
                                    <p><b>Step 4 </b>- Refresh the page click on max and transfer </p>
                                   
                                </p>
                            </div>
                            </div>
                </div>
            </div>
        </div>
    );
}

export default CommCrew