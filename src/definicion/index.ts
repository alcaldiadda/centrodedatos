import { acceso } from "./acceso";
import { asistencia } from "./asistencia";
import { persona } from "./persona";

export const definicion = [...acceso, ...asistencia, ...persona] as const;
