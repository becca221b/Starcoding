//EJERCICIOS

/*
Dada la siguiente lista de invitados en ese orden:
Lucas,
Matias,
Jose,
Pedro,
Martina, 
Marcelo, 
Esteban, 
Marcela, 
Martin
 1) Informar por consola el numero de invitados 
 */
const lista=["Lucas",
    "Matias",
    "Jose",
    "Pedro",
    "Martina", 
    "Marcelo", 
    "Esteban", 
    "Marcela", 
    "Martin"]
console.log("El número de invitados es "+lista.length)
/*2) Imprimir por consola el nombre del ultimo invitado
 */
console.log("El nombre del último invitado es "+lista[lista.length-1])
/*3) A ultimo momento, se invito a Pedro a la fiesta, por lo que
 hay que agregarlo al final de la lista.
 */
lista.push("Pedro")
console.log(lista)
/*4) Media hora antes de empezar Marcela confirmo que no podia asistir.
 Generar una nueva lista que contenga los invitados que confirmaron su
 presencia.
 */
const listaFiltrada= lista.filter((nombre) => nombre!=="Marcela")
console.log(listaFiltrada)
/*5) Suponiendo que los invitados consumieron la siguente cantidad de platos
    Lucas: 3 platos
    Esteban: 1 platos
    Jose: 1 plato
    Los restantes: 4 platos
Calular el numero total de platos consumidos al final de la fiesta
*/
const platos=[
    {invitado:"Lucas", cantidad:3},
    {invitado:"Esteban", cantidad:1},
    {invitado:"Jose", cantidad: 1}
]
const numDeplatos= platos.map(function(total){
    return total.cantidad 
})
let acumulador=0
numDeplatos.forEach((numero) => (acumulador+=numero))
console.log(acumulador)

/*
6) Acomodar los invitados por orden alfabetico.
*/
console.log(lista.sort())
