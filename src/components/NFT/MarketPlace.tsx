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
    bazaar: Array<any>
}

export const MarketPlaceView = (props: Props) => {

    const [marketPlaceItems, setMarketPlaceItems] = useState<Array<MarketplaceItem>>([])

    const buildMarketPlace = async () => {
        const SporeMarketv1 = new win.web3.eth.Contract(
            SPORE_MARKET_ABI,
            ContractAddesses.AVAX_MARKET_FUJI
        )
        var builder = new Array<MarketplaceItem>()
        for (let i = 0; i <= 72 - 1; i++) {
            if (props.bazaar[i] !== undefined && props.bazaar[i].price > 0) {
                const URI = await SporeMarketv1.methods
                    .tokenURI(i)
                    .call()
                builder.push({ itemId: i, price: props.bazaar[i].price / 10 ** 9, URI: URI } as MarketplaceItem);
                console.log("BUILDER:", builder)
            }
        }
        setMarketPlaceItems(builder)
    }

    useEffect(() => {
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