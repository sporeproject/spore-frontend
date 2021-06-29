import './contributors.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Contributors = () => {
  const [contrib, setContributors] = useState([]);

  useEffect(() => {
    async function getContributors() {
      getContributorsJson()
    }
    getContributors()
  }, [])

  const getContributorsJson = () => {
    axios.get(
      'https://api.github.com/repos/sporeproject/Spore-frontend/contributors'
    ).then(res => {
      setContributors(res.data);
    });
  }

  return (
    <>
      <div className='col-md-12'>
        {
          contrib.map((data: any) => {
            return <div className='contributor-style' key={data.html_url}>
              <a href={data.html_url} target="_blank" rel="noreferrer">
                <img src={data.avatar_url} alt='' className="pr-1" loading="lazy" />
                <span>{data.login}</span>
              </a>
            </div>
          })
        }
      </div>
    </>
  );

};
export default Contributors;
