const pagarConTarjeta= (precio,isConected)=>
    new Promise((resolve, reject)=>{
        const limit=10000
        console.log("Procesando el pago")
        if(!isConected){
            return
        }
        
        setTimeout(()=>{
            if(precio<=limit){
                resolve("Compra Aprobada")
            }else{
                reject("Compra Rechazada")
            }  
        },3000)
    })
/*
console.log(
    pagarConTarjeta(100000,true).then((respuesta)=>{
    console.log(respuesta)
    }).catch((error)=>{
        console.log(error)
    })
)
console.log("Otra tarea")
*/
const allPromises= [pagarConTarjeta(1,true),pagarConTarjeta(10000,true),pagarConTarjeta(5000,true)]

//Promise.all(allPromises)

async function procesarPagos() {
    try{
        const respuesta= await Promise.all(allPromises)
        console.log(respuesta)
        return "todas resultas"
    }catch(error){
        console.log(error)
    }
}

//procesarPagos()

console.log(procesarPagos().then(response=>console.log(response)))
