import { useState } from 'react';
import axios from 'axios';
import { PieChart } from 'react-minimal-pie-chart';

import Web3 from 'web3'
import { useEffect } from 'react';
import './Tokenomics.css'
import BurnedTokens from '../BurnedTokens/BurnedTokens';
import { ContractAddresses } from '../../utils/addresses';
import { AVAX_SPORE_ABI, BSC_SPORE_ABI } from '../../utils/SporeAbis';
import { AVAX_NETWORK_RPC, BSC_NETWORK_RPC } from '../../utils/constants';

//to test api on local environment just load the .env file with the VITE_API_URL variable set on localhost:5001
const API_URL = import.meta.env.VITE_API_URL || "https://frontend-api.spore.ws";

const Tokenomics = () => {
  const win = window as any
  const web3 = new Web3(BSC_NETWORK_RPC);
  const ava = new Web3(AVAX_NETWORK_RPC);
  const [bscBurned, setBscBurned] = useState(0n)
  const [avaBurned, setAvaBurned] = useState(0n)
  const [avaxBridge, setAvaxBridge] = useState(0n)
  const [bscTotalSupply, setBscTotalSupply] = useState(0n)
  const [totalTokenHolders, setTotalTokenHolders] = useState(0)

  useEffect(() => {
    async function getInfos() {
      await getAvaBurned()
      await getAvaxBridge()
      await getBscTotalSupply()
      await getBscBurned()
      await getTokenHolders()


      setInterval(async () => {
        await getAvaBurned()
        await getAvaxBridge()
        await getBscTotalSupply()
        await getBscBurned()

        await getTokenHolders()

      }, 6000000)
    }

    getInfos()
    // eslint-disable-next-line
  }, [])

  const getBscBurned = async () => {
    try {
      const SporeContract = new web3.eth.Contract(
        BSC_SPORE_ABI,
        ContractAddresses.BSC_SPORE_MAINNET
      );

      const bscburn = await SporeContract.methods.balanceOf(ContractAddresses.BSC_SPORE_MAINNET).call() as bigint;
      setBscBurned(bscburn / (10n ** 9n));
    }
    catch (err) {
      console.log("Error getting burned tokens bsc")
    }
  }

  const getAvaBurned = async () => {
    try {
      const SporeContract = new ava.eth.Contract(
        AVAX_SPORE_ABI,
        ContractAddresses.AVAX_SPORE_MAINNET
      );

      const avaburn = await SporeContract.methods.balanceOf(ContractAddresses.DEAD_ADDRESS).call() as bigint;
      setAvaBurned(avaburn / (10n ** 9n));

    }
    catch (err) {
      console.log("Error getting burned tokens avax")
    }
  }

  const getAvaxBridge = async () => {
    try {
      const SporeContract = new win.ava.eth.Contract(
        AVAX_SPORE_ABI,
        ContractAddresses.AVAX_SPORE_MAINNET
      );

      const avaxbridge = await SporeContract.methods.balanceOf(ContractAddresses.AVAX_BRIDGE_MAINNET).call() as bigint;
      setAvaxBridge(avaxbridge / (10n ** 9n));

    }
    catch (err) {
      console.log("Error getting tokens bridge")
    }
  }

  const getBscTotalSupply = async () => {
    try {
      const SporeContract = new web3.eth.Contract(
        BSC_SPORE_ABI,
        ContractAddresses.BSC_SPORE_MAINNET
      );

      const bsctotalsupply = await SporeContract.methods.totalSupply().call() as bigint;
      setBscTotalSupply(bsctotalsupply / (10n ** 9n));

    }
    catch (err) {
      console.log("Error getting bsc totalSupply")
    }
  }

  const getTokenHolders = async () => {
    try {
      const endpoint = '/avax-holders'; // Endpoint path
      const url = `${API_URL}${endpoint}`; // Construct the full URL
      const res = await axios.get(url); // Send the request to the API

      setTotalTokenHolders(res.data)

    }
    catch (err) {
      console.log("errror getting holders avax", err)
    }
  }


  const TOTAL_SUPPLY = 100000000000000000n

  return (
    <section className='tokenomic'>
      <div className='container information py-5'>
        <div className="container mx-0">
          <div className="inner-header w-100 h-100 d-flex flex-column justify-content-center align-items-center">
            <h1 className='feature pb-1'><span>Tokenomics</span></h1>
            <div className="text-kecil"></div>
          </div>
        </div>

        <div className='row py-4'>
          <div className='col-md-12 col-lg-4 col-sm-12 text-left'>
            <ul className='list-unstyled'>
              <BurnedTokens
                supplyAVA={TOTAL_SUPPLY - avaBurned - avaxBridge}
                supplyBSC={bscTotalSupply - bscBurned}
                burnedTotal={avaBurned + avaxBridge - bscTotalSupply + bscBurned}
                totalTokenHolders={totalTokenHolders}
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
                { key: 'burnedToken', title: 'Burned Tokens', value: (Number((avaBurned + avaxBridge - bscTotalSupply + bscBurned)) / Number(TOTAL_SUPPLY * 100n)), color: 'black' },
                { key: 'bscSupply', title: 'BSC supply', value: (Number(bscTotalSupply - bscBurned) / Number(TOTAL_SUPPLY * 100n)), color: '#f3ba2f' },
                { key: 'avaSupply', title: 'Avalanche Supply', value: (Number(TOTAL_SUPPLY - avaBurned - avaxBridge) / Number(TOTAL_SUPPLY * 100n)), color: '#e84142' },
              ]}
              // radius={PieChart.defaultProps.radius - 6}
              radius={44}
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
