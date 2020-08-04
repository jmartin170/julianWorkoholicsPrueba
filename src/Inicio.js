import React from 'react';
import Productos from './Productos'
import './Inicio.css';

function Inicio() {

    // Componente de la pantalla de inicio. Versión Móvil y Desktop //

    return (
        <div className="mainInicio">
            <div className="imagenMobile">
                <div className="slogan">
                    <h2>Lorem ipsum</h2>
                    <p>Dolor sit amet consec tetur adipisicing elit.</p>
                </div>
                <div className="nuestrosProductos">
                    <p className="ourProducts">Our products</p>
                    <div className='containerFlecha'>
                        <img src="imagenes/arrowAbajo.png" /></div>


                </div>
            </div>
            <div className="imagenDesktop">
                <div className="slogan">
                    <h2>Lorem ipsum</h2>
                    <p>Dolor sit amet consec tetur adipisicing elit.</p>
                </div>
                <div className="nuestrosProductos">
                    <p className="ourProducts">Our products</p>
                    <div className='containerFlecha'>
                        <img src="imagenes/arrowAbajo.png" /></div>

                </div>
            </div>
            <Productos />
        </div >
    )

}

export default Inicio