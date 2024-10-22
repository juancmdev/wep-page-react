import React from "react";
import { useState } from "react";

const Form = () => {
  const [todo, setTodo] = useState({
    todoNombre: "",
    todoApellido: "",
    todoEstado: "pendiente",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(todo);
  };

  return (
    <div className="my-3 mx-5">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Nombre"
          name="nombre"
          value={todo.todoNombre}
          onChange={(e) => setTodo({...todo, todoNombre: e.target.value})}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Apellido"
          name="apellido"
          value={todo.todoApellido}
          onChange={(e) => setTodo({...todo, todoApellido: e.target.value})}
        />
      </form>
    </div>
  );
};

export default Form;
