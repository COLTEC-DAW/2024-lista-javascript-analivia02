function mod2(number) {
    return number % 2 == 0;
}
function mod(num, mod) {
    return num % mod == 0;
}

let numero1 = prompt("Digite um número para verificar se é divisível por 2:");
console.log("O número " + numero1 + " é divisível por 2?", mod2(numero1));

// Solicitar números para verificar se o primeiro é divisível pelo segundo
let numero2 = prompt("Digite o primeiro número:");
let numero3 = prompt("Digite o segundo número:");

console.log("O número " + numero2 + " é divisível por " + numero3 + "?", mod(numero2, numero3));
mod2();
mod();