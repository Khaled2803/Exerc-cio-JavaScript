// criar um aplicativo de frases motivacionais

// declaration - declaração da função
// function statement
/*
function createPhrases() {
    console.log('Estudar é muito bom')
    console.log('Paciência e persistência')
    console.log('Revisão é mãe do aprendizado')
}
*/

//executar a função
// rodar, chamar, invocar
// execute, run, call, invoke
/*
createPhrases()
createPhrases()
createPhrases()
createPhrases()

console.log('Fim do programa')
*/


//////////////////////////////////////////////

// function expression
// function anonymous

// parâmetros (parameters)
/*
const sum = function(number1, number2){
   // console.log(number1 + number2)
   total = number1 + number2
   return total
}

let number1 = 34
let number2 = 45

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
*/


// Função é um liquidificador

/*
function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã')

console.log(copo)
*/


// function scope
/*
let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(createThink(subject))
console.log(subject)
*/

// function hoisting 
/*
sayMyName()

function sayMyName() {
    console.log('Mayk')
}
*/

// arrow function
/*
const sayMyName = (name) => {
    console.log(name)
}

sayMyName('Mayk')
*/

//callback function
/*
function sayMyName(name) {
    console.log('antes de executar a funcao callback')

    name()

    console.log('depois de executar a callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)
*/

/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/ 

// Data - Date

/*
let date = new Date("2020-12-01")
console.log(date)
*/

/*
function Person(name) {
    this.name = name
    this.walk = function(){
        return this.name + " está andando"
    }
}

const mayk = new Person("Mayk")
const joao = new Person("Joao")
console.log(mayk.walk())
console.log(joao.walk())
*/







