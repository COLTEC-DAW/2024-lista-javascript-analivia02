function ehVogal(caractere) {
    return 'aeiouAEIOU'.indexOf(caractere) !== -1;
  }
  function transformarStringDoUsuario() {
    let texto = prompt("Digite a palavra desejada:");

    console.log("Palavra original:", texto);
  
    let resultado1 = transformarString(texto, caixaAltaVogais);
    console.log("Caixa alta nas vogais:", resultado1);

    let resultado2 = transformarString(texto, caixaBaixaVogais);
    console.log("Caixa baixa nas vogais:", resultado2);
  }
  function transformarString(texto, funcaoTransformacao) {
    let resultado = '';
  
    for (let i = 0; i < texto.length; i++) {
      let caractere = texto[i];
      if (ehVogal(caractere)) {
        resultado += funcaoTransformacao(caractere);
      } else {
        resultado += caractere;
      }
    }
    return resultado;
  }
  function caixaAltaVogais(caractere) {
    if (ehVogal(caractere)) {
      return caractere.toUpperCase();
    } else {
      return caractere;
    }
  }
  function caixaBaixaVogais(caractere) {
    if (ehVogal(caractere)) {
      return caractere.toLowerCase();
    } else {
      return caractere;
    }
  }
  
  transformarStringDoUsuario();
  