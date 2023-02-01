import React, { useEffect } from "react";
import ToDoList from "./ToDolistapp";


//create your first component
const Home = () => {
  useEffect(()=>{
  //  
  fetch('https://assets.breatheco.de/apis/fake/todos/user/Dalyaa', {
      method: "GET",
      PARAMS: None,
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response)=>{
      console.log(response)
      return response
    })
    .then((data)=>{
      console.log(data)
    }
    )
  }, []) 
    

	return (
		<div className="box">
			<ToDoList/>
		</div>
	);
	
 

  };
export default Home;
