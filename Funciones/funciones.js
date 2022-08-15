// EJERCICIOS

/* 
1) Crear un programa que pida al usuario que ingrese un numero
y le devuelva un mensaje indicando si el numero es positivo, 
negativo o si es 0.
*/
/*
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
*/
/*
2) Crear un programa que pida un numero al usuario y le devuelva
un mensaje diciendo si el numero es primo o no.
Aclaración: Los números primos son aquellos que tienen exactamente 4 divisores enteros.
*/
/*
function esPrimo(num){
  let mensaje= true
  if(isNaN(num)){
    mensaje= "El caracter ingresado no es número"
  }  
  if(num<=1){
      mensaje=false
  }  
  for(let i=2;i<=num-1;i++){
    if(num%i==0){
      mensaje=false
    }   
}
  return mensaje
}
let numero= prompt("Ingrese un número")
alert(esPrimo(numero))
*/
/*3) Crear un programa que convierta la temperatura de grados Celsius a 
Faranheit y viceversa. El usuario deberia ingresar la temperatura y a que
unidad la quiere convertir.*/
//C a F (C x 9/5) + 32
// F a C (F -32) x 5/9
/*
function convertirTemp(temperatura,unidadDeMedida){
    if(isNaN(temperatura)){
        alert("La temperatura ingresada no es número")
    }
    if(unidadDeMedida==="celsius"){
        valor=(temperatura-32)*5/9
        alert(temperatura + " grados farenheit son "+ valor + " grados "+unidadDeMedida)
    }else if(unidadDeMedida==="farenheit"){
        valor= (temperatura*(9/5))+32
        alert(temperatura + " grados celsius son "+ valor + " grados "+unidadDeMedida)
    }else{
        alert("La unidad de medida ingresada es inválida")
    }
}   
let temp=prompt("Ingrese la temperatura a convertir")
let unidad= prompt("Ingrese a qué unidad desea convertir").toLowerCase()
convertirTemp(temp,unidad)
*/

/*
4) Crear un programa para calcular el total de una compra. Para ello, se le
tiene que pedir al usuario que ingrese el precio de cada producto y, cuando termine, 
que ingrese la palabra 'total'. Devolverle el total de la compra.
*/
function calculadora(){
    let valor
    let costoTotal=0
    do{
        valor= prompt("Ingrese el valor de cada producto, cuando termine ingrese la palabra total")
        if(valor!="total"){
            valor= parseInt(valor)
            if(isNaN(valor)){
                alert("El valor ingresado no es válido")
            }
            else{
                costoTotal += valor
            }
        }   
    }while(valor!="total")
    alert(costoTotal)
}
calculadora()
