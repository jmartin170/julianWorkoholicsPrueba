import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Login.css';


function Login() {
  
    // Pintamos la caja de login para la versión Desktop //

    const loginJSX =
        <div className="cajaLoginDesk">
            <div className="goBack">
                <Link to="/inicio"> <img src='imagenes/arrowLeft.png' /></Link>
                <p>  <Link to="/inicio">Go back</Link></p>

            </div>
            <h3>Sign in</h3>
            <div className="cajaInputsDesk">

                <div>
                    <p>Username</p>
                    <input></input>
                </div>
                <div>
                    <p>Password</p>
                    <input></input>
                </div>
                <button>Sign in</button>
            </div>
        </div>

    return (
        <>
        
            {loginJSX}
        </>
    )
}

export default Login