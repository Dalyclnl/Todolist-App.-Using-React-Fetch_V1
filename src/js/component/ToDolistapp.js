import React,{useState} from "react";


	const ToDoList = () => {
		const [inputValue,setInputValue]=useState(" ");
		const [toDos,setToDos ] = useState([]);
		return (
			<div className="container" >
					<h1> My ToDos</h1>
				<ul>
					<li> 
						<input type="text"
							onChange={(e)=> setInputValue(e.target.value)}
							value={inputValue}
							onKeyUp={(e)=> {
								if (e.key === "Enter"){
									setToDos(toDos.concat([inputValue]));
									setInputValue ("");}}}
						placeholder= "What should i do now?"></input>
					</li>
					{toDos.map((item, index) =>(
					<li> {item}{""}
						<i class="fa-regular fa-square-check" onClick={()=> 
						setToDos(toDos.filter((t, currentIndex) => index != currentIndex))}
						></i>
					</li>
					))
					}
				</ul>
				<div>{toDos.length} task </div>	
			</div>  
			);
		};				
 export default ToDoList;
