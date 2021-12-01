import React from 'react'
import Navbar from '../../Components/Navbar';

export default function Logout() {
    return (
        <div>
            <Navbar />
            {document.location.replace('/')}
            {localStorage.clear()}
        </div>
    )
}