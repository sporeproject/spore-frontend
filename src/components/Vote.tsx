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
  const [startDate, setStartDate] = useState(0);
  const [endDate, setEndDate] = useState(0);

  useEffect(() => {
    async function startup() {


      const GovernorContract = new win.ava.eth.Contract(
        GOVERNOR_ALPHA_ABI,
        ContractAddesses.AVAX_MAINNET_GOVERNORALPHA
      );

      const proposals = await GovernorContract.methods
        .proposals(5)
        .call();

      console.log("proposals.startTime");
      console.log(proposals.startTime);
      
      
      setStartDate(proposals.startTime*1000);
      setEndDate(proposals.endTime*1000);
      setforVotes(proposals.forVotes/ 10 ** 18);
      setagainstVotes(proposals.againstVotes/ 10 ** 18);

    }
    startup()
  }, [])


  const startdate = new Date(startDate)
  const enddate = new Date(endDate)
  const numberWithCommas = (x: number) => {
    return x.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  const docu = document as any
  // Set the date we're counting down to
  var countDownDate = enddate.getTime();
  
  // Update the count down every 1 second
  var x = setInterval(function() {
  
    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    docu.getElementById("demo").innerHTML = days + "d "+ hours + "h "
    + minutes + "m " + seconds + "s ";
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      docu.getElementById("demo").innerHTML = "VOTING IS FINISHED!";
      
    }
  }, 1000);
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
                Help Spore increase liquidity by voting for us in the Pangolin proposal!  If you had $PNG in you wallet before {startdate.toUTCString()} you can vote directly on the Pangolin site  (<a className="link-color" href="https://app.pangolin.exchange/#/vote/5">link</a>). If you need help or have any questions, please ask in <a className="link-color" href="https://t.me/sporefinanceofficial">Telegram</a> or <a className="link-color" href="https://discord.gg/xRrArCTG9Q">Discord</a>.</p>
                  </div>
                  <div className="col-md-12 text-justify">
                  <p> <b>{numberWithCommas(forVotes)}</b> votes have been cast so far in favor of the proposal. Spore has already cast its delegated votes with Pangolin. Voting will continue until {enddate.toUTCString()}. </p>
                  </div>
                  <div className="col-md-12 text-center py-1">
                <h4> Votes For: <b style={{ color: '#265628' }}>{numberWithCommas(forVotes )}  </b> </h4>
                
                  </div>
                  <div className="col-md-12 text-center">
                
                <h4> Votes Against: <b style={{ color: '#992121' }}>{numberWithCommas(againstVotes )}  </b> </h4>
                  </div>
                  
                  <div className="col-md-12 text-center py-5">
                
                  <h4>Countdown: <p id="demo">{x} </p></h4>
                  </div>

              </div>
                  


                 

                <div className="mb-0">

                  <p className="mb-1">
                    <div className="row py-1">
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