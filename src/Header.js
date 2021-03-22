// src/Header.js
import './Header.css';

import React from 'react'
import Web3 from 'web3'

function connectMetaMask() {
  if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
      console.log(window.web3.version)
  }
}

async function claimAirdrop(e){
  e.preventDefault();
  connectMetaMask();
  var ABI = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"contrak","internalType":"contract IERC20"}]},{"type":"event","name":"Deposit","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":false},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Withdraw","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":false},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balance","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IERC20"}],"name":"contractaddress","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"deposit","inputs":[{"type":"uint256","name":"_amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"get","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"update","inputs":[{"type":"uint256","name":"_amount","internalType":"uint256"}]}];
  const fairyContract = new window.web3.eth.Contract(ABI, "0xeAdf7D005596dbad55e067C1208080f83258D452")
  var account = await window.web3.eth.getAccounts()
  account = account[0]
  console.log(account)
  try {
    await fairyContract.methods.get().send({"from":account,"gasPrice":470000000000, "gas":200000})
  }catch (error){
    alert(error)
  }
}

function Header() {
  return (
    <div className="Header">
      <h2>Spore Finance</h2>
      <div className="SubHeader">
        <h2><a href="https://app.pangolin.exchange/#/swap?inputCurrency=0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985" target="_blank" rel="noopener noreferrer">Buy Spore</a></h2>
        <h2><a href="https://info.pangolin.exchange/#/token/0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985" target="_blank" rel="noopener noreferrer">Analytics</a></h2>
        <h2><button onClick={claimAirdrop}>Claim Airdrop</button></h2>
      </div>

    </div>
  )
}

export default Header
