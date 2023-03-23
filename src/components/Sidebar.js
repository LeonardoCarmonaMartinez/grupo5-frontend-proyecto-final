import React from "react";
import { useContext } from "react";
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
      <h1>Precio</h1>
      <div>
        <label htmlFor="min-price">desde:</label>
        <input
          id="min-price"
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value || 0) }/>
      </div>
      <div>
        <label htmlFor="max-price">hasta:</label>
        <input
          id="max-price"
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value || 0)}/>
      </div>
      <button onClick={() => handleSearch()}>BUSCAR</button>    
    </div>
  );
}


export default Sidebar;