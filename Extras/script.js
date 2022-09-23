//Destructuring
const names= ["Andres","Julio","Federico"]
const names2= ["Rebeca","Camila","Ceci"]

const person1={
	firstName:"Julio",
	job: "Secretario",
  city: "Corrientes"
}
//ARRAYS
//Sin destructuring
/*
const user1= names[0]
const user2= names[1]
const user3= names[2]

console.log(user1,user2,user3)
*/
//Con destructuring
/*
const [user1,user2]=names
console.log(user1,user2)
*/
//OBJETOS
//Sin destructuring
/*
const user1= person1.firstName
console.log(user1)
const job=person1.job
console.log(job)
*/
//Con destructuring
//const {firstName:user1,job}= person1
//console.log(user1, job)

//SPREAD OPERATOR (...)
//1) Para concatenar arrays (concat)
/*
const mergedArray= [...names,...names2]
console.log(mergedArray)
*/
//2) Para copiar un array
/*
const copiedArray= [...names]
console.log(copiedArray)
*/
//3) Obtener elementos del array
/*
const [user1,...groupedNames]= names
console.log(user1)
console.log(groupedNames)
console.log(names)
*/
//En Funciones
/*
const logValues=(value1,...args)=>{
  console.log("soy ",value1)
  args.forEach(values=>console.log(values))
}
logValues("Rebeca","chau","nos vemos",,"en","disney")
*/
//En Objetos
//1)Copiar Objetos
/*
const copiedPerson={...person1}
copiedPerson.city="Buenos Aires"
console.log(copiedPerson)
console.log(person1)
*/
//2)Mergear objetos (vs. object.assign)
/*
const mergedObject= {...person1, city:"Córdoba"}
console.log(mergedObject)
console.log(person1)
*/
const updatedData={
  job: "programador",
  city:"Pilar",
  age:30
}
const mergedObject={...person1,...updatedData}
console.log(mergedObject)

/*
const getTwoNumber=()=>2
console.log(getTwoNumber()+3)
*/
//Inmutabilidad
/*
const addMember= (currentMembers,newMember)=>{
  const newMemberList=[...currentMembers,newMember]
  //console.log([...currentMembers])
  return newMemberList
}
console.log(addMember(names,"Jessica"))
console.log(names)
*/
//Funciones Puras
/*
const getRandomNumber=()=>Math.random()
const sum=(a,b)=>a+b+getRandomNumber()
console.log(sum(2,3))
console.log(sum(2,3))
console.log(sum(2,3))
*/
//High Orders Functions
const logResult=(result)=> console.log(result)
const alertResult=(result)=> alert(result)

const sum=(a,b,callback)=> (callback(a+b))

sum(1,3,logResult)
sum(2,3,alertResult)
