import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import MyContext from './MyContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react';

//importación de vistas 
import Home from './views/Home';
import Login from './views/Login';
import Registro from './views/RegistroUsuario';
import Perfil from './views/MiPerfil';
import Formulario from './views/FormProducts';
import Galeria from './views/Galeria';
import InfoProducto from './views/InfoProducto';
import EnVenta from './views/EnVenta';
import NotFound from './views/NotFound';

//importación de componentes
import BarraNavegacion from './components/Navbar';


function App() {

  const TrueEstado = () => {
    const valorTrue = true;
    setChangeState(valorTrue)
  };

  const FalseEstado = () => {
    const valorFalse = false;
    setChangeState(valorFalse)
  };

  const [ products, setProducts ] = useState([]);
  const [ priceFilter, setPriceFilter ] = useState([]);
  const [ changeState, setChangeState ] = useState("");
  const [ minPrice, setMinPrice ] = useState (0);
  const [ maxPrice, setMaxPrice ] = useState (0);
  const [ exito, setExito ] = useState(false);

  const globalState = { products, setProducts,
                        priceFilter, setPriceFilter,
                        changeState, setChangeState,
                        minPrice, setMinPrice,
                        maxPrice, setMaxPrice,
                        exito, setExito,
                        TrueEstado, FalseEstado};

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
              < Route path="/infoproducto/:id" element={< InfoProducto />} />
              < Route path="/enventa" element={< EnVenta />} />
              < Route path="*" element={< NotFound />}/>
            </ Routes >    
        </ BrowserRouter >
      </MyContext.Provider>
    </div>
  );
}


export default App;