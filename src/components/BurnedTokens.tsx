// src/Footer.js
import './BurnedTokens.css';

import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const TOTAL_SUPPLY = 100000000000000000;

const BurnedTokens = () => {
  const [numberOfBurnedTokens, setNumberOfBurnedTokens] = useState("-1")
  const [percentageOfBurnedTokens, setPercentageOfBurnedTokens] = useState("-1")
  const [numberOfTokenHolders, setNumberOfTokenHolders] = useState("-1")

  useEffect(() => {
    async function getInfos() {
      await getBurnedTokens()
      await getTokenHolders()
      setInterval(async () => {
        await getBurnedTokens()
        await getTokenHolders()
      }, 60000)
    }
    getInfos()

  }, [])

  const getBurnedTokens = async () => {
    const res = await axios.get(
      'https://api.covalenthq.com/v1/43114/address/0x000000000000000000000000000000000000dEaD/balances_v2/?nft=false'
    );

    if (
      res.data !== undefined &&
      res.data.data !== undefined &&
      res.data.data.items !== undefined
    ) {
      const items = res.data.data.items;
      items.forEach((coin: any) => {
        if (coin.contract_address === '0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985') {
          setNumberOfBurnedTokens(numberWithCommas((coin.balance / 10 ** 9).toFixed(0)))
          setPercentageOfBurnedTokens(((coin.balance / 10 ** 9 / TOTAL_SUPPLY) * 100).toFixed(2))
        }
      })
    }
  }

  const getTokenHolders = async () => {
    const res = await axios.get(
      'https://api.covalenthq.com/v1/43114/tokens/0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985/token_holders/?page-size=999999'
    )

    if (
      res.data !== undefined &&
      res.data.data !== undefined &&
      res.data.data.items !== undefined
    ) {
      const items = res.data.data.items;
      setNumberOfTokenHolders(items.length)
    }
  }

  const numberWithCommas = (x: string) => {
    return x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
  return (
    <>
      <li>
        Burned Tokens : <b>{numberOfBurnedTokens}</b> SPORE
      </li>
      <li>
        % of Burned Tokens : <b>{percentageOfBurnedTokens}</b> %
      </li>
      <li>
        Number of token holders : <b>{numberOfTokenHolders}</b>
      </li>
    </>
  );
}


export default BurnedTokens
