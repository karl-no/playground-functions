// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let splitFrase = sentence.split(/[\s,]+/);
  return splitFrase;
}

// Desafio 4
function concatName(frase) {
  let fraseFinal = '';
  fraseFinal = frase[frase.length - 1] + ", " + frase[0];
  return fraseFinal;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  let empates = ties;
  let pontos = vitorias + empates;

  return pontos;
}

// Desafio 6
function highestCount(numeros) {
  let repeticoesMaiorNumero = 0;
  let maiorNumero = numeros[0];
  for (let i = 1; i < numeros.length; i += 1) {
    if (numeros[i] > maiorNumero) {
      maiorNumero = numeros[i + 1];
    }
  }
  for (let index = 0; index < numeros.length; index += 1){
    if (numeros[index] === maiorNumero){
      repeticoesMaiorNumero += 1;
    }
  }
  return repeticoesMaiorNumero;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
