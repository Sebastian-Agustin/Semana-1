//This is a mini project to work on what I have been practicing this week


// Student enrollment system

// Un array de alumnos con sus datos
// Filtrar los aceptados y rechazados
// Show a summary with reduce: how many were accepted, how many rejected and the average age of those accepted


let students = [
    { name: "Sebastian", age: 22, student: true, lenguaje: "Javascript" },
    { name: "Jorge", age: 34, student: false, lenguaje: "Python" },
    { name: "April", age: 17, student: true, lenguaje: "CSS" },
    { name: "Pablo", age: 91, student: false, lenguaje: "C++" },
    { name: "Maria", age: 25, student: true, lenguaje: "Javascript" },
    { name: "Lucas", age: 15, student: false, lenguaje: "Java" },
    { name: "Sofia", age: 45, student: true, lenguaje: "Python" },
    { name: "Diego", age: 78, student: true, lenguaje: "Javascript" }
]

//estudiantes aceptados por rango de edad
let filterStudentAcept = students
.filter((student => student.age >= 18 && student.age <= 90))



//estudiantes rechazados por rango de edad
let filterStudentReajectd = students.filter((student => student.age < 18 || student.age > 90))


//now I have to save those values in 2 different arrays. Accepted and Rejected

const arrStudentAcept = filterStudentAcept.map( student =>{
    return{ name:student.name,
    age: student.age,
    lenguaje: student.lenguaje,
    status: "ACEPTADOS"
}
})


const arrStudentReajectd = filterStudentReajectd.map( student =>{
    return{ name:student.name,
    age: student.age,
    lenguaje: student.lenguaje,
    status: "RECHAZADOS"
}
})

//Mensaje por consola de bienvenida por cada alumno aceptado
arrStudentAcept.forEach(element =>{
    let message = `${element.name}
    Welcome, guys. 
    Gracias por confiar en nosotros!
    `
    console.log(message)
})

arrStudentReajectd.forEach(element => {
    let message = `${element.name}
    We're sorry but you haven't stayed!
    But your registration will be saved for the second chance when registrations reopen!
    Muchos exitos! Saludos!
    `
    console.log(message)
})




let mediaStudent = arrStudentAcept.reduce((accumulator, element ) =>{
    return accumulator + element.age
    
},0)

let calcularPromedio = mediaStudent / arrStudentAcept.length

console.log(calcularPromedio)


