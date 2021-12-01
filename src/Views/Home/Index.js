import axios from 'axios'
import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


function Home() {

  const [data, setData] = useState([])
  const dispatch = useDispatch();
  const userLogIn = useSelector(state => state.usuarioLogado)

  async function Get() {
    await axios.get('http://localhost:5000/v1/api')
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
      <div className="container">
        <div className="d-flex my-3">
        {data.map(product => (
          <div className="container card">
            <div key={product.id}>
              <h4>Produto: {product.name}</h4>
              <h5>R$: {product.price}</h5>
              {
                userLogIn > 0 ?
                <button onClick="#" className="btn btn-success mb-3">Comprar</button>
                :
                <Link to='/login' className="btn btn-dark mb-3">Comprar</Link>
              }
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
