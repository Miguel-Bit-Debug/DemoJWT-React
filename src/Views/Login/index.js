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
  const [isAdmin, setIsAdmin] = useState()
  const [avatar, setAvatar] = useState()
  const dispatch = useDispatch();


  const user = {
    email: email,
    password: password
  }

  const payload = {
    email: email
  }

  async function accountinfo() {
    await axios.post("http://localhost:5000/v1/AccountInfo", payload)
      .then(res => {
        setAvatar(res.data.avatar)
        var admin = res.data.isAdmin === true ? true : false
        setIsAdmin(admin)
        console.log(isAdmin)
      }).catch(err => {
        console.log(err)
      })
  }

  accountinfo()
  
  async function login() {
    await axios.post("http://localhost:5000/v1/auth/login", user)
    .then(res => {
        localStorage.setItem('APPLICSTION_AUTHENTICATION', res.data.token)
        setUserAuthenticated(true)
        dispatch({ type: 'LOG_IN', usuarioEmail: email, isAdmin: isAdmin })
      }).catch(err => {
        console.log(err)
      })
  }

  const Logout = () => {
    setUserAuthenticated(false)
    localStorage.clear()
  }

  return (
    <div className="">
      {useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/' /> : null}
        <Navbar />
      <div className="main container">
        <div className="login ">
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="form-control email" />
          <input onChange={(e) => setPassword(e.target.value)} type="password" maxLength="16" placeholder="Senha" minLength="6" className="form-control" />
          
              <button className="form-control btn btn-primary" onClick={() => login()}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
