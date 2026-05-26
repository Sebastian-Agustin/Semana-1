//practicing part 2
//grabbing elements from the sun


let boton = document.getElementById("boton")
//Capturando h1 con id y cambiando el contenido de la etiqueta
boton.innerText = "give me click"

boton.addEventListener("click", ()=>{
    boton.innerText = `HOLA, GRACIAS POR DAME CLICK`
})


//capturing html elements like input
let input = document.getElementById("input")
let boton2 =document.getElementById("boton2")
let result =document.getElementById("resultado")

boton2.addEventListener("click", () =>{
    let anserInput = input.value
    result.innerText =`${anserInput}  `
})

//order is my first I capture the elements of the node
// then I pass them the function I want, in this hood the event
