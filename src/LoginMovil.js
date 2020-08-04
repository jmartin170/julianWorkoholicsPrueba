import React, {useState} from 'react';
import './Login.css'

function LoginMovil () {

    // definimos los estados de login para versión móvil: login abierto y cerrado //

    let [estadoLogin, setEstadoLogin] = useState('loginMovil')
    let [arrow, setArrow] = useState('arrow')
    let [clickLogin, setClickLogin] = useState('clickLogin')


    // función para cambiar el estado del login: desplegado o cerrado //
    
    function cambiarLogin() {
        if (estadoLogin === 'loginMovil') {
            setEstadoLogin('loginMovil open')
            setArrow('arrow down')
            setClickLogin('clickLogin open')
        } else {
            setEstadoLogin('loginMovil')
            setArrow('arrow')
            setClickLogin('clickLogin')
        }

    }

    // pintamos la caja de login en versión móvil //
    
    const loginMovilJSX =
        <div className={estadoLogin}>
            <div className={clickLogin}>
                <p>Sign in</p>
                <div onClick={cambiarLogin} className={arrow}></div>

            </div>
            <div className="cajaLoginMovil">
                <div className="cajaInputs">
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

        </div>

        return (
            <>
            {loginMovilJSX}
            </>
        )
}

export default LoginMovil