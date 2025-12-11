// arrays.js
export const unique = xs => [...new Set(xs)]; // elimina los elementos duplicados de un array ...new Set(xs) crea un conjunto con los elementos únicos del array xs y luego los convierte de nuevo en un array con [...conjunto]
/** chunk: divide un array en subarrays de tamaño size */
export const chunk = (xs, size=2) => { // divide un array en subarrays de tamaño size
 if (size <= 0) throw new Error("chunk: size>0");
 const out = [];
 for (let i = 0; i < xs.length; i += size) out.push(xs.slice(i,
i+size));
 return out;
};
/** groupBy: retorna {clave: elementos[]} */
export const groupBy = (xs, keyFn) => xs.reduce((acc, x) => {
 const k = keyFn(x);
 (acc[k] ??= []).push(x);
 return acc;
}, {});