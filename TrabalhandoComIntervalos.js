function range(min, max, i) {
    let array = [];

    for (let vari = min; vari < max; vari += i) {
        array.push(vari);        
    }

    return array;
}
let min = parseInt(prompt("Informe o valor mínimo:"));
let max = parseInt(prompt("Informe o valor máximo:"));
let vari = parseInt(prompt("Digite a variação desejada"));


let result = range(min, max, vari);

console.log("Array resultante:", result);