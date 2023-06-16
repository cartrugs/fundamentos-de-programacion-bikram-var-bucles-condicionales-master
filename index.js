// Variables

let variableSinValor;

let booleano1 = false;

let booleano2 = true;

const PI = 3.14;

const TAU = PI * 2;

// Booleanos

let booleanoAnd = booleano1 == booleano2;

let booleanoNot = !booleano1;

let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));

// Operadores

let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;

let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;

// Bucles

let contarHasta10_2 = 0;

for (let i = 0; contarHasta10_2 !== 10; i++) {
  contarHasta10_2++;
}

let postI = 0;
let postJ = 0;

for (let i = 0; i < 11; i++) {
  postI += postJ++;
}

let sumaPares = 0;
let i = 0;

while (i < 10) {
  if (i % 2 === 0) {
    sumaPares += i;
  }
    i++;
}

// Variables

let variableValorNumerico = 5;

const MiNombre = 'Carlos';

const MiNumeroFav = 9;

// Booleanos

const booleanoOr = booleano1 || booleano2;

const booleanoMix1 = (booleano1 && (TAU/2 === PI)) || (variableValorNumerico >= MiNumeroFav);

const seisNoEsNueve = 6 !== 9;

const booleanoMix2 = (variableValorNumerico && 1 < (MiNumeroFav * TAU));

// Operadores

const valorSuma = MiNumeroFav + variableValorNumerico;

const valorResta = MiNumeroFav - variableValorNumerico;

const valorMultiplicacion = MiNumeroFav * variableValorNumerico;

const valorDivision = MiNumeroFav / 3;

// Bucles
