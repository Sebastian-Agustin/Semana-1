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
    mensaje = `RECHAZADO. No podes aprender. Lo siento, sos menor ${obj.name}`
	} else if(resultCallback === `aceptado`){
    mensaje =`ACEPTADO ${obj.name} podes inscribirte!`
	} else {
    mensaje = `RECHAZADO sos Mayor de edad. ${obj.name}` 
}
return mensaje

}


let students = [
    { name: "Sebastian", age: 90,  stundent: true, lenguaje: "Javascript" },
    { name: "Jorge", age: 34,  stundent: false, lenguaje: "Python" },
    {name: "April", age:21,  stundent: true, lenguaje: "css"},
    {name: "Pablo", age:18,  stundent: false, lenguaje: "C++"}
]


//foreach to traverse the array
//student is a temporary variable of the array path
//becomes an object and you can access the data within the


// students.forEach( student => {
// //we run the enrollstudent function

// const answer = enrollStudent(student, evaluateAge)

// //MODIFIED ENROLLSTUDENT FUNCTION MESSAGE

// if(answer.includes("ACEPTADO")){
//     console.log(`CONGRATULATIONS
//         Answer: you ARE ACCEPTED, THANKS FOR TRUSTING ${student.name}
//         Exitos con tu nuevo lenguaje de programacion ${student.lenguaje}
//         `)
// 	} else {
//     console.log(`Sorry ${student.name}, Rejected!
//         Cuando haya una segunda oportunidad. Pensaremos en ti! ${student.name}
//         `)
// }

// });

//Using filter and map

// console.log(students.filter( student => student.age >= 18))
//filter filtrando solo los estudiantes mayores a 18 o que tenga 18 edad

//importante la flecha va dentro de los parents

const respuesta = students.filter((student)=> {
    //condicion 
  return student.age >= 18 && student.age <= 90
})

/// IMPORTANT MAP. DOES NOT NEED A CONDITION LIKE FILTER
///MAP RECORRE EL ARRAY TRANSFORMA y devuelve siempre la misma cantidad
const mapeoDeRes = respuesta.map( student =>{
    return{
        name: student.name,
        lenguaje: student.lenguaje
    }
})

console.log(mapeoDeRes)


let arr = [10, 15, 30, "c", "e", 75, 40, "q", 62, 23]

//first name of the path variable
//then the condition

let number = arr.filter( number => number > 40)
console.log(number)

let string = arr.filter( string => (typeof string === "string"))
console.log(string)



let stringandNumber = arr.filter( answer => (typeof answer === "number") || (typeof answer ==="string"))

console.log(stringandNumber)