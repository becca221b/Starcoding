/*
EJERCICIOS 
1) Pedir al usuario que ingrese su nombre. Guardar
ese nombre en una variable y utilizarlo para saludar al 
usuario (por ejemplo: "Hola Alexis").
*/
const nombre= prompt("Ingresa tu nombre")
alert("Hola "+nombre)

/*2) Pedirle a un usuario que ingrese dos numeros
y devolverle la suma de dichos numeros
*/
const firstNumber = parseInt(prompt("Ingresa un numero"));
const secondNumber = parseInt(prompt("Ingresa otro numero"));
alert( `La suma de ${firstNumber} y ${secondNumber} es ${firstNumber + secondNumber}`);

/*3) Pedirle a un usuario que ingrese dos numeros
y devolverle el doble de la suma de dichos numeros
*/
const numeroUno= parseInt(prompt("Ingrese un número"))
const numeroDos=parseInt(prompt("Ingrese otro número"))
alert(`El doble de la suma de ${numeroUno} + ${numeroDos} es ${((numeroUno+numeroDos)*2)}`)

/*
4) Pedirle al usuario que ingrese el ancho y el alto 
de una habitacion y calcular la superficie.
*/
const alto= parseInt(prompt("Ingrese la medida del alto"))
const ancho= parseInt(prompt("Ingrese la medida del ancho"))
alert(`La superficie es ${alto*ancho}`)
