// EJERCICIOS

// 1) Vamos a simular una carrera entre 3 personas, Juan,
// Mario y Martin. El orden de largada sera siempre el
//siguiente:

// console.log("Juan");
// console.log("Mario");
// console.log("Martin");

// El orden de llegada se determina conforme el
// nombre de cada uno vaya apareciendo en la consola,
// de modo que el ganador sera aquel cuyo nombre sea
//el primero en aparecer.

// ACTIVIDAD: Utilizando solamente setTimeout y sin
// alterar el orden de lagrada, escribir el codigo
// necesario para obtener los siguientes resultados:

// Vuelta 1:
// Mario
// Martin
// Juan
/*
setTimeout(()=>console.log("Juan"),0);
console.log("Mario");
console.log("Martin");
*/
//Vuelta 2:
// Juan
// Martin
// Mario
/*
console.log("Juan")
setTimeout(()=>console.log("Mario"),0)
console.log("Martin")
*/
//Vuelta 3
// Martin
// Juan
// Mario
/*
setTimeout(()=>{
	console.log("Juan")
	console.log("Mario")
},0)
console.log("Martin")
*/
// Vuelta 4
// Mario
// Juan
// Martin
/*
setTimeout(()=>console.log("Juan"),0)
console.log("Mario")
setTimeout(()=>console.log("Martin"),0)
*/
//2) Utilizando setTimeout, crear una funcion que
// actue como un temporizador, haciendo una cuenta
// regresiva desde el numero de segundos que se pase
// como argumentos hasta llegar a 0. Para ese ejercicio
// no se puede utilizar ningun tipo de loop (for, while, etc)
//PISTA: Para resolver el ejerciio, pueden investigar un
// poco sobre funciones recursivas.
/*
function temporizador(segundos){
	setTimeout (()=>{
		if(segundos<0){
			return
		}
		console.log(segundos)
		temporizador(segundos-1)
	},1000)
}
temporizador(4)
*/

//3) Utilizando la API de GITHUB (https://api.github.com)
//realizar las siguientes tareas

// a) Obtener una lista de los repositorios publicos
// (Documentacion de la API: https://docs.github.com/es/rest/reference/repos#list-public-repositories)
// b) Generar una funcion que a partir de la respuesta
// del punto anterior, retorne un array de los nombres
// de usuario de los owners de los repositorios listados
//c) Tomar de la respuesta al primer respositorio, y
// listar todos los repositorios del owner.
// PISTA: Para ver el endpoint al cual deberas pegarle
// para traer los repositorios del owner, deberas
// inspeccionar la informacion que recibes dentro del
// primer request.
//const baseUrl="https://api.github.com"

const getPublicRepo= async()=>{
    try{
        const response= await fetch('https://api.github.com/repositories')
        const jsonResponse=await response.json()
        //console.log(jsonResponse)
        return jsonResponse
    }catch(error){
        console.log(error)
    }
}
getPublicRepo()

const getOwnersName= async()=>{
    const repos= await getPublicRepo()
    const names=repos.map(repositories=>repositories.owner.login)
    //console.log(names)
    //console.log(repos)
    return names
}
getOwnersName()

const firstOwnerRepos= async()=>{
    /*
    const repos= await getPublicRepo()
    const firstRepo= repos[0]
    const reposEndPoint= firstRepo.owner.repos_url
    const reposResponse= await fetch(reposEndPoint)
    const jsonReposResponse= await reposResponse.json()
    console.log(jsonReposResponse)
    console.log(reposEndPoint)
    */
    const ownerNames= getOwnersName()
    const firstOwner= await fetch(`https://api.github.com/users/${ownerNames[0]}/repos`)
    const jsonfirstOwner= await firstOwner.json()
    console.log(jsonfirstOwner)
    
}
firstOwnerRepos()
