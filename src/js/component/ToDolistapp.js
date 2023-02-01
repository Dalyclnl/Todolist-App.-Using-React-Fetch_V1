import React, { useEffect, useState } from "react";

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [toDos, setToDos] = useState([]);

  function sendTodoList(ToDoList) {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/Dalyaa", {
      method: "POST",
      body: [],
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
        console.log(resp.status); // el código de estado = 200 o código = 400 etc.
        console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
        return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
      })
      .then((data) => {
        //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
        console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
      })
      .catch((error) => {
        //manejo de errores
        console.log(error);
      });
  };
  const addToDo = () => {
    if (!inputValue && inputValue.trim().length <= 0) return;

    fetch("https://assets.breatheco.de/apis/fake/todos/user/Dalyaa", {
      method: "PUT",
      body: [{}],
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
        console.log(resp.status); // el código de estado = 200 o código = 400 etc.
        console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
        return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
      })
      .then((data) => {
        //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
        console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
      })
      .catch((error) => {
        //manejo de errores
        console.log(error);
      });
    setToDos([
      ...toDos,
      {
        id: inputValue,
        label: inputValue,
        done: false,
      },
    ]);
    sendTodoList([
      ...toDos,
      {
        id: inputValue,
        label: inputValue,
        done: false,
      },
    ]);
    setInputValue(" ");

    const deleteToDo = () => setToDos(toDos.filter((todo) => todo.id !== id));
  };

  fetch("https://assets.breatheco.de/apis/fake/todos/user/Dalyaa", {
    method: "DELETE",
    Params: none,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => {
      console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
      console.log(resp.status); // el código de estado = 200 o código = 400 etc.
      console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
      return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
    })
    .then((data) => {
      //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
      console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
    })
    .catch((error) => {
      //manejo de errores
      console.log(error);
    });

  return (
    <div className="container">
      <h1> My ToDos</h1>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ägrerga un anueva tarea"
        value={inputValue}
        onKeyDown={addToDo}
      ></input>
      <ul>
        {toDos.map((todo) => (
          <li key={todo.id}>{todo.label} </li>
        ))}
      </ul>
      <div>{toDos.length} task </div>
      <div>
        <button onClick={promise}></button>
      </div>
    </div>
  );
};
export default ToDoList;
