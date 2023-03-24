import React, { useContext }from 'react';

import MyContext from "../MyContext";

//Importación de componentes
import Sidebar from '../components/Sidebar';
import Cards from '../components/Cards';



const Galeria = () => {
  const { products,  priceFilter, changeState} = useContext(MyContext);

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