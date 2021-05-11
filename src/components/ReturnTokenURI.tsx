import React from "react";
import Web3 from "web3";
import { useState, useEffect } from 'react';
import { SPORE_MARKET_ABI } from "../utils/SporeAbis";
import { ContractAddesses } from '../utils/addresses';
import { getAccount } from '../utils/wallet';
import ReturnExternalURL from './ReturnExternalURL';

const win = window as any
const docu = document as any

const putNFTForSale = async () => {

  const SporeMarketv1 = new win.web3.eth.Contract(
    SPORE_MARKET_ABI,
    ContractAddesses.AVAX_MARKET_FUJI
  );
  var _tokenIDforSale = docu.getElementById("_tokenIDforSale").value;
  var _price = docu.getElementById("_price").value;

  var account = await getAccount()
  try {
    await SporeMarketv1.methods
      .setTokenPrice(_tokenIDforSale, _price)
      .send({ from: account, gasPrice: 225000000000 });
  } catch (error) {
    alert(error);
  }
}

type Props = {
  tokensOfOwner: Array<any>
}

const ReturnTokenURI = (props: Props) => {
  const [data, setData] = useState(new Array<any>())

  useEffect(() => {
    async function startup() {
      const SporeMarketv1 = new win.web3.eth.Contract(
        SPORE_MARKET_ABI,
        ContractAddesses.AVAX_MARKET_FUJI
      );
      console.log("returntokenURI component");
      console.log(props.tokensOfOwner);
      const promises = [];

      for (let i = 0; i < props.tokensOfOwner.length; i++) {
        console.log("Getting URI for token:", i)
        const promisestokenURIs = await SporeMarketv1.methods
          .tokenURI(props.tokensOfOwner[i])
          .call();
        promises.push(promisestokenURIs);
      }
      console.log("hi0");

      Promise.all(promises).then((values) => {
        console.log("VALUES:", values);
        setData(values)
      });
    }
    startup()


  }, [props.tokensOfOwner])


  return (
    <>
      <ReturnExternalURL jsonData={data} />
      <div className="col-md-12">
        <p className="pt-5">
          You own the IDs:{" "}
          {props.tokensOfOwner.map((ID) => (
            <>{ID},</>
          ))}
        </p>
        <div className="input-group">
          <input type="text" id="_tokenIDforSale" className="form-control float-left" placeholder="NFT_ID" />
          <input type="text" id="_price" className="form-control float-left" placeholder="Price" />
          <div className="input-group-append">
            <button onClick={putNFTForSale} className="btn btn-primary">Put NFT for Sale</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReturnTokenURI