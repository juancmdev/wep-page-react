import React from "react";
import { useState } from "react";

const Form = () => {
  const [todo, setTodo] = useState({
    todoNombre: "",
    todoDescripcion: "",
    todoEstado: ""
  })
}

const Contacto = () => {
  return (<>
  <div className="text-3xl font-bold">Contacto</div>
  </>)
};

export default Contacto;
