//EJERCICIOS

/* Utilizando eventos, agregar algun efecto de hover a la 
imagen (puede ser algun cambio en la forma, un blur, 
animacion, etc). NO SE PUEDE USAR EL SELECTOR 
:hover de CSS
2) Agregar un evento al boton shuffle, de forma tal que
cuando se haga click en el mismo, se actualice el perfil con
informacion de un usuario random selecionado de la lista
de usuarios que provee el endpoint de Github.
Pista, para crear la logica de seleccion random, pueden
investigar sobre el metodo Math.random())*/
const switchTheme= ()=>{
    const container= document.querySelector(".container")
    const textNodes=document.querySelectorAll(".text")
    const avatar=document.querySelector("#avatar")
    //console.log(container.classList)
    
    container.classList.toggle("background-black")
    textNodes.forEach((element)=>element.classList.toggle("white-text"))
    if(container.classList.contains("background-black")){
        avatar.style.border="2px solid white"
    }
}
//switchTheme()
const getPublicRepo= async()=>{
    try{
        const response= await fetch('https://api.github.com/repositories')
        const jsonResponse=await response.json()
        //console.log(jsonResponse)
        return jsonResponse
    }catch(error){
        console.log(error)
    }
}

const getFirstOwnerName= async()=>{
    const repos= await getPublicRepo()
    const names=repos.map(repositories=>repositories.owner.login)
    firstOwner=names[0]
    //console.log(firstOwner)
    return firstOwner
}
const firstOwnerRepos= async()=>{
    
    const ownerNames= await getFirstOwnerName()
    const firstRepos= await fetch(`https://api.github.com/users/${firstOwner}/repos`)
    const jsonfirstRepos= await firstRepos.json()
    return jsonfirstRepos
    //console.log(jsonfirstOwner)
   
}
const modifiedName= async()=>{
		const name= await getFirstOwnerName()
    const nombre= document.querySelector(".username")
		nombre.textContent= firstOwner
}

const getAvatar= async()=>{
    const repos= await getPublicRepo()
    const avatar=repos.map(repositories=>repositories.owner.avatar_url)
    firstAvatar=avatar[0]
    //console.log(firstAvatar)
    return firstAvatar
  
}

const modifiedAvatar= async()=>{
	const photoAvatar= await getAvatar()
  const avatarProfile= document.querySelector("#avatar")
  avatarProfile.src= firstAvatar
}


const getFiveRepos= async()=>{
    const repos= await firstOwnerRepos()
    //console.log(repos)
    const firstUserRepos=repos.map(repositories=>repositories.html_url)
    for(let i=0;i<5;i++){
    	const liList= document.createElement("a")
      const parentAside= document.querySelector("ul")
      parentAside.appendChild(liList)
  		liList.innerText=(firstUserRepos[i])
      liList.href=(firstUserRepos[i])
    }
}
//////////////////////SHOW RANDOM PROFILE - CHALLENGE
const getRandomInt=(max)=>{
    return Math.floor(Math.random()*max)
}
const getRandomOwnerName= async()=>{
    const repos= await getPublicRepo()
    const names=repos.map(repositories=>repositories.owner.login)
    let randomNumber=getRandomInt(100)
    randomOwner=names[randomNumber]
    console.log(randomOwner)
    return randomOwner
}

const randomOwnerRepos= async()=>{
    const ownerNames= await getRandomOwnerName()
    const randomRepos= await fetch(`https://api.github.com/users/${randomOwner}/repos`)
    const jsonRandomRepos= await RandomRepos.json()
    return jsonRandomRepos   
}
////////////////////////
modifiedName()
modifiedAvatar()
getFiveRepos()

let image= document.querySelector("#avatar")

const applyTransition=()=>{
	image= document.querySelector("#avatar")
 	image.classList.add('transition')
  
}
const removeTransition=()=>{
	image= document.querySelector("#avatar")
 	image.classList.remove('transition')
}

//console.log(image)
image.addEventListener("mouseover",applyTransition)
image.addEventListener('mouseout',removeTransition)

const botonSchuffle= document.querySelector("#schuffle-btn")
botonSchuffle.addEventListener('click',getRandomOwnerName)