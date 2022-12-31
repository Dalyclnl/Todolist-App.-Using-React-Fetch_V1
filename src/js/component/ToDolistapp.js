import React, { useEffect, useState } from "react";

const ToDoList = () => {
  const [inputValue, setInputValue] = useState(" ");
  const [toDos, setToDos] = useState([]);

  function sendTodoList(ToDoList){
    fetch("https://assets.breatheco.de/apis/fake/todos/user/Dalyaa", {
      method: "PUT",
      body: JSON.stringify(ToDoList),
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
	}
 function addItem(){
	if(!inputValue && inputValue.trim().length <=0) return;

	setToDos([
		...toDos,
		{
			id:inputValue,
			label:inputValue,
			done:false
		}
	])
	sendTodoList([
		...toDos,
		{
			id:inputValue,
			label:inputValue,
			done:false
		}
	])
	setInputValue(" ")
 }
  return (
    <div className="container">
      <h1> My ToDos</h1>
        <input
            type="text"
            onChange={({target:{value}})=>setInputValue(value)}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addItem()
              }
            }}
          ></input>
		  <ul>
      {!toDos.length ? (<li></li>
        ) : (
          toDos &&
          toDos.length &&
          toDos.map((item, i) => (
            <li id={i} key={i}>
              {item.label}
            </li>
          ))
        )}   
      </ul>
      <div>{toDos.length} task </div>
    </div>
  );
};

export default ToDoList;



