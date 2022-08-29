const getDataFromApi= async ()=>{
    try{
    const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(await response.json())
    }catch(error){
        console.log(error)
    }
}
    
getDataFromApi()
