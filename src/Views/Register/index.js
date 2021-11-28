import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../../Components/Navbar';


export default function Register() {

    const [avatar, setAvatar] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [passwordConfirmation, setPasswordConfirmation] = useState()
    const [userAuthenticated, setUserAuthenticated] = useState(false)
    const dispatch = useDispatch();


    const user = {
        avatar: avatar,
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation
      }


      async function register() {
        await axios.post('http://localhost:5000/v1/auth/register', user)
        .then(res => {
            localStorage.setItem('APPLICSTION_SIGN_TOKEN_AUTHENTICATION_JWT', res.data.token)
            setUserAuthenticated(true)
            console.log(res)
            dispatch({ type: 'LOG_IN', usuarioEmail: email })
        }).catch(err => {
            console.log(err)
        })
      }

    return (
        <div>
            <Navbar />
            {useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/' /> : null}

            <div className="container d-flex">
        <div className="register">

          <input onChange={(e) => setAvatar(e.target.value)} type="text" className="form-control" placeholder="Avatar"/>
          <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="Email"/>
          <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Senha"/>
          <input onChange={(e) => setPasswordConfirmation(e.target.value)} type="password" className="form-control" placeholder="Confirmar Senha"/>
          <button onClick={() => register()} className="btn btn-primary">Cadastrar</button>
        </div>
      </div>
            
        </div>
    )
}