function lerValores() {
    let valores = [];
    let valor;
    do {
      valor = prompt("Insira um número inteiro (ou deixe em branco para encerrar):");
      if (valor !== "") {
        valores.push(Number(valor));
      }
    } while (valor !== "");
    return valores;
  }
  function ordenarVetor(array, criterioOrdenacao) {
    const n = array.length;
    let trocado;
    do {
      trocado = false;
      for (let i = 0; i < n - 1; i++) {
        if (criterioOrdenacao(array[i], array[i + 1])) {
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
          trocado = true;
        }
      }
    } while (trocado);
  
    return array;
  }
  function crescente(a, b) {
    return a > b;
  }
  function decrescente(a, b) {
    return a < b;
  }
  function crescenteImparesDecrescentePares(a, b) {
    if (a % 2 !== 0 && b % 2 !== 0) {
      return a > b; // ímpares: ordem crescente
    } else if (a % 2 === 0 && b % 2 === 0) {
      return a < b; //pares: ordem decrescente
    } else {
      // Um é ímpar e o outro é par: ímpar antes de par
      return a % 2 !== 0;
    }
  }
  let valores = lerValores();

  let ordenadoCrescente = ordenarVetor([...valores], crescente);
  console.log("Ordenação Crescente:", ordenadoCrescente);
  
  let ordenadoDecrescente = ordenarVetor([...valores], decrescente);
  console.log("Ordenação Decrescente:", ordenadoDecrescente);
  
  let ordenadoImparesCrescenteParesDecrescente = ordenarVetor([...valores], crescenteImparesDecrescentePares);
  console.log("Ordenação Ímpares Crescente e Pares Decrescente:", ordenadoImparesCrescenteParesDecrescente);
  