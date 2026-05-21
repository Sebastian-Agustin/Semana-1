//Message, my first message from js

//DECLARACION DE VARIABLES
let name = 'Sebastian';
let age = 22;
const student = true;


//FASE 1

//Linea 8 imprime variable name - string /
console.log(name);
//Line 10 imprime variable age - number/
console.log(age);
//line 12 imreme variable studen - boolean
console.log(student);
//These are 3 types of data that are printed

//FASE 2

//PROGRAMMING IMPERATIVELY, STEP BY STEP.
//CONSOLOGE OF PRACTICE Without backticks and without concatenation
//console.log("Hello, mi nombre es " + name + " tengo " + age + " años" + " Soy un estudiante = " + student)

//hereWeAreGoingToMakeAnotherCleanerConsole.logUsingBackticksAndConcatenationsWithKeysToMentionTheVariables,InAdditionWeAreGoingToChangeTheValueOfVariablesByLetAndConst

//console.log(`hello my name is= ${name} I am = ${age}years old, and I am a beginner javascript student ${student}`)


//Fase 3 
//in this phase we are going to improve the previous code, we are going to make it look more beautiful visually, when using backtick you can make line breaks


const datosDelAlumno = console.log(`Hello ${name}
    Welcome to your javascript college
    Age: ${age}
    Student: ${student}
    `)

//arrow function declaration with past parameters

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
let message = ''

if (age < 18) {
    message = 'You are a minor, you cannot enter the javascript school'

} else if (age >= 18 && age <= 90){
    message = `${name} You're older, you can pass!`
    
} else {
    message = `${name} eres demasiado mayor, tienes ${age}años, no puedes ingresar a la escuela`
}

return message
}
console.log(evaluateAge('jorge', 90, false))

//function that evaluates if you are older to study, receiving, name, age and if you are a student with a boolean, either false or true
//Tiene una pequeña logica, de ingreso a la escuela donde si sos mayor podes ingresar, si sos menor no pasas, y si sos mayor de edad no podes ingresar



//Repasando tipos de variables, tipos de datos, condicionales.