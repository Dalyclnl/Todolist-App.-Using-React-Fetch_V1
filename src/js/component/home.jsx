import React, { useEffect } from "react";
import ToDoList from "./ToDolistapp";
import { UpdateTodolist } from "../../services/UpdateTodolist";
import { getTodolist } from "../../services/getTodolist";


//create your first component
const Home = () => {

	useEffect(() => {
		getTodolist().then(response =>setToDos(response))
	},[]);
	
	useEffect(() => {
		UpdateTodolist(ToDoList);
	},[ToDoList]);
	
	return (
		<div className=" ">
			<ToDoList/>
		</div>
	);
};

export default Home;
