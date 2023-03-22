import React from "react";
import Logo from "../assets/img/back2.png";

const Home = () => {
  
  return (
    <div>      
      <h1 className=" m-3 p-3">¡Bienvenido a Conecta-2!</h1>
      <img src={Logo} alt="marketplace" />
    </div>
  );
};

export default Home;