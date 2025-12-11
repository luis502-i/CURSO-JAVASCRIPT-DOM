// math.js
/** Suma segura sobre números */
export const sum = (a, b) => {
 if (Number.isNaN(a) || Number.isNaN(b)) throw new Error("sum: NaN");
 return a + b;
};
/** Promedio robusto (array vacío → 0) */
export const avg = xs => {
 if (!Array.isArray(xs)) throw new Error("avg: xs debe ser array"); // si no es un array lanza error
 return xs.length ? xs.reduce((a, n) => a + n, 0) / xs.length : 0; // si el array no está vacío calcula el promedio, si está vacío devuelve 0
};
/** Clamp: limita n entre [min, max] */
export const clamp = (n, min, max) => Math.min(Math.max(n, min), max); // limita n entre min y max
/** Porcentaje (0..1) de n respecto a total (total>0) */
export const ratio = (n, total) => {
 if (total <= 0) return 0; // si total es menor o igual a 0 devuelve 0
 return n / total; // calcula el ratio, el ratio en este caso es  un porcentaje entre n y total
};
