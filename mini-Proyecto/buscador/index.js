const inputSearch = document.getElementById("input-search");
const ulContainer = document.getElementById("ul-container");

//array de lenguajes
const lenguajes = ["JavaScript", "Python", "Java", "C++", "CSS", "HTML", "TypeScript", "Ruby", "Swift", "Kotlin"]


//input que dispara los valores del usuario
inputSearch.addEventListener("input", ()=>{
    //I create an array where I filter languages in the array according to what the user is writing
    //I anticipated because if the user writes in lowercase the language they are looking for
    //I wasn't going to find it, that's why I used the tolowercase function. So that the elements of the array that are inside
    //sean minuscula, y lo que escribe el usuario tambien. Y pueda retornar el valor que esta buscando 
    const answer = lenguajes.filter( element=> element.toLowerCase().includes(inputSearch.value.toLowerCase()))
    console.log(typeof answer)
    
    if(typeof answer){
        
    }

})