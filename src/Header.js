import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Login from './Login';
import LoginMovil from './LoginMovil'
import './Header.css'

function Header(props) {
    // definimos estados del menú y de la hamburguesa (icono para abrir el menú) //

    let [estadoMenu, setEstadoMenu] = useState('navylogin');
    let [hamburguesa, setHamburguesa] = useState('hamburger')
    const path = window.location.pathname;

    const barClose = {
        opacity: '0',
        transition: 'opacity 0.5s ease-in'
    }
    const barOpen = {
        opacity: '1'
    }
    let [estadoBar, setEstadoBar] = useState(barClose)
    const body = document.body;

    // función para cambiar el estado del menú. Menú abierto/menu cerrado. Cambia el estado de las clases (debido a que se utiliza animación)//

    function cambioMenu() {

        if (estadoMenu === 'navylogin') {
            setEstadoMenu('navylogin open')
            setEstadoBar(barOpen)
            setHamburguesa('hamburger open')
        } else {
            setEstadoMenu('navylogin')
            setEstadoBar(barClose)
            setHamburguesa('hamburger')
        }

        body.classList.toggle('noscroll');

    }

    const [scrollPosition, setScrollPosition] = useState(0);
    
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // constante JSX: pintamos el menú para la versión móvil//

    const menuMovilJSX =
        <>
            {scrollPosition === 0?<div className={hamburguesa} onClick={cambioMenu}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>:<div className='hamburgerStop'>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>}
            <div className={estadoMenu}>
                <nav className='navBar' style={estadoBar}>
                    <ul>
                        <li><a>Products</a></li>
                        <li><a>About us</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </nav>
                <LoginMovil />
            </div>

        </>

    // mediante esta función componente hacemos desaparecer y aparecer el párrafo Sign In de la versión Desktop según la ruta en la que nos encontremos //

    function LinkJSX() {
        if (path === '/inicio' || path === '/' || path === '') {
            return (
                <Link to='/login' className="signIn" >Sign in</Link>
            )
        } else if (path === '/login') {
            return (
                null
            )
        }
    }

    return (

        <div className="encabezado">

            <h1 className="titulo"><Link to='/inicio' >Lorem</Link></h1>
            <div className="circulogo"></div>

            <LinkJSX />

            {menuMovilJSX}

        </div>


    )
}

export default withRouter(Header)