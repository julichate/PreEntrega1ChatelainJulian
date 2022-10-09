import React from 'react';

const NavMenu = () => {
    return (
        <>
           <li className="nav-item">
          <a className="nav-link active" href="">Home
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">Nintendo</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">Sega</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">PlayStation</a>
        </li> 
        </>
    );
}

export default NavMenu;
