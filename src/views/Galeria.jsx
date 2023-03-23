import React from 'react';
import { useContext } from "react";
//import { useParams } from 'react-router-dom';
import MyContext from "../MyContext";

import Sidebar from '../components/Sidebar';
import Cards from '../components/Cards';



const Galeria = () => {
  const { products,  priceFilter, changeState} = useContext(MyContext);

  console.log(changeState)

  if(changeState === true) {
    return (    
      <div>
         <aside>
            < Sidebar />
          </aside>    
        {products.map(product =>
         <main>
            < Cards 
              key = {product.id}
              img = {product.img} 
              name = {product.name}
              category = {product.category} 
              price = {product.price} />
          </main>
        )}
      </div>
    )
  }
  else {
    return (
      <div>
        <aside>
          < Sidebar />
        </aside>    
        {priceFilter.map(p =>
          <main>
            < Cards 
              key = {p.id}
              img = {p.img} 
              name = {p.name}
              category = {p.category} 
              price = {p.price} />
          </main>
        )}
      </div>        
    )
  }
};

export default Galeria;