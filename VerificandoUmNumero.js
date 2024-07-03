function ehImpar(numero) {
    return numero % 2 !== 0;
  }
  function ehPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
    if (numero <= 3) {
      return true;
    }
    if (numero % 2 === 0 || numero % 3 === 0) {
      return false;
    }
    let i = 5;
    while (i * i <= numero) {
      if (numero % i === 0 || numero % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }
    return true;
  }
  function verificarNumero(funcaoVerificacao) {
    let numero = Number(prompt("Digite um número inteiro:"));
  
    let resultado = funcaoVerificacao(numero);
    console.log(` ${numero} ${resultado ? 'true' : 'false'}`);
  }
  // Verifica se o número é ímpar
  console.log("Verificação se o número é ímpar:");
  verificarNumero(ehImpar);
  
  // Verifica se o número é primo
  console.log("\nVerificação se o número é primo:");
  verificarNumero(ehPrimo);
  