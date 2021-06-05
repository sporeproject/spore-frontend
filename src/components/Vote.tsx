import Web3 from "web3";
import './Vote.css';
import { GOVERNOR_ALPHA } from '../utils/SporeAbis';
import { useState, useEffect } from 'react';
import { ContractAddesses } from '../utils/addresses';

const win = window as any
win.ava = new Web3('https://api.avax.network/ext/bc/C/rpc')




const Vote = (props: any) => {



  const [forVotes, setforVotes] = useState(0);

  useEffect(() => {
    async function startup() {

      

    

      const GovernorContract = new win.ava.eth.Contract(
        GOVERNOR_ALPHA,
        ContractAddesses.AVAX_MAINNET_GOVERNORALPHA
      );

      

      
      const proposals = await GovernorContract.methods
        .proposals(5)
        .call();


      
      setforVotes(proposals.forVotes/ 10 ** 18)

    }
    startup()
  }, [])



  const numberWithCommas = (x: number) => {
    return x.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  return (
    <>
      <section className="bg-white" id="claim">
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-md-12">
              <div>
                <p className="vote">
             
              <h1 >Vote for SPORE! </h1>
              </p>
              
              <div className="col-md-12 vote  ">
              <img src="vote.jpg"  alt="Resload your page"  />
             </div> 
             
             <div className="mb-1 col-md-12 ">
             <div className="col-md-12 text-center">  
                <p>
                  Help Spore increase liquidity  by voting for us in the Pangolin proposal! All PNG holders can vote for Spore directly on the Pangolin site (<a className="link-color" href="https://app.pangolin.exchange/#/vote/5">link</a>). </p>
                  </div>
                  <div className="col-md-12 text-center">
                  <p> <b>{numberWithCommas(forVotes)}</b> votes have been done supporting the proposal. Voting will continue until June 8, 2021, 00:34 AM GMT </p>
                  </div>
                  <div className="col-md-12 text-center">
                <p> If you need help or have any questions, please ask in <a className="link-color" href="https://t.me/sporefinanceofficial">Telegram</a> or <a className="link-color" href="https://discord.gg/xRrArCTG9Q">Discord</a> .</p>
                
                  </div>
              </div>
                  


                

                <div className="mb-0">

                  <p className="mb-1">
                    <div className="row py-5">
                      <div className="col-md-12 text-center">
                        <h4>Thank you for your support! </h4>
                        <h4>  &#127812; 🚀 </h4>
                      </div>


                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}


export default Vote