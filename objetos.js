//here we are going to practice objects, such as creating them, modifying them, and accessing their data.

//An object is a collection of related data. Suppose it's a shopping bag with related items
//example a bag of vegetables, with vegetables and fruits.

//a key thing about objects is that you can save anything, from variables, functions, json, other objects, arrays, etc.
//Es importante que a la hora de guardar algo este separada por un clave(key) : valor

let stundent1 = {
    name: "Sebastian",
    age: 22,
    stundent : true,
    language: "Javascript",
    
}

let stundent2 = {
    name: "Jorge",
    age: 20,
    stundent : false,
    language: "Python"
}


//ways to access object data
// console.log(stundent1["name"])
// console.log(stundent2.name = "juan") //replacing stundent value 2
// console.log(stundent2) //viewing by console the stundent2 object

//``
// console.log(`${stundent1.name} Welcome to our programming course!
//     Hoy aprenderas como funciona ${stundent1.lenguaje} en el DOOM!    
//     `)

//Funcion que recibe un objeto y devuelve un mensaje accedeciendo al objeto
const PresentStudent = (alumno)=> {
let mensaje = '' 
    mensaje = 
    `Welcome!
    ${alumno.name} I hope you enjoy the course and have an excellent pass!
    You will learn a lot about the language ${alumno.lenguaje} and your teachers will accompany you in the learning process` 
    
    return mensaje;
}
//``
// const presentStudent2 = (alum1, alum2)=>{
// let message = ''

//     message = `Welcome to our programming courses!
//     We wish you both every success
//     ${alum1["name"]} We want to recognize you for trusting us and your career
//     you're going to learn all about this beautiful language ${alum1 ["lenguaje"]}
    
//     ${alum2["name"]} We want to recongnize you for trsting us and your career you're going to
//     learn all  aboutj this beatifull language ${alum2["lenguaje"]}
    
//     `

// return message
// }

const evaluateAge =(name, age, stundent) => {
//Si aplicamos un condicional, primero se aplica la condicion y despues la logica    
if(typeof name !== "string"){
    console.error("Error: Name has to be a text")
    return
}
if(typeof age !== "number"){
    console.error('Error:Age has to be a number' )
return
}
if(typeof stundent !== "boolean"){
    console.error("Error: Student tiene que ser un boolean")
    return
}
//logica para que ingrese los datos correctos

//here's going to return a boolean

let mensaje = ``
if (age < 18){
    mensaje = `menor`
} else if (age >= 18 && age <= 90){
    mensaje = `aceptado`
} else {
    mensaje= `mayor`
}
return mensaje
}







const enrollStudent = (obj,callback)=>{
    //Here I call the callback, within the function it receives arguments from the objects
    //then that data is saved in a variable to see if it is true or false.
    // Then you appear the data with a condition, if it is met you return a message with the return below

    const resultCallback = callback(obj.name, obj.age,obj.stundent)
    
    let mensaje = ``
    
    if(resultCallback === `menor`){
    mensaje = `No podes inscribirte ${obj.name}`
	} else if(resultCallback === `aceptado`){
    mensaje =`Podes inscribirte ${obj.name} porque estas en el rango de edad`
	} else {
    mensaje = `Sos mayor, no podes inscribirte, lo siento ${obj.name}` 
}
return mensaje

}

console.log(enrollStudent(stundent2, evaluateAge))