import React from 'react';
import { useContext } from "react";
import MyContext from "../MyContext";

import Sidebar from '../components/Sidebar';
import Cards from '../components/Cards';



const Galeria = () => {
  const {priceFilter} = useContext(MyContext);
 

    return (
    <div>
      <aside>
      < Sidebar />
      </aside>      
      <main>
        {priceFilter.map(prod =>
          < Cards key={prod.id}
              img={prod.img} 
              name={prod.name} 
              category={prod.category} 
              price={prod.price}/>
        )} 
      </main>
              
  </div>
  );
};

export default Galeria;