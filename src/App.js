import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import MyContext from './MyContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react';

//importación de vistas 
import Home from './views/Home';
import Login from './views/Login';
import Registro from './views/Registro';
import Perfil from './views/Perfil';
import Formulario from './views/Formulario';
import Galeria from './views/Galeria';
import InfoProducto from './views/InfoProducto';
import Favoritos from './views/Favoritos';
import EnVenta from './views/EnVenta';
import NotFound from './views/NotFound';

//importación de componentes
import BarraNavegacion from './components/Navbar';


function App() {
  const [ products, setProducts ] = useState([]);
  const [ priceFilter, setPriceFilter ] = useState([]);
  const [ minPrice, setMinPrice ] = useState (0);
  const [ maxPrice, setMaxPrice ] = useState (0);
  const globalState = { products, setProducts,
                        priceFilter, setPriceFilter,
                        minPrice, setMinPrice,
                        maxPrice, setMaxPrice };

  //Consumo de Json
  const endpoint = "/examples.json";

  const getProduct = async () => {
    const res = await fetch (endpoint);
    const infoProducts = await res.json();
    
    setProducts(infoProducts)
  };

  useEffect(() => {
    getProduct()
  }, []);

   
  return (
    <div className="App">
      <MyContext.Provider value={ globalState }>
        < BrowserRouter >
          < BarraNavegacion />
            < Routes>
              < Route path="/" element={< Home />} />
              < Route path="/login" element={< Login />} />
              < Route path="/registro" element={< Registro />} />
              < Route path="/perfil" element={< Perfil />} />
              < Route path="/formulario" element={< Formulario />} />
              < Route path="/galeria" element={< Galeria />} />
              < Route path="/infoproducto" element={< InfoProducto />} />
              < Route path="/favoritos" element={< Favoritos />} />
              < Route path="/enventa" element={< EnVenta />} />
              < Route path="*" element={< NotFound />}/>
            </ Routes >    
        </ BrowserRouter >
      </MyContext.Provider>
    </div>
  );
}


export default App;