export const UpdateTodolist = (list) => {

    const BASE_URL = 'https://assets.breatheco.de/apis/fake/todos/user/Dalyaa'
    const myUserName = "Dalyaa"  
    
    
    const requestParams = { 
       method :"PUT",
       body: JSON.stringify(list),
       headers : 
        "Content-Type :application/json"
       
     }
    
    fetch(`${BASE_URL}${myUserName}`,requestParams)
}

