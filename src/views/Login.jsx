import React, { useState, useContext } from 'react';

import MyContext from '../MyContext';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Login = () => {
  const { users } = useContext(MyContext);

  const [ correoIngresado, setCorreoIngresado ] = useState("");
  const [ contrasenaIngresada, setContrasenaIngresada ] = useState("");
  const [ infologinUsers, setInfoLoginUsers ] = useState([]);
  const [ err, setErr ] = useState(false);

  const validarLogin = (e) => {
    e.preventDefault()
    if( correoIngresado === "" || contrasenaIngresada === "" ) 
      { setErr(true)}
  };

  const InfoUsers = users.map(us => {
    return{
      idLogin    : us.id_usuario,
      emailLogin : us.correo,
      passLogin  : us.contrasena
    }}
   )
   setInfoLoginUsers(InfoUsers)


  return (
    <Form onSubmit={validarLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email"
                      placeholder="Correo electrónico"
                      onChange ={(e) => setCorreoIngresado(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password"
                      placeholder="Contraseña"
                      onChange ={(e) => setContrasenaIngresada(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Iniciar Sesión 
      </Button>
      {err ? <p>Debes ingresar todos los datos</p> : null}
      {/* {incorrecto ? <p>Los datos ingresados son incorrectos</p> : null} */}
    </Form>
  );
};

export default Login;