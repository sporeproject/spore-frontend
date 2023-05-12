import React, { useState } from "react";
import Web3 from "web3";
import { useEffect } from 'react';
import { SPORE_MARKET_ABI } from "../../utils/SporeAbis";
import { ContractAddesses } from '../../utils/addresses';
import { getAccount } from '../../utils/wallet';
import { nftmetadata } from '../../utils/nftmetadata';
import { ItemNFT } from './MarketPlace/MarketPlace.style';

const win = window as any
const docu = document as any

const putNFTForSale = async () => {

  const SporeMarketv1 = new win.web3.eth.Contract(
    SPORE_MARKET_ABI,
    ContractAddesses.AVAX_MARKET_MAINNET
  );
  var _tokenIDforSale = docu.getElementById("_tokenIDforSale").value;
  var _price = Web3.utils.toWei(docu.getElementById("_price").value, 'ether');
  //var _price = docu.getElementById("_price").value;

  var account = await getAccount()
  try {
    await SporeMarketv1.methods
      .setTokenPrice(_tokenIDforSale, _price)
      .send({ from: account, gasPrice: 225000000000 });
  } catch (error) {
    alert(error);
  }
}

const cancelNFTForSale = async () => {

  const SporeMarketv1 = new win.web3.eth.Contract(
    SPORE_MARKET_ABI,
    ContractAddesses.AVAX_MARKET_MAINNET
  );
  var _tokenIDforCancel = docu.getElementById("_tokenIDforCancel").value;

  var account = await getAccount()
  try {
    await SporeMarketv1.methods
      .cancelTokenSale(_tokenIDforCancel)
      .send({ from: account, gasPrice: 225000000000 });
  } catch (error) {
    alert(error);
  }
}

type Props = {
  tokensOfOwner: Array<any>
  chainId: any,
  web3: any,
  connected: boolean
  address: string
  onUpdate: Function
}
const findimage = (itemId: number) => {
  var item = Number(itemId) + 1;
  return nftmetadata.filter(x => x.id === item.toString()).map(ext => { return ext.external_url }).toString();
}

const ReturnTokenURI = (props: Props) => {
  const [nftToTransfer, setNftToTransfer] = useState();
  const [addressToTransfer, setAddressToTransfer] = useState('');

  useEffect(() => {
    async function startup() {
      const SporeMarketv1 = new win.web3.eth.Contract(
        SPORE_MARKET_ABI,
        ContractAddesses.AVAX_MARKET_MAINNET
      );
      const promises = [];
      for (let i = 0; i < props.tokensOfOwner.length; i++) {
        const promisestokenURIs = await SporeMarketv1.methods
          .tokenURI(props.tokensOfOwner[i])
          .call();
        promises.push(promisestokenURIs);
      }
    }

    startup()
  }, [props.tokensOfOwner])

  const isNetworkAvalanche = () => Boolean(props.chainId === 0xa86a);

  async function transferNFT() {
    const { address, connected, web3 } = props;
    if (!isNetworkAvalanche()) {
      alert('Please connect to Avalanche Network before buy');
      return;
    }
    if (!connected || !address) {
      alert('Please connect before your walllet');
      return;
    }

    const SporeMarketv1 = new web3.eth.Contract(
      SPORE_MARKET_ABI,
      ContractAddesses.AVAX_MARKET_MAINNET
    );

    try {
      await SporeMarketv1.methods
        .safeTransferFrom(address, addressToTransfer, nftToTransfer)
        .send({ from: address });
      setAddressToTransfer('');
      setNftToTransfer(undefined);
      props.onUpdate()
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <>
      {
        props.tokensOfOwner.map((id) => (
          <div key={id} className="col-md-3 text-center">
            <ItemNFT onClick={() => id}>
              <div className="image-wrapper">
                <img src={findimage(id)} alt="Reload your page" />
              </div>
              <div className="item-description">
                <span >ID: {id}</span>
              </div>
            </ItemNFT>
          </div>
        ))
      }
      <div className="col-md-12">
        <div className="input-group">
          <input type="text" id="_tokenIDforSale" className="form-control float-left" placeholder="NFT_ID" />
          <input type="text" id="_price" className="form-control float-left" placeholder="Price" />
          <div className="input-group-append">
            <button onClick={putNFTForSale} className="btn btn-primary">Put NFT for Sale</button>
            <p> Note: put the amount in AVAX (decimal issue fixed)</p>
          </div>
        </div>

        <div className="input-group">
          <input type="text" id="_tokenIDforCancel" className="form-control float-left" placeholder="NFT_ID" />
          <div className="input-group-append">
            <button onClick={cancelNFTForSale} className="btn btn-primary">Cancel NFT for Sale</button>
          </div>
        </div>

        <div className='pt-4 input-group'>
          <input
            type='number'
            value={nftToTransfer}
            onChange={(event: any) => setNftToTransfer(event.target.value)}
            placeholder='NFT_ID (ex: 0)'
            className='form-control'
          />
          <input
            type='text'
            className="ms-3 form-control"
            value={addressToTransfer}
            onChange={(event: any) => setAddressToTransfer(event.target.value)}
            placeholder='Address to transfer'
          />
          <div className='input-group-append'>
            <button onClick={transferNFT} className='btn btn-primary'>
              Transfer NFT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReturnTokenURI



