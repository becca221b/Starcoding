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
