export const getTodolist = async () => {
    try {
        const BASE_URL = 'https://assets.breatheco.de/apis/fake/todos/user/'
        const myUserName = "Dalyaa" 
        const response = await fetch(`${BASE_URL}${myUserName}`);
        const responseJson = await response.json();
        return responseJson;
    } catch (error){
        console.error("GET error: ",error);

    }


}
