/*
    Prototype

    * prototype-based language
    * prototype chain
    * __proto__
*/



/*
    Type conversion (typecasting) vs Type coersion

    *Alteração de um tipo de dado para outro tipo

*/

// console.log(Number('9') + 5)



// Manipulando Strings e Números

// Transformar String em Número e Número em String
/*
let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))
*/

// Manipulando Strings e Números

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

/*
let word = "Paralelepípedo"
console.log(word.length)
let number = 1234
console.log(String(number).length)
*/

// Manipulando Strings e Números

// Transformar um número quebrado com 2 casas decimais e trocar por vírgula

/*
let number = 245.23423423423
console.log(number.toFixed(2).replace(".", ","))
*/


// Transforme letras minúsculas em maiúsculas. Faça o contrário disso também

/*
let word = "Programar é muito bacana!"
console.log(word.toLowerCase().toUpperCase())
*/


// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

/*
let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toUpperCase())
*/

// Verificar se o texto contém a palavra

/*
let phrase = "Eu quero viver!"
console.log(phrase.includes("Amor"))
*/


// Manipulando Arrays

// Criar Array com construtor

/*
let myArray = new Array(10)
console.log(myArray)
*/


// Contar elementos de um Array
// console.log(["a", "b", "c"].length)


// Transformar uma cadeia de caracteres em elementos de um array
/*
let word = "manipulação"
console.log(Array.from(word))
*/


// Manipulando Arrays

//let techs = ["html", "css", "js"]

// adicionar um item no fim
//techs.push("nodejs")
// adicionar no começo
techs.unshift("sql")
// remover no fim
//techs.pop()
// remover no começo
//techs.shift()
// pegar somente alguns elementos do array
//console.log(techs.slice(1,3))
// remover 1 ou mais items em qualquer posição do Array
//techs.splice(1, 2)
// encontrar a posição de um elemento no Array
//let index = techs.indexOf('nodejs')
//techs.splice(index, 1)

//console.log(techs)

