import React from "react";
import { useContext } from "react";
// import Logo from "../assets/img/back2.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import MyContext from "../MyContext";

const Home = () => {
 const { TrueEstado } = useContext(MyContext);
  
  return (
    <div>      
      <h1 className=" m-3 p-3">¡Bienvenido a Conecta-2!</h1>
      {/* <img src={Logo} alt="marketplace" /> */}
      <Button > VENDE YA!</Button>
      <Link to="/galeria" className="text-white ms-3 text-decoration-none">
        <Button onClick={TrueEstado}>COMPRA AQUI</Button>
      </Link>      
    </div>
  );
};

export default Home;