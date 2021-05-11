import React from "react";
import { useState, useEffect } from 'react';


type Props = {
    jsonData: any
}
const ReturnExternalURL = (props: Props) => {
    const [data, setData] = useState<Array<any>>([])

    useEffect(() => {
        async function startup() {
            const returnData = [];
            console.log("beforee res");
            console.log(props.jsonData);

            for (let i = 0; i < props.jsonData.length; i++) {

                const res = await fetch(props.jsonData[i])
                    .then(response => { return response.json() })
                console.log("resext");
                console.log(res)
                console.log(res.external_url);
                returnData.push(res.external_url)
            }
            console.log("before res");
            console.log(returnData)
            setData(returnData)
        }
        startup()
    }, [props.jsonData])


    return (

        <>
            {data.map((image) => (
                <div key={image} className="col-md-3 text-center"><img className="rounded shadow" src={image} height="200" /></div>
            ))}
        </>

    )



}
export default ReturnExternalURL