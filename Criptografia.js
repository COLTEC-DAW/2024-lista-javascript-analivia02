function criptografia(texto, deslocamento) {
    let resultado = '';
  
    for (let i = 0; i < texto.length; i++) {
      let char = texto[i];

      if (char.match(/[A-Z]/)) {
        let code = texto.charCodeAt(i);
        let encryptedCode = ((code - 65 + deslocamento) % 26) + 65; 
        resultado += String.fromCharCode(encryptedCode);
      }
      else if (char.match(/[a-z]/)) {
        let code = texto.charCodeAt(i);
        let encryptedCode = ((code - 97 + deslocamento) % 26) + 97;
        resultado += String.fromCharCode(encryptedCode);
      }
      else {
        resultado += char;
      }
    }
  
    return resultado;
  }
  function lerString() {
    return prompt("Digite uma frase para criptografar:");
  }
  function lerDeslocamento() {
    let deslocamento = prompt("Digite um número inteiro de deslocamento (chave da cifra de César):");
    return parseInt(deslocamento);
  }
  
  function criptografar() {
    let textoOriginal = lerString();
    let deslocamento = lerDeslocamento();
    let textoCriptografado = criptografia(textoOriginal, deslocamento);
  
    console.log("Texto original:", textoOriginal);
    console.log("Texto criptografado:", textoCriptografado);
  }
  criptografar();
  