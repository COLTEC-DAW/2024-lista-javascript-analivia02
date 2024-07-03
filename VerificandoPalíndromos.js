let palavra = prompt("Digite uma palavra: ");
palavra = palavra.trim(); // Remove espaços em branco

let palavraInvertida = '';
for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
}
let ehPalindromo = true;
for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] !== palavraInvertida[i]) {
        ehPalindromo = false;
        break; 
    }
}
if (ehPalindromo) {
    console.log("A palavra \"" + palavra + "\" é um palíndromo.");
} else {
    console.log("A palavra \"" + palavra + "\" não é um palíndromo.");
}
