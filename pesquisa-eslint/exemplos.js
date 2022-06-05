// REGRA: no-unused-vars
// variável foi declarada, mas nunca foi usada

const variavel = 0;

// REGRA: no-magic-numbers
// uso de números sem significado claro

let aviso = "";

const num = 3000;

setTimeout(() => {
  aviso = "Hello world!";
  console.log(aviso);
}, num);

// REGRA: eqeqeq
// uso de operadores de comparação não estrita (== / !=) em vez de estrita (=== / !==)

const numero = 10;
const string = "10";

const comparacao = numero === string;

console.log(comparacao);
