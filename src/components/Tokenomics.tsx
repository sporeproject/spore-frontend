import React, { useState } from 'react';
import axios from 'axios';
import { PieChart } from 'react-minimal-pie-chart';

import Web3 from 'web3'
import { useEffect } from 'react';
import { AVAX_SPORE_ABI, BSC_SPORE_ABI } from '../utils/SporeAbis';
import { ContractAddesses } from '../utils/addresses';
import BurnedTokens from './BurnedTokens';
import './Tokenomics.css'

const win = window as any
win.web3 = new Web3('https://bsc-dataseed1.binance.org:443');
win.ava = new Web3('https://api.avax.network/ext/bc/C/rpc');


   
const Tokenomics = () => {
  const [bscBurned, setBscBurned] = useState(-1)
  const [avaBurned, setAvaBurned] = useState(-1)
  const [avaxBridge, setAvaxBridge] = useState(-1)
  const [bscTotalSupply, setBscTotalSupply] = useState(-1)


  const [totalTokenHolders, setTotalTokenHolders] = useState(-1)
  const [totalTokenHoldersBSC, setTotalTokenHoldersBSC] = useState(-1)



  useEffect(() => {
    async function getInfos() {
      
      await getAvaBurned()
      await getAvaxBridge()
      await getBscTotalSupply()
      await getBscBurned ()
 
      await getTokenHolders()

      await getTokenHoldersBSC()
      setInterval(async () => {
        
        await getAvaBurned()
        await getAvaxBridge()
        await getBscTotalSupply()
        await getBscBurned ()
   
        await getTokenHolders()
        await getTokenHoldersBSC()
 
      }, 6000000)
    }
    getInfos()

  }, [])

const getBscBurned = async () => {
  try {
    console.log("getting bsc burned tokens");
    const SporeContract = new win.web3.eth.Contract(
      BSC_SPORE_ABI,
      ContractAddesses.BSC_SPORE_MAINNET
    );

    const bscburn = await SporeContract.methods.balanceOf(ContractAddesses.BSC_SPORE_MAINNET).call();
    setBscBurned(bscburn / (10 ** 9));

  }
  catch (err) {
    console.log("Error getting burned tokens bsc")
  }
}


const getAvaBurned = async () => {
  try {
    console.log("getting avax burned tokens");
    const SporeContract = new win.ava.eth.Contract(
      AVAX_SPORE_ABI,
      ContractAddesses.AVAX_SPORE_MAINNET
    );

    const avaburn = await SporeContract.methods.balanceOf(ContractAddesses.DEAD_ADDRESS).call();
    setAvaBurned(avaburn / (10 ** 9));

  }
  catch (err) {
    console.log("Error getting burned tokens avax")
  }
}

const getAvaxBridge = async () => {
  try {
    console.log("getting avax bridge tokens");
    const SporeContract = new win.ava.eth.Contract(
      AVAX_SPORE_ABI,
      ContractAddesses.AVAX_SPORE_MAINNET
    );

    const avaxbridge = await SporeContract.methods.balanceOf(ContractAddesses.AVAX_BRIDGE_MAINNET).call();
    setAvaxBridge(avaxbridge / (10 ** 9));

  }
  catch (err) {
    console.log("Error getting tokens bridge")
  }
}



const getBscTotalSupply = async () => {
  try {
    console.log("getting bsc total supply");
    const SporeContract = new win.web3.eth.Contract(
      BSC_SPORE_ABI,
      ContractAddesses.BSC_SPORE_MAINNET
    );

    const bsctotalsupply = await SporeContract.methods.totalSupply().call();
    setBscTotalSupply(bsctotalsupply / (10 ** 9));

  }
  catch (err) {
    console.log("Error getting bsc totalSupply")
  }
}

 
 
  const getTokenHolders = async () => {
    console.log("getting token holders avax")
    try {
      const res = await axios.get(
        'https://api.covalenthq.com/v1/43114/tokens/0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985/token_holders/?page-size=999999&key=ckey_a09c56c3188547958bd621253a4'
      )

      if (
        res.data !== undefined &&
        res.data.data !== undefined &&
        res.data.data.items !== undefined
      ) {
        const items = res.data.data.items;
        setTotalTokenHolders(items.length)
      }

    }
    catch (err) {
      console.log("errror getting holders avax", err)
    }

  }
  const getTokenHoldersBSC = async () => {
    try {
      const res = await axios.get(
        'https://api.covalenthq.com/v1/56/tokens/0x33a3d962955a3862c8093d1273344719f03ca17c/token_holders/?page-size=999999&key=ckey_a09c56c3188547958bd621253a4'
      )

      if (
        res.data !== undefined &&
        res.data.data !== undefined &&
        res.data.data.items !== undefined
      ) {
        const items = res.data.data.items;
        setTotalTokenHoldersBSC(items.length)
        console.log('test')
        console.log(res.data.data.items.length)
      }
      else {
        console.log('test')
        console.log(res)
      }
    }
    catch (err) {
      console.log("Error getting token holders bsc")
      ///HARDCODED VALUE
      setTotalTokenHoldersBSC(128979)
    }

  }
  
  const TOTAL_SUPPLY= 100000000000000000
  


  return (
    <section className='tokenomic'>
      <div className='container information py-5'>

      <div className="container mx-0">
          <div className="inner-header w-100 h-100 d-flex flex-column justify-content-center align-items-center">
            <h1 className='feature pb-1'><span>Tokenomics</span></h1>
            
            <div className="text-kecil">
             
            
              </div>
              </div>

          </div>


        <div className='row py-4'>
          <div className='col-md-12 col-lg-4 col-sm-12 text-left'>
            
            <ul className='list-unstyled'>
              <BurnedTokens
                supplyAVA={TOTAL_SUPPLY-avaBurned-avaxBridge}
                supplyBSC={bscTotalSupply-bscBurned}
                burnedTotal= {avaBurned+avaxBridge-bscTotalSupply+bscBurned}
                totalTokenHolders={totalTokenHolders}
                totalTokenHoldersBSC={totalTokenHoldersBSC}
              />
            </ul>
          </div>
          <div className='col-md-12 col-lg-8 col-sm-12 my-5 text-center' id="section-chart">
            <PieChart
              className='chart'
              style={{
                fontFamily:
                  '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
                fontSize: '8px',
                position: 'relative',
                overflow: 'visible'
              }}
              data={[
                { key: 'burnedToken', title: 'Burned Tokens', value: (avaBurned+avaxBridge-bscTotalSupply+bscBurned)/ TOTAL_SUPPLY * 100, color: 'black' },
                { key: 'bscSupply', title: 'BSC supply',  value: (bscTotalSupply-bscBurned)/ TOTAL_SUPPLY * 100, color: '#f3ba2f' },
                { key: 'avaSupply', title: 'Avalanche Supply', value: (TOTAL_SUPPLY-avaBurned-avaxBridge)/ TOTAL_SUPPLY * 100, color: '#e84142' },
              ]}
              radius={PieChart.defaultProps.radius - 6}
              lineWidth={50}
              segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
              // segmentsShift={(index) => (index === selected ? 6 : 0)}
              animate
              label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
              labelPosition={100 - 50 / 2}
              labelStyle={{
                fill: '#fff',
                opacity: 0.75,
                pointerEvents: 'none',
                fontWeight: 'bold'
              }}
            />
            <ul className="chart-caption__list">
              <li className="chart-caption__item">
                <span className="chart-caption__dot chart-caption__dot--bsc"></span>
                <i className="chart-caption__text">BSC Supply</i>
              </li>
              <li className="chart-caption__item">
                <span className="chart-caption__dot chart-caption__dot--alavanche"></span>
                <i className="chart-caption__text">Avalanche Supply</i>
              </li>
              <li className="chart-caption__item">
                <span className="chart-caption__dot"></span>
                <i className="chart-caption__text">Burned Tokens</i>
              </li>
            </ul>
            <ul className="lead">
            <li className="chart-caption__item">
                
                <i className="chart-caption__text">*BSC and Avalanche supplies are both connected by our <a className="bridgeLink" href='/bridge' >Bridge</a></i>
              </li>
            </ul>
          </div>
       
       
        </div>

        
      </div>
    </section>
  );
}

export default Tokenomics
