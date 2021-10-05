import { IChainData } from './types';
import supportedChains from './chains';

export function ellipseAddress(
  address: string = '',
  width: number = 10
): string {
  return `${address.slice(0, width)}...${address.slice(-width)}`;
}

export function padLeft(n: string, width: number, z?: string): string {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

export function getChainData(chainId: number): IChainData {
  const chainData = supportedChains.filter(
    (chain: any) => Number(chain.chain_id) === Number(chainId)
  )[0];

  if (!chainData) {
    throw new Error('ChainId missing or not supported');
  }

  const API_KEY = '3dd9be7637c24ef6938fad45f832b2ce';

  if (
    chainData.rpc_url.includes('infura.io') &&
    chainData.rpc_url.includes('%API_KEY%') &&
    API_KEY
  ) {
    const rpcUrl = chainData.rpc_url.replace('%API_KEY%', API_KEY);

    return {
      ...chainData,
      rpc_url: rpcUrl,
    };
  }
  return chainData;
}
