import React from 'react';
import './App.css' ;
import Cards from './componentes/Cards';
import Navbar from './componentes/Navbar/Navbar'

import ItemListContainer from './componentes/ItemListContainer';
const App = () => {
  let mensaje= "Bienvenido/a a la casa del Videojuego. Aquí entontrarás todo lo que necesitas para convertirte en un verdadero GAMMER."
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting = {mensaje}/>
      <div className="divProductos">
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
      </div>
      
    </>
  );
}

export default App;
