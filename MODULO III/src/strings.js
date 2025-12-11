// strings.js
/** Compacta espacios múltiples y recorta extremos */
export const compact = s => String(s).trim().replace(/\s+/g, " ");
/** Title Case básico (ES) */
export const title = s => compact(s).replace(/\b\w/g, c =>
c.toUpperCase());
/** Slug URL-friendly (minúsculas, guiones) */
export const slug = s => compact(s).toLowerCase()
 .replace(/[^a-z0-9]+/g, "-")
 .replace(/^-+|-+$/g, "")