const logo= document.querySelector(".puzzle-logo")
const sayHello= ()=> {
	alert("Hola Mundo")
  logo.removeEventListener('click',sayHello)
}
logo.addEventListener('click',sayHello)
//boton.onclick= sayHello= ()=> alert("Hola Mundo")

const colorSelected= ()=>{
	console.log("Color Selected")
}

const squareColors= document.querySelectorAll(".color")
squareColors.forEach(cuadricula=>cuadricula.addEventListener('click',colorSelected))

/*
const cuadricula= document.querySelector(".red")
const changeColor= ()=>{
	const tabla= document.querySelector("table")
	tabla.classList.add("red")
}*/

