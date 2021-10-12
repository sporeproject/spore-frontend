/// <reference types="react-scripts" />

declare module "@walletconnect/web3-provider";

interface Window {
  web3: any;
  ethereum: any;
  Web3Modal: any;
  Box: any;
  box: any;
  space: any;
  [name: string]: any;
}
