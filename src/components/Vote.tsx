import Web3 from "web3";
import './Vote.css';
import { GOVERNOR_ALPHA_ABI} from '../utils/SporeAbis';
import { ContractAddesses } from '../utils/addresses';
import { useState, useEffect } from 'react';



const win = window as any
win.ava = new Web3('https://api.avax.network/ext/bc/C/rpc')




const Vote = (props: any) => {

  const [forVotes, setforVotes] = useState(0);
  const [againstVotes, setagainstVotes] = useState(0);

  useEffect(() => {
    async function startup() {


      const GovernorContract = new win.ava.eth.Contract(
        GOVERNOR_ALPHA_ABI,
        ContractAddesses.AVAX_MAINNET_GOVERNORALPHA
      );

      const proposals = await GovernorContract.methods
        .proposals(5)
        .call();
        console.log(proposals );
       
      setforVotes(proposals.forVotes/ 10 ** 18)
      setagainstVotes(proposals.againstVotes/ 10 ** 18)

    }
    startup()
  }, [])



  const numberWithCommas = (x: number) => {
    return x.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  return (
    <>
      <section className="bg-white" >
        <div className="container py-5">
          <div className="row ">
            <div className="col-md-12">
            
              
                <div className="vote ">
             
              <h1 >Vote for SPORE! </h1>
              </div>
              
              <div className="vote py-3  ">
              <img src="vote.jpg"  alt="Resload your page"  />
             </div> 
            
             <div className="mb-1 col-md-12 py-5">
             <div className="col-md-12 text-justify" >  
                <p>
                Help Spore increase liquidity by voting for us in the Pangolin proposal!  If you had $PNG in you wallet before 00:34 GMT on June 5, 2021, you can vote directly on the Pangolin site  (<a className="link-color" href="https://app.pangolin.exchange/#/vote/5">link</a>). If you need help or have any questions, please ask in <a className="link-color" href="https://t.me/sporefinanceofficial">Telegram</a> or <a className="link-color" href="https://discord.gg/xRrArCTG9Q">Discord</a>.</p>
                  </div>
                  <div className="col-md-12 text-justify">
                  <p> <b>{numberWithCommas(forVotes)}</b> votes have been cast so far in favor of the proposal. Spore has already cast its delegated votes with Pangolin. Voting will continue until June 8, 2021, 00:34 AM GMT. </p>
                  </div>
                  <div className="col-md-12 text-center py-1">
                <h4> Votes For: <b style={{ color: '#265628' }}>{numberWithCommas(forVotes )}  </b> </h4>
                
                  </div>
                  <div className="col-md-12 text-center">
                
                <h4> Votes Against: <b style={{ color: '#992121' }}>{numberWithCommas(againstVotes )}  </b> </h4>
                  </div>

              </div>
                  


                

                <div className="mb-0">

                  <p className="mb-1">
                    <div className="row py-2">
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
      </section>

    </>
  )
}


export default Vote