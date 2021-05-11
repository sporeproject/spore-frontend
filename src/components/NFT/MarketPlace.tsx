import React, { useEffect } from 'react';
import { useState } from 'react';
import { ContractAddesses } from '../../utils/addresses';
import { SPORE_MARKET_ABI } from '../../utils/SporeAbis';
import ReturnExternalURL from './ReturnExternalURL';


const win = window as any
export interface MarketplaceItem {
    itemId: number,
    price: number,
    URI: string
}

type Props = {
    bazaar: Array<any>,
    totalCharacters: number
}

export const MarketPlaceView = (props: Props) => {

    const [marketPlaceItems, setMarketPlaceItems] = useState<Array<MarketplaceItem>>([])


    useEffect(() => {

        async function buildMarketPlace() {
            const SporeMarketv1 = new win.web3.eth.Contract(
                SPORE_MARKET_ABI,
                ContractAddesses.AVAX_MARKET_FUJI
            )
            var builder = new Array<MarketplaceItem>()
            for (let i = 0; i <= props.totalCharacters - 1; i++) {
                if (props.bazaar[i] !== undefined && props.bazaar[i].price > 0) {
                    const URI = await SporeMarketv1.methods
                        .tokenURI(props.bazaar[i][2])
                        .call()
                    builder.push({ itemId: i, price: props.bazaar[i].price / 10 ** 9, URI: URI } as MarketplaceItem);
                    console.log("BUILDER:", builder)
                    setMarketPlaceItems(builder)
                }
            }

        }
        buildMarketPlace()
    })

    return (
        <>
            {marketPlaceItems.length > 0 ? (
                marketPlaceItems.map((item) => (
                    <li key={item.itemId}>
                        {/* <img className="rounded shadow" src={item[2].image} height="200" /> */}
                        <ReturnExternalURL jsonData={[item.URI]} />
                        <p>ID: {item.itemId}</p>
                        <p>Price: {item.price} AVAX</p>

                    </li>
                ))) : (
                <p> No NFTs for Sale </p>
            )}
        </>
    )
}