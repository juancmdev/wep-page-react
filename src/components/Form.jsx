import React from "react";
import { useState } from "react";

const Form = () => {
    const [todo, setTodo] = useState({
        todoNombre: "",
        todoApellido: "",
        todoEmail: "",
        todoCelular: "",
        todoMensaje: "",
        todoEstado: "pendiente",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(todo);
    };

    return (
        <div className="my-3 mx-auto mx-5 container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Nombre"
                    name="nombre"
                    value={todo.todoNombre}
                    onChange={(e) => setTodo({ ...todo, todoNombre: e.target.value })}
                />
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Apellido"
                    name="apellido"
                    value={todo.todoApellido}
                    onChange={(e) => setTodo({ ...todo, todoApellido: e.target.value })}
                />
                <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="email"
                    name="email"
                    value={todo.todoEmail}
                    onChange={(e) => setTodo({ ...todo, todoEmail: e.target.value })}
                />
                <input
                    type="phone"
                    className="form-control mb-2"
                    placeholder="Celular"
                    name="celular"
                    value={todo.todoCelular}
                    onChange={(e) => setTodo({ ...todo, todoCelular: e.target.value })}
                />
                <textarea className="form-control" type="text" placeholder="Deja tu mensaje" name="todoMensaje" value={todo.todoMensaje} onChange={(e) => setTodo({ ...todo, todoMensaje: e.target.value })} />
                    <button className="submit btn btn-warning mt-3 hover:bg-black hover:text-yellow-400">Enviar</button>
            </form>
        </div>
    );
};

export default Form;
