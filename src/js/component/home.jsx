import React, { useEffect } from "react";
import ToDoList from "./ToDolistapp";


//create your first component
const Home = () => {


	return (
		<div className="box">
			<ToDoList/>
		</div>
	);
	
};

fetch('https://assets.breatheco.de/apis/fake/todos/user/Dalyaa', {
      method: "PUT",
      body: JSON.stringify(ToDoList),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
       if ( respuesta.status >= 200 && respuesta.status < 300 ){ 
        console.log(resp.text("Request done" )); 
        return resp.json(); 
	   }
	   else{
		console.log(`error ${respuesta.status} en el request `);
	   }
    })
    .then(body => {
      console.log(" body request",body);
	  console.log (body.map(t => t.label).join(","))
    })
    .catch(error => {
        console.error('Error:',error);
    });


export default Home;
