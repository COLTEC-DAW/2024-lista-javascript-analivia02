function countChars(frase, c) {
    let count = 0;

    for (let i = 0; i < frase.length; i++) {

        if (frase[i] == c) {
            count++;
        }
    }
    return count;
}
let palavra = prompt("Digite uma palavra:");
let caractere = prompt("Digite um caractere :");


let resultado = countChars(palavra, caractere);
console.log("O caractere '" + caractere + "' aparece " + resultado + " vezes em '" + palavra + "'");
