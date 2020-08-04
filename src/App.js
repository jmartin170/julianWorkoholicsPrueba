import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Inicio from './Inicio'


// Puesto que en la versión móvil no existe la ruta '/login', creamos una función que se actualiza al cambiar el tamaño de la pantalla. Al tener esta una anchura menor de 768px en lugar de dibujarse el componente Login se dibuja el componente Inicio //

function UseWindowSize() {

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,

  });

  useEffect(() => {

    function handleResize() {

      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);

  }, []);

  return (

    windowSize.width < 768 ? <Inicio /> : <Login />
  );

}


function App() {
  return (

    <BrowserRouter>
      <Header
      />
      <Route exact path='/'>
        <Inicio />
      </Route>
      <Route path='/inicio'>
        <Inicio />
      </Route>
      <Route path='/login'>
        <UseWindowSize />
      </Route>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
