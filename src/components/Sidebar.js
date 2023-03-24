import React, { useContext } from "react";

import MyContext from "../MyContext";


const Sidebar = () => {
  const { products, setPriceFilter, minPrice, setMinPrice,
          maxPrice, setMaxPrice, TrueEstado, FalseEstado} = useContext(MyContext);

          console.log(minPrice)
          console.log(maxPrice)

  const handleSearch = () => {
    const cardsGalery = products.filter(
    product => product.price >= minPrice && product.price <= maxPrice
  );
  setPriceFilter(cardsGalery)

  if( minPrice === 0 || maxPrice === 0) {
    TrueEstado()
  }
  if( minPrice !== 0 || maxPrice !== 0) {
    FalseEstado()
  } 
  };

  return (
    <div className="price-range">
      <h6>Precio</h6>
      <div>
        <label htmlFor="min-price">Desde</label>
        <br/>
        <input
          id="min-price"
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value || 0) }/>
      </div>
      <div>
        <label htmlFor="max-price">Hasta </label>
        <br/>
        <input
          id="max-price"
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value || 0)}/>
      </div>
      <div>
        <h6>Categoría</h6>
        <select placholder= "Selecciona">
          <option>Hogar</option>
          <option>Mascotas</option>
          <option>Servicios</option>
          <option>Tecnología</option>
          <option>Vestuario</option>
        </select>
      </div>
      <br/>     
      <button onClick={() => handleSearch()}>BUSCAR</button>    
    </div>
  );
}


export default Sidebar;