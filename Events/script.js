const logo= document.querySelector(".puzzle-logo")
const sayHello= ()=> {
	alert("Hola Mundo")
  logo.removeEventListener('click',sayHello)
}
logo.addEventListener('click',sayHello)
//boton.onclick= sayHello= ()=> alert("Hola Mundo")

let color;

const changeColor=(e)=>{
	color= e.target.id
   	const parrafoColor= document.querySelector("h3")
	parrafoColor.textContent="El color seleccionado es "+color
}

const paintSquare=(e)=>{
	const selectedBlock=e.target.id
  	const numDeBloque= document.getElementById(selectedBlock)
 	numDeBloque.className= "painterBlock "+color
}

const paintSquareOnMove=(e)=>{
	if(e.buttons!==1)return
	paintSquare(e)
}

const resetColors=()=>{
	blocks.forEach(blockis=>blockis.className= "painterBlock white")
}

const squareColors= document.querySelectorAll(".color")
squareColors.forEach(cuadricula=>cuadricula.addEventListener('click',changeColor))

let blocks= document.querySelectorAll(".painterBlock")
blocks.forEach(cuadritos=>cuadritos.addEventListener('click',paintSquare))

blocks.forEach(cuadritos=>cuadritos.addEventListener('mousemove',paintSquareOnMove))

const botonReset= document.querySelector("#reset-btn")
botonReset.addEventListener('click',resetColors)