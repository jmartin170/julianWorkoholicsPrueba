import React, { useState } from 'react';
import './Productos.css';


function Productos() {

    // definimos un array con la información sobre los productos //
    const imgcolores = [
        { titulo: 'Producto 1', descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos corrupti consectetur at?', img: "imagenes/iphone-silver.png", color: 'silver' }, { titulo: 'Producto 2', descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos corrupti consectetur at?', img: "imagenes/iphone8-gold.png", color: 'gold' }];

    // definimos los estados para el cambio de color. En un primer lugar para el div superior y en segundo lugar para el div inferior. Puesto que se utiliza una transición para pasar de un producto a otro el cambio de estado se realiza mediante clases asignadas (se intercambian). No se sustituye un producto por otro sino que uno de ellos permanece 'escondido' mediante opacidad //

    let [opcionSelect, setOpcionSelect] = useState('silver1')
    let [claseProducto, setClaseProducto] = useState('producto1')
    let [claseProductoHide, setClaseProductoHide] = useState('producto1 hide')
    let [claseImagen, setClaseImagen] = useState('imagenIphone')
    let [claseImagenHide, setClaseImagenHide] = useState('imagenIphone hide')
    let [claseTitulo, setClaseTitulo] = useState('tituloProducto')
    let [claseTituloHide, setClaseTituloHide] = useState('tituloProducto hide')

    let [opcionSelectDown, setOpcionSelectDown] = useState('gold2')
    let [claseProductoDown, setClaseProductoDown] = useState('producto2')
    let [claseProductoHideDown, setClaseProductoHideDown] = useState('producto2 hide')
    let [claseImagenDown, setClaseImagenDown] = useState('imagenIphone2')
    let [claseImagenHideDown, setClaseImagenHideDown] = useState('imagenIphone2 hide')
    let [claseTituloDown, setClaseTituloDown] = useState('tituloProducto2')
    let [claseTituloHideDown, setClaseTituloHideDown] = useState('tituloProducto2 hide')


    // función que modifica la clase de los divs y nos muestra el producto del color seleccionado //

    function selectColor(event) {
        let colorSelect;
        let num;
        colorSelect = event.target.value;
        num = event.target.id;
        if (colorSelect === 'silver1' || colorSelect === 'gold1') {
            if (colorSelect === opcionSelect) {
                setClaseProducto(claseProducto)
                setClaseProductoHide(claseProductoHide)
                setClaseImagen(claseImagen)
                setClaseImagenHide(claseImagenHide)
                setClaseTitulo(claseTitulo)
                setClaseTituloHide(claseTituloHide)
                setOpcionSelect(colorSelect)
            } else {
                setClaseProducto(claseProductoHide)
                setClaseProductoHide(claseProducto)
                setClaseImagen(claseImagenHide)
                setClaseImagenHide(claseImagen)
                setClaseTitulo(claseTituloHide)
                setClaseTituloHide(claseTitulo)
                setOpcionSelect(colorSelect)
            }
        } else if (colorSelect === 'silver2' || colorSelect === 'gold2') {
            if (colorSelect === opcionSelectDown) {
                setClaseProductoDown(claseProductoDown)
                setClaseProductoHideDown(claseProductoHideDown)
                setClaseImagenDown(claseImagenDown)
                setClaseImagenHideDown(claseImagenHideDown)
                setClaseTituloDown(claseTituloDown)
                setClaseTituloHideDown(claseTituloHideDown)
                setOpcionSelectDown(colorSelect)
            } else {
                setClaseProductoDown(claseProductoHideDown)
                setClaseProductoHideDown(claseProductoDown)
                setClaseImagenDown(claseImagenHideDown)
                setClaseImagenHideDown(claseImagenDown)
                setClaseTituloDown(claseTituloHideDown)
                setClaseTituloHideDown(claseTituloDown)
                setOpcionSelectDown(colorSelect)
            }

        }



    }

    // constante para dibujar el div de los dos botones que permiten cambiar el color en el div superior //
    const coloresUpJSX =
        <div className="colores">
            <strong><p>Color: </p></strong>
            <div onChange={selectColor} className="botonesColor" >
                <input type='radio' className="btnColor colorSilver" value="silver1" checked={opcionSelect === 'silver1'} defaultChecked />
                <input type='radio' className="btnColor colorGold" value="gold1" checked={opcionSelect === 'gold1'} />
            </div>
        </div>
    
      // constante para dibujar el div de los dos botones que permiten cambiar el color en el div inferior //
    const coloresDownJSX =
        <div className="colores">
            <strong><p>Color: </p></strong>
            <div onChange={selectColor} className='botonesColor'>
                <input type='radio' className="btnColor colorGold" value="gold2" checked={opcionSelectDown === 'gold2'} defaultChecked />
                <input type='radio' className="btnColor colorSilver" value="silver2" checked={opcionSelectDown === 'silver2'} />
            </div>

        </div>
   
   // pintamos el resultado conjunto de los productos
    const iphoneJSX =
        <>
            <h4>Featured Products</h4>
            <div className="productos">

                <div className="productosUp">
                    <div className={claseProducto}>
                        <div className={claseImagen}>
                            <img src={imgcolores[0].img} />
                        </div>
                        <div>
                            <div className={claseTitulo}>
                                <h5>{imgcolores[0].titulo}</h5>
                                <p >{imgcolores[0].descripcion}</p>
                            </div>
                            {coloresUpJSX}
                        </div>

                    </div>
                    <div className={claseProductoHide}>
                        <div className={claseImagenHide}>
                            <img src={imgcolores[1].img} />
                        </div>
                        <div>
                            <div className={claseTituloHide}>
                                <h5 >{imgcolores[1].titulo}</h5>
                                <p>{imgcolores[1].descripcion}</p>
                            </div>
                            {coloresUpJSX}
                        </div>
                    </div>


                </div>
                <div className="productosDown">
                    <div className={claseProductoDown}>
                        <div className={claseImagenDown}>
                            <img src={imgcolores[1].img} />
                        </div>
                        <div>
                            <div className={claseTituloDown}>
                                <h5>{imgcolores[1].titulo}</h5>
                                <p >{imgcolores[1].descripcion}</p>
                            </div>
                            {coloresDownJSX}
                        </div>

                    </div>
                    <div className={claseProductoHideDown}>
                        <div className={claseImagenHideDown}>
                            <img src={imgcolores[0].img} />
                        </div>
                        <div>
                            <div className={claseTituloHideDown}>
                                <h5 >{imgcolores[0].titulo}</h5>
                                <p>{imgcolores[0].descripcion}</p>
                            </div>
                            {coloresDownJSX}

                        </div>
                    </div>
                </div>
            </div>
        </>


    return (
        <>
            {iphoneJSX}
        </>

    )
}

export default Productos