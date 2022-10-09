import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css' ;
import Cards from './componentes/Cards';
import Navbar from './componentes/Navbar/Navbar'
import Home from './componentes/Home'
import Producto from './componentes/Producto';
import ItemListContainer from './componentes/ItemListContainer';
const App = () => {
  let mensaje= "Bienvenido/a a la casa del Videojuego. Aquí entontrarás todo lo que necesitas para convertirte en un verdadero GAMMER."
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Producto/id" element={<Producto/>}/>      
        </Routes>
      </BrowserRouter>
      
      
    </>
  );
}

export default App;
