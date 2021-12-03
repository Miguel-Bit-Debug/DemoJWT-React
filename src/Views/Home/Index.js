import axios from 'axios'
import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Home() {

  const [data, setData] = useState([])

  const userLogIn = useSelector(state => state.usuarioLogado)

  function Get() {
    axios.get('http://localhost:5000/v1/api')
      .then((res) => {
        setData(res.data)
      }).catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    Get()
  }, [data])

  return (

    <div className="App">
      <Navbar />
      <div className="col-12">
        <div className="row">

      {data.map(product => (
        <div key={product.id}>
            <div className="">
              <div className="col-12">

                <div className="d-flex my-3">
                  <div className="container card">
                    <h4>Produto: {product.name}</h4>
                    <h5>R$: {product.price}</h5>
                    {
                      userLogIn > 0 ?
                      <Link to="#" className="btn btn-success mb-3">Comprar</Link>
                      :
                      <Link to='/login' className="btn btn-dark mb-3">Comprar</Link>
                    }
                  </div>
                </div>
                    </div>
              </div>
            </div>
      ))}
      </div>
      </div>
    </div>
  );
}

export default Home;
