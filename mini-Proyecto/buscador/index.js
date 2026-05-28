const inputSearch = document.getElementById("input-search");
const ulContainer = document.getElementById("ul-container");

//array de lenguajes
const lenguajes = ["JavaScript", "Python", "Java", "C++", "CSS", "HTML", "TypeScript", "Ruby", "Swift", "Kotlin"]


//input que dispara los valores del usuario
inputSearch.addEventListener("input", ()=>{
    //I create an array where I filter languages in the array according to what the user is writing
    //I anticipated because if the user writes in lowercase the language they are looking for
    //I wasn't going to find it, that's why I used the tolowercase function. So that the elements of the array that are inside
    //be lowercase, and what the user writes as well. And can return the value you're looking for
    const answer = lenguajes.filter( element => element.toLowerCase().includes(inputSearch.value.toLowerCase()))
    console.log(answer.join(", "))// this is a way for you to return the array in a string. USING the JOIN METHOD
    //If there is  another way that


    //map esta recorriendo el array 
    ulContainer.innerHTML = answer.map( element => `<li>${element}</li>`).join("")//aca convierto la respuesta del answer en string
    //ESTE ES EL MEJOR PARA MI
    // const arrayObjetLanguages = answer.map({ 
    // })
})



//Something I learned today, today if you want to create functional components for html
//and you can also create content inside the html
//that's why you can capture html container element. call it with the .innerthtml attribute and pass it with a map the entire structure of that element if it is an array its response
//sino podes armar los componentes y darle lo que quieras retornar