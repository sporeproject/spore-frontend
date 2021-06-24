// src/Footer.js
import './BurnedTokens.css';
import React from 'react';

interface BurnedTokensInterfaceProps {
  supplyAVA: number,
  supplyBSC: number,
  burnedTotal: number,
  totalTokenHolders:number,
  totalTokenHoldersBSC: number,
}

const BurnedTokens = ({
  supplyAVA,
  supplyBSC,
  burnedTotal,
  totalTokenHolders,
  totalTokenHoldersBSC,
}: BurnedTokensInterfaceProps) => {
  

  const numberWithCommas = (x: number) => {
    return x.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  return (
    <>
      <div className="alert alert-dark" role="alert">
        Circulating Supply on Avalanche: <b>{numberWithCommas(supplyAVA)}</b> 
      </div>
      <div className="alert alert-dark" role="alert">
        Circulating Supply on BSC: <b>{numberWithCommas(supplyBSC)}</b> 
      </div>
      <div className="alert alert-dark" role="alert">
        Total burned: <b>{numberWithCommas(burnedTotal)}</b>
      </div>
      <div className="alert alert-dark" role="alert">
        Avalanche holders: <b>{totalTokenHolders}</b>
      </div>
      <div className="alert alert-dark" role="alert">
        BSC holders: <b>{totalTokenHoldersBSC}+ <a className="bscLink" href="https://bscscan.com/token/0x33a3d962955a3862c8093d1273344719f03ca17c">BSCscan</a></b>
      </div>
    </>
  );
}


export default BurnedTokens
