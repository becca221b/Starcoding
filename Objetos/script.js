//EJERCICIOS

/*
1) Crear una clase Deportes, que reciba el atributo nombre
y un metodo que permita mostrar por consola ese nombre.
Ademas, crear un metodo que permita mostrar si el deporte es
individual o por equipos.
Crear una subclase que sea DeportesDeEquipo que permita ademas del nombre, 
el numero de integrantes que deben formar parte de ese equipo. 
Crear un metodo para
mostrar el siguiente mensaje: 
"Para jugar al futbol necesitas 11 jugadores por equipo".
 Tener en cuenta que 'futbol' y 11 son valores que 
 pueden variar dependiedo
 del deporte (por ejemplo, si fuese basket, seria 5 jugadores)
 Futbol
 Basket
 Tenis
PARA ESTA ACTIVIDAD, USAR LO VISTO RESPECTO DE CLASES Y OBJETOS
*/
class Deportes{
	constructor(nombre,tipo){
  	this.nombre = nombre;
    this.tipo = tipo;
  }
  mostrarTipo(){
    	console.log(this. nombre+ " es un deporte "+this.tipo)
	}      
}

class DeporteDeEquipo extends Deportes{
	constructor(nombre,cantidad){
  super(nombre)
  this.cantidad= cantidad;
  }
  jugadores(){
  	console.log(`Para jugar al ${this.nombre} necesitas ${this.cantidad} jugadores por equipo`)
  }
}

const voley = new Deportes("voley","por equipos")
voley.mostrarTipo()
const handball = new DeporteDeEquipo("handball",7)
handball.jugadores()

/*2) Andrea y Martin deciden hacer un picnic al aire libre.
Andrea propone llevar una bolsa con 2 cervezas, 2 sandwiches y 1 bolsa
de papas fritas. Por su parte, Martin lleva 1 porcion de torta, una gaseosa
y 1 paquete de galletitas dulces.
CREAR UN OBJETO QUE REPRESENTE CADA UNA DE LAS BOLSAS,
DONDE CADA PRODUCTO TENGA LA CANTIDAD QUE LLEVO CADA UNO.
REALIZAR LAS SIGUIENTES TAREAS:
a) Mostrar por consola los productos que llevo cada uno
(solo el nombre del producto)
b) En el camino al picnic, la bolsa de Andrea se rompio, 
por lo que tuvieron que poner todo en la bolsa de Martin.
Realizar el cambio correspondiente para que la bolsa de Martin
tenga el total de los productos del picnic.
c) Calcular el total de productos que llevaron al picnic
*/
const BolsaAndrea={
	cerveza: 2,
  sandwich: 2,
  papasFritas: 1
}

const BolsaMartin = {
	torta: 1,
  gaseosa: 1,
  galletitas: 1
}
function verProducto(bolsa){
	console.log(Object.keys(bolsa))
}

//verProducto(BolsaMartin)

Object.assign(BolsaMartin,BolsaAndrea)
verProducto(BolsaMartin)

const productos= Object.values(BolsaMartin)
let total=0
productos.forEach(function(cantidad){total+=cantidad})
console.log("El total de productos son "+total)
