//capturing node elements

let input = document.getElementById("input")
let boton = document.getElementById("boton")
let ul = document.getElementById("ul-lista")
let h2 = document.getElementById("h2-error")
let boton2 =document.getElementById("boton-eliminar")
let arr = []


boton.addEventListener("click",()=>{
    //I capture the value of the input
    
    if(input.value ===""){
        
        return h2.innerText = "ERROR. DEBE ESCRIBIR ALGO"
    }

    const answer = input.value
    //creo un elemento li
    let element = document.createElement("li")
    element.classList.add(`listas-input`)
    //primero agrego el texto del input al li
    element.innerText = `${answer}`
    
    ul.appendChild(element)
    //Concateneo caja contenedora con children
    
    let botonRemoveElement = document.createElement("button")
    //Creo un elemento boton
    botonRemoveElement.innerText = `Eliminar tarea`
    //boton por cada li- eliminando tareas
    element.appendChild(botonRemoveElement)
    //Concateno esos li como padres de butons
    botonRemoveElement.addEventListener("click", ()=> {
        element.remove()//Elimina una tarea individual
    })
    input.value = "" //Clear the imput to write a new value
})
//capturo las listas que se llaman input-list



boton2.addEventListener("click", ()=>{
    let RemoveTask = document.querySelectorAll(".listas-input")
    RemoveTask.forEach( tarea =>{
        tarea.remove()
    })
})





