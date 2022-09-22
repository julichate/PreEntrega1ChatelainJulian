import React from 'react';
import DroopDown from './DroopDown';
import Busqueda from './Busqueda';
import NavMenu from './NavMenu';
import ButtonResponsive from './ButtonResponsive';
import CartWidget from './CartWidget';

const Navbar = () => {
const SubDroop = ["Consolas","Juegos","Emuladores","Accesorios"]
  return (
        <>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">La Casa Del Videojuego</a>
      <ButtonResponsive/>
    <div className="collapse navbar-collapse" id="navbarColor03">
      <ul className="navbar-nav me-auto">
        <NavMenu/>
        <DroopDown lista = {SubDroop}/>
        <Busqueda buscar="Quiero jugar a..."/>
      </ul>
        <CartWidget/>
        
    </div>
  </div>
</nav>
         </>
    );
}

export default Navbar;
