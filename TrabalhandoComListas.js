function toList(array){
    if(array.length == 0){
        return null;
    } else {
        return {
            value: array[0],
            rest: toList(array.slice(1))
        };
    }
}
function lerValores() {
    let valores = [];
    let valor;
    do {
        valor = prompt("Insira um numero inteiro (ou deixe em branco para encerrar):");
        if (valor !== "") {
            valores.push(Number(valor));
        }
    } while (valor !== "");
    return valores;
}
let valores = lerValores();
let lista = toList(valores);
console.log(lista);
