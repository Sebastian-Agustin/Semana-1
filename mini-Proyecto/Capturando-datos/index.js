import { languages } from "./data.js";

//declaration of variables

let inputSearch = document.getElementById("input-search")
let ulContainer = document.getElementById("ul-container")
let arrayDeData = languages

inputSearch.addEventListener("input", ()=>{
const answer = languages.filter(element => element.name.toLowerCase().includes(inputSearch.value.toLowerCase()))

    ulContainer.innerHTML = answer.map(element => `<li>${element.name} ${element.type} ${element.year}</li>`).join("")
})
