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
const list= document.querySelector("#repos-list")
list.innerHTML= '<li>Un Repo</li> <br> <li>Otro Repo</li>'
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
    console.log(container.classList)
    
    container.classList.toggle("background-black")
    textNodes.forEach((element)=>element.classList.toggle("white-text"))
    if(container.classList.contains("background-black")){
        avatar.style.border="2px solid white"
    }
}
switchTheme()

