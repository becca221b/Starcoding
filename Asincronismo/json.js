const body={
    id:1,
    title:"foo",
    body:"bar",
    userId:1
}
//CONVERTIR A JSON
const parsedbody= JSON.stringify(body)

//CONVERTIR JSON A JS
const bodyToJs= JSON.parse(parsedbody)
console.log(bodyToJs)

