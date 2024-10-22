import React from "react";
import { useState } from "react";

const Form = () => {
  const [todo, setTodo] = useState({
    todoNombre: "",
    todoDescripcion: "",
    todoEstado: ""
  })
}

const handleSubmit = (e) => {
  e.preventDefault();

  console.log(handleSubmit);
  
}

const Contacto = () => {
  return (<>
  <div className="text-3xl font-bold">Contacto</div>
  </>)
};

export default Contacto;
