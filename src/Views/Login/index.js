import axios from 'axios'
import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom'
import CryptoJS from 'crypto-js';
import './login.css'


function Login() {
  const [userAuthenticated, setUserAuthenticated] = useState(false)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const dispatch = useDispatch();


  const user = {
    email: email,
    password: password
  }

  async function login() {
    await axios.post("http://localhost:5000/v1/auth/login", user)
      .then(res => {
        localStorage.setItem('APPLICSTION_SIGN_TOKEN_AUTHENTICATION_JWT', res.data.token)
        setUserAuthenticated(true)
        dispatch({ type: 'LOG_IN', usuarioEmail: email })
      }).catch(err => {
        console.log(err)
      })
  }

  const Logout = () => {
    setUserAuthenticated(false)
    localStorage.clear()
  }

  return (
    <div className="App">
      {useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/' /> : null}
      <div className="container d-flex">
        <Navbar />
        <div className="login ">
          <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control email" />
          <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" />
          {
            userAuthenticated ?
              <button className="form-control" onClick={() => Logout()}>Logout</button>
              :
              <button className="form-control btn btn-primary" onClick={() => login()}>Login</button>
          }
        </div>
      </div>
    </div>
  );
}

export default Login;
