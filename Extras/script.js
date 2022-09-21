//Destructuring
const names= ["Andres","Julio","Federico"]

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
const {firstName:user1,job}= person1
console.log(user1, job)

