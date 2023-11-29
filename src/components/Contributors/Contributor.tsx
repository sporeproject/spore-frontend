import { useEffect, useState } from 'react';
import axios from 'axios';
import './Contributor.scss';

const API_URL = process.env.REACT_APP_API_URL || "https://frontend-api.sporeproject.org";


export const Contributors = () => {
  const [contrib, setContributors] = useState([]);

  useEffect(() => {
    async function getContributors() {
      getContributorsJson()
    }
    getContributors()
  }, [])

  const getContributorsJson = async ()  => {

    try {
      const endpoint = '/contributors'; // Endpoint path
      const url = `${API_URL}${endpoint}`; // Construct the full URL
      const res = await axios.get(url); // Send the request to the API

      setContributors(res.data)

    }
    catch (err) {
      console.log("errror getting contributors", err)
    }
    
  }

  console.log("contrib" ,contrib)
  
  var coreContributors = contrib.map ((data:any) => {if (data.contributions >13) {return data} else {return null} })
  coreContributors = coreContributors.filter((data:any) => {return data !== null})
  
  return (
    <section className='bg-white min-vh-50 pb-5'>
      <div className='container information py-5'>
        <div className='row py-4'>
          <div className='col-md-12 text-center'>
            <h2 className='feature'>Developers</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 contributors-container'>
            {
              coreContributors.map((data: any) => {
                
                return <div className='contributor-style' key={data.html_url}>
                  <a href={data.html_url} target="_blank" rel="noreferrer">
                    <img src={data.avatar_url} alt='' className="pr-1" loading="lazy" />
                    <span>{data.login}</span>
                  </a>
                </div>
            })
            }
          </div>
        </div>
        <div className='row'>
          <div className='col-md-5 text-left py-4'>
            Complete list and legacy developers <a className="contribs" href="https://github.com/sporeproject/spore-frontend/graphs/contributors">here</a>
          </div>
        </div>
      </div>
    </section>
  );

};
