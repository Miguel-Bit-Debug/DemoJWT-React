import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';


export default function Navbar() {
    const dispatch = useDispatch();

    return (
        <div className="d-flex">
            <nav className="nav navbar ">
                <li className="nav-item"><Link to="/" className="nav-link font-weight-bold text-danger h5">Home</Link></li>
                {

                    useSelector(state => state.usuarioLogado) > 0 ?
                        <li className="nav-item"><Link to="/Logout" className="nav-link font-weight-bold text-danger h5" onClick={() => dispatch({type: 'LOG_OUT'})}>Logout</Link></li>
                        :
                        <>
                            <li className="nav-item"><Link to="/register" className="nav-link font-weight-bold text-danger h5">Cadastrar-se</Link></li>
                            <li className="nav-item"><Link to="/login" className="nav-link font-weight-bold text-danger h5">Login</Link></li>
                        </>
                }

                {
                    useSelector(state => state.isAdmin) == true ?
                    <li className="nav-item"><Link to="/Logout" className="nav-link font-weight-bold text-danger h5" onClick={() => dispatch({type: 'LOG_OUT'})}>adicionar produtos</Link></li>
                    :
                    <>
                    </>
                }
            </nav>
        </div>
    )
}