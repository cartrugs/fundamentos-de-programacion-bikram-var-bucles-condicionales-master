// Variables
//1
let variableSinValor;
//2
let booleano1 = false;

let booleano2 = true;
//3
const PI = 3.14;
//4
const TAU = PI * 2;

// Booleanos
//5
let booleanoAnd = booleano1 == booleano2;
//6
let booleanoNot = !booleano1;
//7
let booleanoMix0 =
  (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));

// Operadores
//8
let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;
//9
let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;

// Bucles
//10
let contarHasta10_2 = 0;

for (let i = 0; contarHasta10_2 !== 10; i++) {
  contarHasta10_2++;
}
//11
let postI = 0;
let postJ = 0;

for (let i = 0; i < 11; i++) {
  postI += postJ++;
}
//12
let sumaPares = 0;
let i = 0;

while (i < 10) {
  if (i % 2 === 0) {
    sumaPares += i;
  }
  i++;
}

// Variables
//13
let variableValorNumerico = 5;
//14
const MiNombre = "Carlos";
//15
const MiNumeroFav = 9;

// Booleanos
//16
const booleanoOr = booleano1 || booleano2;
//17
const booleanoMix1 =
  (booleano1 && TAU / 2 === PI) || variableValorNumerico >= MiNumeroFav;
//18
const seisNoEsNueve = 6 !== 9;
//19
const booleanoMix2 = variableValorNumerico && 1 < MiNumeroFav * TAU;

// Operadores
//20
const valorSuma = MiNumeroFav + variableValorNumerico;
//21
const valorResta = MiNumeroFav - variableValorNumerico;
//22
const valorMultiplicacion = MiNumeroFav * variableValorNumerico;
//23
const valorDivision = MiNumeroFav / 3;

// Bucles
//24
let contarHasta10 = 0;

while (contarHasta10 < 10) {
  contarHasta10++;
}
//25
let preI = 0;
let preJ = 0;

for (let i = 0; i < 11; i++) {
  preI += ++preJ;
}
//26
let sumaImpares = 0;

for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    sumaImpares += i;
  }
}
