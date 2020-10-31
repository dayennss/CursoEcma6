const arr  = [1,3,4,5,8,9];
// map serve para percorrer o vetor e retornar algo.

// const newArr = arr.map(function(item, idex){
//     return item +  idex;
// });

// com arrow function
const newArr = arr.map(item => item * 2);
console.log(newArr)

// ------
const sum = arr.reduce(function(total, next) {
    return total + next;
})
console.log(sum);

// ------- 
const filter = arr.filter(function(item) {
    return item % 2 === 0;
});
console.log(filter);

// -------
const find = arr.find(function(item) {
    return item === 4;
})
console.log(find)

// -----------------------------------------------

// valores padroes 
function soma(a = 3, b=6) {
    return a + b;
}
// com arrow function 
const soma2 = (a= 3, b=6) => a + b;

// -----------------------------------------------

// desestruturação 
const usuario = {
    nome: 'Dayene', 
    idade: 23,
    endereco: {
        cidade: 'Rio de janeiro',
        estado: 'Rio de janeiro'
    }
}
function mostraNome({nome, idade}) {
    console.log(nome, idade)
}
mostraNome(usuario)

// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------


console.log("******  OPERADORES REST/SPREAD ****** ")
// REST 
// serve para pegar o resto das propriedades
const usuario1 = {
    nome : 'Dayene',
    idade : 23,
    empresa: "Pixelhouse"
}
const {nome, ... resto } = usuario1;
console.log(nome)
console.log(resto)
// ----
// utilizção em vetores
console.log("****** Utilização em vetores ******")
console.log("****** Utilização em vetores ******")
console.log("****** Utilização em vetores ******")
console.log("****** Utilização em vetores ******")
const arrr = [1,2,3,4];
const [a, b, ...c] = arrr;
console.log(a)
console.log(b)
console.log(c)

console.log("")
console.log("")
console.log("")

console.log("****** Utilização em parametros de funções ****** ")
console.log("****** Utilização em parametros de funções ****** ")
console.log("****** Utilização em parametros de funções ****** ")
console.log("****** Utilização em parametros de funções ****** ")
function soma1(... params){
    return params.reduce((total,next) => total + next)
}
console.log(soma1(1,3))

console.log("****** SPREAD ****** ") 
const array1 = [1,2,3]
const array2 = [4,5,6]

const array3 = [... array1, ... array2]
console.log(array3)


const usuario2 = {
    nome: 'Dayene',
    idade: 23,
    empresa: 'Nicephotos'
}

const usuario3 = {... usuario2, nome: 'Sivya' }
console.log(usuario3)

console.log("****** TEMPLATE LITERALS ****** ")
console.log("****** TEMPLATE LITERALS ****** ")
console.log("****** TEMPLATE LITERALS ****** ")

const nome2 = 'Dayene'
const idade2 = 23;
// modo antigo.
console.log("Meu nome é " + nome2 + " e tenho " + idade2+ " anos.")
console.log(`Meu nome é ${nome2} e tenho ${idade2} anos.`)

console.log("")
console.log("")
console.log("OBJECT SHORT SYNTAX")
console.log("SINTAXE CURTA D OBJETO")

const nome5 = 'Dayene';
const idade5 = 23;

const usuario5 =  {
    nome5,
    idade5,
    empresa : 'Pixelhouse'
}
console.log(usuario5)