import { M, S, A, D } from "./index.js";
console.log("=== math ==="); // esta funcion es para probar las funciones del modulo math
console.log("sum(2,3) =", M.sum(2,3)); // ejemplo de uso de la funcion sum del modulo M suma dos numeros
console.log("avg([2,4,6]) =", M.avg([2,4,6])); // ejemplo de uso de la funcion avg del modulo M calcula el promedio de un array de numeros
console.log("clamp(12,0,10) =", M.clamp(12,0,10)); // ejemplo de uso de la funcion clamp del modulo M limita un numero entre un minimo y un maximo
console.log("ratio(25,100) =", M.ratio(25,100)); // ejemplo de uso de la funcion ratio del modulo M calcula el porcentaje que representa un numero respecto a otro
console.log("\n=== strings ==="); // esta funcion es para probar las funciones del modulo Strings
console.log('compact(" hola mundo ") =', S.compact(" hola mundo")); // elimina espacios al inicio y al final de una cadena
console.log('title("hola mundo") =', S.title("hola mundo")); // convierte la primera letra de cada palabra en mayuscula
console.log('slug("Hola Mundo 2025!") =', S.slug("Hola Mundo 2025!"));// convierte una cadena en un slug para URLs
console.log("\n=== arrays ==="); // esta funcion es para probar las funciones del modulo Arrays
console.log("unique([1,2,2,3]) =", A.unique([1,2,2,3])); // elimina los elementos duplicados de un array
console.log("chunk([1,2,3,4,5], 2) =", A.chunk([1,2,3,4,5], 2)); // divide un array en subarrays de un tamaño especificado
console.log('groupBy([{t:"A"}, {t:"b"},{t:"A"}],  x=>x.t) =', A.groupBy([{t:"a"},{t:"b"},{t:"a"}], x=>x.t)); // agrupa los elementos de un array según el resultado de una función
console.log("\n=== dates ==="); // esta funcion es para probar las funciones del modulo Dates
console.log("ymd() =", D.ymd()); // devuelve la fecha actual en formato YYYY-MM-DD
