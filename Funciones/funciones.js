// EJERCICIOS

/* 
1) Crear un programa que pida al usuario que ingrese un numero
y le devuelva un mensaje indicando si el numero es positivo, 
negativo o si es 0.
*/

function tipoDeNum(num){
    
    if(isNaN(num)){
        mensaje= "El caracter ingresado no es numero"
    }else if(num>0){
        mensaje= "El número es positivo"
    }else if(num<0){
        mensaje="El número es negativo"
    }else{
        mensaje="El número es 0"
    }
    return(mensaje)
}
let numero= (prompt("Ingrese un número"))
alert(tipoDeNum(numero))
