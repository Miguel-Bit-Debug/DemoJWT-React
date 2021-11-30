import axios from 'axios'
import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/'
import sha256 from 'crypto-js';

function Home() {

  const [data, setData] = useState([])

  async function Get() {
    var jwtToken = localStorage.getItem('APPLICSTION_AUTHENTICATION')
    await axios.get('http://localhost:5000/v1/api',
    {
      'headers':
      {
        'Authorization':
        `Bearer ${jwtToken}`
      }
      })
      .then((res) => {
        setData(res.data)
      }).catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    Get()
  }, [])

  return (
    <div className="App">
      <Navbar />
      {data.map(product => (
        <div key={product.id}>
          <hr />
          <h4>{product.name}</h4>
          <h5>{product.price}</h5>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Home;
