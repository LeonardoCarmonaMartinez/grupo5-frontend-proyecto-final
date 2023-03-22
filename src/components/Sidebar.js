import React from "react";
import MyContext from "../MyContext";
import { useContext } from "react";


const Sidebar = () => {
  const { products, setPriceFilter,minPrice, setMinPrice, maxPrice, setMaxPrice} = useContext(MyContext);

  const handleSearch = () => {
    const cardsGalery = products.filter(
      product => product.price >= minPrice && product.price <= maxPrice
    );
    setPriceFilter(cardsGalery)
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
          onChange={(e) => setMinPrice(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="max-price">hasta:</label>
        <input
          id="max-price"
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}/>
      </div> 
      <button onClick={() => handleSearch()}> Buscar </button>    
    </div>
  );
}


export default Sidebar;