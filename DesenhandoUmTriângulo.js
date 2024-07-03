function Triangulo() {
    let x = prompt("Digite a quantidade de linhas desejada");
 
 
    for (let i = 1; i <= x; i++) {
        let linha = '';
        for (let j = 1; j <= i; j++) {
            linha += '#';
        }
        console.log(linha);
    }
 
 
 }
 Triangulo();
