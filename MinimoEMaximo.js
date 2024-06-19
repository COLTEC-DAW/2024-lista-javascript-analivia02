//Menor valor entre dois elementos
function min(a, b) {
    return a < b ? a : b;
}
//Maior valor entre dois elementos
function max(a, b) {
    return a > b ? a : b;
}
// Solicitar os elemntos
let elem1 = prompt("Digite o primeiro número:");
let elem2 = prompt("Digite o segundo número:");

let menorValor = min(elem1, elem2);
let maiorValor = max(elem1, elem2);

//saida
console.log("Menor valor entre " + elem1 + " e " + elem2 + " é:", menorValor);
console.log("Maior valor entre " + elem1 + " e " + elem2 + " é:", maiorValor);
