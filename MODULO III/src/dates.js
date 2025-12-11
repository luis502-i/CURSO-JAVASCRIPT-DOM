// dates.js
/** Devuelve YYYY-MM-DD a partir de Date o timestamp */
export const ymd = (d = new Date()) => {
 const dt = (d instanceof Date) ? d : new Date(d);
 const pad = n => String(n).padStart(2,"0");
 return `${dt.getFullYear()}-${pad(dt.getMonth()+1)}-${pad(dt.getDate())}`;
};