import React from 'react';
import Web3 from 'web3';
import {ethers} from "ethers";

import './BSCBridge.css';

async function connectMetaMask() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
    }else{console.log("Already connected to MetaMask")}
  }

async function approve(){
    const SporeAddress = "0x75e6Fb313DF2c9429457722e4Adf89e2a9b39cfF";
    const SporeABI = [{"type":"constructor","stateMutability":"nonpayable","inputs":[]},{"type":"event","name":"Approval","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"spender","internalType":"address","indexed":true},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"from","internalType":"address","indexed":true},{"type":"address","name":"to","internalType":"address","indexed":true},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"allowTradeAt","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"allowance","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"address","name":"spender","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"approve","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balanceOf","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint8","name":"","internalType":"uint8"}],"name":"decimals","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"decreaseAllowance","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"subtractedValue","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"enableFairLaunch","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"excludeAccount","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"includeAccount","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"increaseAllowance","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"addedValue","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isExcluded","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"name","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"reflect","inputs":[{"type":"uint256","name":"tAmount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"reflectionFromToken","inputs":[{"type":"uint256","name":"tAmount","internalType":"uint256"},{"type":"bool","name":"deductTransferFee","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"symbol","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tokenFromReflection","inputs":[{"type":"uint256","name":"rAmount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalFees","inputs":[]},{"type":"function","stateMutability":"pure","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSupply","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transfer","inputs":[{"type":"address","name":"recipient","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transferFrom","inputs":[{"type":"address","name":"sender","internalType":"address"},{"type":"address","name":"recipient","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]}];
    const AvaxBridgeAdress = "0x1aFCEF48379ECad5a6D790cE85ad1c87458C0f07";
    const SporeContract = new window.web3.eth.Contract(
        SporeABI,
        SporeAddress
        );
    var account = await window.web3.eth.getAccounts();
    account = account[0];
    var amount = ethers.BigNumber.from(document.getElementById("spores").value*10**9);
    try {
        await SporeContract.methods
            .approve(AvaxBridgeAdress, amount)
            .send({ from: account, gasPrice: 225000000000 });
        } catch (error) {
        alert(error);
        }
}

async function swapFromAVAX(){
    const AvaxBridgeAdress = "0x1aFCEF48379ECad5a6D790cE85ad1c87458C0f07";
    const AvaxBridgeABI = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"_token","internalType":"address"},{"type":"uint256","name":"_fees","internalType":"uint256"}]},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"from","internalType":"address","indexed":false},{"type":"address","name":"to","internalType":"address","indexed":false},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false},{"type":"uint256","name":"date","internalType":"uint256","indexed":false},{"type":"uint256","name":"nonce","internalType":"uint256","indexed":false},{"type":"uint256","name":"percent","internalType":"uint256","indexed":false},{"type":"uint8","name":"step","internalType":"enum BridgeSporeAVAX.Step","indexed":true}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"admin","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balance","inputs":[]},{"type":"function","stateMutability":"payable","outputs":[],"name":"burn","inputs":[{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"changeFees","inputs":[{"type":"uint256","name":"newFees","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"fees","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"mint","inputs":[{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"uint256","name":"otherChainNonce","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"mintAndSwapForAVAX","inputs":[{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"uint256","name":"otherChainNonce","internalType":"uint256"},{"type":"uint256","name":"percentSold","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"nonce","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"pangoRouter","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"processedNonces","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"spore","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IERC20"}],"name":"token","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"wavax","inputs":[]}];
    const AvaxBridgeContract = new window.web3.eth.Contract(AvaxBridgeABI, AvaxBridgeAdress);
    var account = await window.web3.eth.getAccounts();
    account = account[0];
    var amount = ethers.BigNumber.from(document.getElementById("spores").value*10**9);
    var fees = ethers.BigNumber.from(30000000000000000)
    try {
        await AvaxBridgeContract.methods
            .burn(amount)
            .send({ from: account, gasPrice: 225000000000, value: fees});
        } catch (error) {
        alert(error);
        }
}

async function swapFromBSC(){
    const BscBridgeAdress = "0xF4764A1be1b7c5B1091cDED80372712764C9ab6C";
    const BscBridgeABI = [{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_fees","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"date","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nonce","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"percent","type":"uint256"},{"indexed":true,"internalType":"enum BridgeSporeBSC.Step","name":"step","type":"uint8"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"name":"burnAndSwap","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newFees","type":"uint256"}],"name":"changeFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"otherChainNonce","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"nonce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"processedNonces","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];
    const BscBridgeContract = new window.web3.eth.Contract(BscBridgeABI, BscBridgeAdress);
    var account = await window.web3.eth.getAccounts();
    account = account[0];
    var amount = ethers.BigNumber.from(document.getElementById("spores2").value*10**9);
    var fees = ethers.BigNumber.from(5000000000000000)
    try {
        await BscBridgeContract.methods
            .burn(account, amount)
            .send({ from: account, value: fees});
        } catch (error) {
        alert(error);
        }
}


async function getSporeInWalletAVAX(){
    const SporeAddress = "0x75e6Fb313DF2c9429457722e4Adf89e2a9b39cfF";
    const SporeABI = [{"type":"constructor","stateMutability":"nonpayable","inputs":[]},{"type":"event","name":"Approval","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"spender","internalType":"address","indexed":true},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"from","internalType":"address","indexed":true},{"type":"address","name":"to","internalType":"address","indexed":true},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"allowTradeAt","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"allowance","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"address","name":"spender","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"approve","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balanceOf","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint8","name":"","internalType":"uint8"}],"name":"decimals","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"decreaseAllowance","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"subtractedValue","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"enableFairLaunch","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"excludeAccount","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"includeAccount","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"increaseAllowance","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"addedValue","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isExcluded","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"name","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"reflect","inputs":[{"type":"uint256","name":"tAmount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"reflectionFromToken","inputs":[{"type":"uint256","name":"tAmount","internalType":"uint256"},{"type":"bool","name":"deductTransferFee","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"symbol","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tokenFromReflection","inputs":[{"type":"uint256","name":"rAmount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalFees","inputs":[]},{"type":"function","stateMutability":"pure","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSupply","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transfer","inputs":[{"type":"address","name":"recipient","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transferFrom","inputs":[{"type":"address","name":"sender","internalType":"address"},{"type":"address","name":"recipient","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]}];
    const SporeContract = new window.web3.eth.Contract(
        SporeABI,
        SporeAddress
        );
    var account = await window.web3.eth.getAccounts();
    account = account[0];
    try {
        var spores = await SporeContract.methods.balanceOf(account).call();
        console.log(spores)
        return spores
        } catch (error) {
        console.log(error);
        return 0
        }
}
async function getSporeInWalletBSC(){
    const SporeAddress = "0xD965A232880df8a52C705B8B1Cb5f4cAa8073fbF";
    const SporeABI = [{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"burned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"updateAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"}];
    const SporeContract = new window.web3.eth.Contract(
        SporeABI,
        SporeAddress
        );
    var account = await window.web3.eth.getAccounts();
    account = account[0];
    try {
        var spores = await SporeContract.methods.balanceOf(account).call();
        console.log(spores)
        return spores
        } catch (error) {
        console.log(error);
        return 0
        }
}

async function setMaxSporeAVAX(){
    var maxSpores = await getSporeInWalletAVAX();
    document.getElementById("spores").value = maxSpores/10**9;
}

async function setMaxSporeBSC(){
    var maxSpores = await getSporeInWalletBSC();
    document.getElementById("spores2").value = maxSpores/10**9;
}

export default class BSCBridge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        numberOfSporeAVAX: 0,
        numberOfSporeBSC: 0,
        feesBNB:0.005,
        feesAVAX:0.03,
        };
    }
    async componentDidMount () {
        const script = document.createElement("script");
        script.src = "/bscbridge.js";
        script.async = true;
        document.body.appendChild(script);
        connectMetaMask();
        var numberOfSporeAVAX = await getSporeInWalletAVAX()/10**9;
        var numberOfSporeBSC = await getSporeInWalletBSC()/10**9;
        this.setState({
            numberOfSporeAVAX: numberOfSporeAVAX,
            numberOfSporeBSC: numberOfSporeBSC
        })
    }

  render() {
    return (
        <div class="container py-5" id="bridge">
            <div class="row py-5">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-8">
                            <h2>AVALANCHE / BSC SPORE BRIDGE</h2>
                        </div>
                        <div class="col-lg-4 text-right">
                            <button onClick={connectMetaMask} class="btn btn-light">Connect wallet </button>
                        </div>
                    </div>
                    <div class="wrapBridge pt-2">
                        <div class="row rowBridge">
                            <div class="col-lg-6 col-coin pr-lg-0">
                                <div class="card px-lg-5 rounded-0 h-100 avalanche">
                                    <div class="card-body">
                                        <h5 class="card-title"><span>FROM</span> Avalanche </h5>
                                        <p class="card-text">Balance : {this.state.numberOfSporeAVAX}</p>
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="spores" placeholder="0.0" />
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary white" onClick={setMaxSporeAVAX} type="button">MAX</button>
                                            </div>
                                        </div>
                                        <div class="offset-lg-3 col-lg-6 text-center py-1">
                                        <button onClick={approve} class="btn btn-primary" id="approve-btn">APPROVE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-coin pr-lg-0 d-none">
                                <div class="card px-lg-5 rounded-0 h-100 avalanche"  id="reverted-1">
                                    <div class="card-body">
                                        <h5 class="card-title"><span>TO </span>  Avalanche </h5>
                                    </div>
                                </div>
                            </div>
                            <div class="arrow"><button class="btn btn-outline-light inverted" id="btn-arrow"><i class="fa fa-arrow-right"></i></button></div>
                            <div class="col-lg-6 col-coin pl-lg-0" id="reverted-2">
                                <div class="card px-lg-5 rounded-0 h-100 binance">
                                    <div class="card-body">
                                        <h5 class="card-title"><span>TO</span> Binance Smart Chain </h5>
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-coin pl-lg-0 d-none">
                                <div class="card px-lg-5 rounded-0 h-100 binance">
                                    <div class="card-body">
                                        <h5 class="card-title"><span>FROM</span> Binance Smart Chain </h5>
                                        <p class="card-text">Balance : <span id="balance">{this.state.numberOfSporeBSC}</span></p>
                                        <div class="input-group">
                                            <input type="text" class="form-control" id ="spores2" placeholder="0.0" />
                                            <div class="input-group-append">
                                                <button class="btn btn-outline-secondary white" type="button" onClick={setMaxSporeBSC}>MAX</button>
                                            </div>
                                        </div>
                                        <label class="py-2"><input type="checkbox" name="pay-fees-spore" value="1" /> Swap some SPORE for AVAX </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="offset-lg-3 col-lg-6 text-center py-4 col-coin">
                                Transfer fees : {this.state.feesAVAX} AVAX
                                <button onClick={swapFromAVAX} class="btn btn-primary btn-lg w-100" id="swap-btn">TRANSFER</button>
                            </div>
                            <div class="offset-lg-3 col-lg-6 text-center py-4 col-coin d-none">
                                Transfer fees : {this.state.feesBNB} BNB
                                <button onClick={swapFromBSC} class="btn btn-primary btn-lg w-100" id="swap-btn">TRANSFER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
  }
}
