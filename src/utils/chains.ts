import { IChainData } from './types';

const supportedChains: IChainData[] = [
  {
    name: 'Ethereum Mainnet',
    short_name: 'eth',
    chain: 'ETH',
    network: 'mainnet',
    chain_id: 1,
    chainId: 1,
    network_id: 1,
    rpc_url: 'https://mainnet.infura.io/v3/%API_KEY%',
    rpcUrl: 'https://mainnet.infura.io/v3/%API_KEY%',
    native_currency: {
      symbol: 'ETH',
      name: 'Ethereum',
      decimals: '18',
      contractAddress: '',
      balance: '',
    },
  },
  {
    name: 'Binance Smart Chain',
    short_name: 'bsc',
    chain: 'BSC',
    network: 'mainnet',
    chain_id: 0x38,
    chainId: 0x38,
    network_id: 0x38,
    rpc_url: 'https://bsc-dataseed.binance.org/',
    rpcUrl: 'https://bsc-dataseed.binance.org/',
    blockExploreURL: 'https://bscscan.com',
    native_currency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: '18',
      contractAddress: '',
      balance: '',
    },
  },
  {
    name: 'Avalanche',
    short_name: 'avax',
    chain: 'Avalanche',
    network: 'mainnet',
    chain_id: '0xa86a',
    chainId: '0xa86a',
    network_id: '0xa86a',
    rpc_url: 'https://bsc-dataseed1.defibit.io/',
    rpcUrl: 'https://bsc-dataseed1.defibit.io/',
    blockExploreURL: 'https://cchain.explorer.avax.network/',
    native_currency: {
      name: 'AVAX',
      symbol: 'AVAX',
      decimals: '18',
      contractAddress: '',
      balance: '',
    },
  },
];

export default supportedChains;
