import './BurnedTokens.scss';

interface BurnedTokensInterfaceProps {
  supplyAVA: bigint,
  supplyBSC: bigint,
  burnedTotal: bigint,
  totalTokenHolders:number,
}

const BurnedTokens = ({
  supplyAVA,
  supplyBSC,
  burnedTotal,
  totalTokenHolders,
}: BurnedTokensInterfaceProps) => {
 
  const numberWithCommas = (x: number) => {
    return Number(x).toFixed(0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  const numberWithCommasB = (x: bigint) => {
    return x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  return (
    <>
      <div className="alert alert-dark" role="alert">
        Circulating Supply on Avalanche:<br></br>  <b>{numberWithCommasB(supplyAVA)}</b> 
      </div>
      <div className="alert alert-dark" role="alert">
        Circulating Supply on BSC: <br></br> <b>{numberWithCommasB(supplyBSC)}</b> 
      </div>
      <div className="alert alert-dark" role="alert">
        Total burned:<br></br> <b>{numberWithCommasB(burnedTotal)}</b>
      </div>
     
      <div className="alert alert-dark" role="alert">
        Avalanche holders: <br></br><b>{numberWithCommas(totalTokenHolders)}</b> source: Spore API 🔧
      </div>
      <div className="alert alert-dark" role="alert">
        BSC holders:<br></br> 
        <b>  {numberWithCommas(146417)} </b> source: <b> <a className="bscLink" href="https://bscscan.com/token/0x33a3d962955a3862c8093d1273344719f03ca17c">BSCscan</a> </b>
      </div>
      
    </>
  );
}  


export default BurnedTokens
