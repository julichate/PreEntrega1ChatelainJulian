import React from 'react';

const Busqueda = ({buscar}) => {
    return (
        <>
          <form id= "FormBusqueda"className="d-flex">
            <input className="form-control me-sm-2" type="text" placeholder = {buscar} />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
          </form>  
        </>
    );
}

export default Busqueda;
