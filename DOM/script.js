//DOM Docuemnt Object Model
//Acceder a un nodo
//1) Por el tag name
/*
const header= document.getElementsByTagName("header")
console.log(header)
//2)Por la clase
const container = document.getElementsByClassName("container")
console.log(container)
//3) Por el id
const avatar= document.getElementById("avatar")
console.log(avatar)
//4)Query selector
const main= document.querySelector("main")
console.log(main)

const username= document.querySelector(".username")
console.log(username)

const repos= document.querySelector("#repos")
console.log(repos)

//5)querySelectorAll
const usernames= document.querySelectorAll(".username")
console.log(usernames)
*/
//Acceder y modificar texto
const username= document.querySelector(".username")
//username.textContent="Alexis"
username.innerText="Rebeca"

//Acceder y modificar src de imagen
const avatar= document.querySelector("#avatar")
avatar.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrCXYdTj9qW1YHfbtaW6Ea_5U3fg89jGnRSw&usqp=CAU"
//console.log(avatar)

//Incorporar html dentro de JS
/*
const list= document.querySelector("#repos-list")
list.innerHTML= '<li>Un Repo</li> <br> <li>Otro Repo</li>'
*/
/*
//console.log(list.outerHTML)
//console.log(list.innerHTML)
*/
//Modificar estilos

//className
/*
container.className="background-black"
console.log(container.className)
*/

//classList

//container.classList.add("background-black")
//console.log(container.classList)
//container.classList.remove("background-black")

//Toggle
const switchTheme= ()=>{
    const container= document.querySelector(".container")
    const textNodes=document.querySelectorAll(".text")
    const avatar=document.querySelector("#avatar")
    //console.log(container.classList)
    
    container.classList.toggle("background-black")
    textNodes.forEach((element)=>element.classList.toggle("white-text"))
    if(container.classList.contains("background-black")){
        avatar.style.border="2px solid white"
    }
}
switchTheme()

//ELIMINAR UN NODO
//const repos= document.querySelector("#repos")
//repos.remove()

//CREAR UN NODO
/*
const reposNode= document.createElement("h2")
reposNode.innerText="Repos"
*/
//appendChild (añade al final)
/*
const parentAside= document.querySelector("aside")
parentAside.appendChild(reposNode)
*/
/*
const reposList= document.querySelector("#repos-list")
reposList.before(reposNode)
//reposList.after(reposNode)
reposNode.classList.add("text","white-text")
*/
//switchTheme()
//switchTheme()
//EJERCICIO
//Utilizando el listado de
// repositorios que nos da la API de GITHUB (https://api.github.com)
// tomar el primer repositorio del listado y
// realizar las siguientes tareas:

// 1) Modificar el texto 'Nombre' por el nombre de usuario
// 2) Agregar el avatar del usuario
// 3) Insertar un listado de links a sus 5 primeros
// repositorios.
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

const getFirstOwnerName= async()=>{
    const repos= await getPublicRepo()
    const names=repos.map(repositories=>repositories.owner.login)
    firstOwner=names[0]
    //console.log(firstOwner)
    return firstOwner
}
const firstOwnerRepos= async()=>{
    
    const ownerNames= await getFirstOwnerName()
    const firstRepos= await fetch(`https://api.github.com/users/${firstOwner}/repos`)
    const jsonfirstRepos= await firstRepos.json()
    return jsonfirstRepos
    //console.log(jsonfirstOwner)
   
}
const modifiedName= async()=>{
		const name= await getFirstOwnerName()
    const nombre= document.querySelector(".username")
		nombre.textContent= firstOwner
}

const getAvatar= async()=>{
    const repos= await getPublicRepo()
    const avatar=repos.map(repositories=>repositories.owner.avatar_url)
    firstAvatar=avatar[0]
    //console.log(firstAvatar)
    return firstAvatar
  
}

const modifiedAvatar= async()=>{
	const photoAvatar= await getAvatar()
  const avatarProfile= document.querySelector("#avatar")
  avatarProfile.src= firstAvatar
}


const getFiveRepos= async()=>{
    const repos= await firstOwnerRepos()
    //console.log(repos)
    const firstUserRepos=repos.map(repositories=>repositories.html_url)
    for(let i=0;i<5;i++){
    	const liList= document.createElement("li")
        const parentAside= document.querySelector("ul")
        parentAside.appendChild(liList)
  		liList.innerText=(firstUserRepos[i])
    }
}


modifiedName()
modifiedAvatar()
getFiveRepos()
