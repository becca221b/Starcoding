//DOM Docuemnt Object Model
//Acceder a un nodo
//1) Por el tag name
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