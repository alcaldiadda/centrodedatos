import { acceso } from "./acceso";
import { asistencia } from "./asistencia";
import { gestorDocumental } from "./gestor-documental";
import { historial } from "./historial";
import { persona } from "./persona";

export const definicion = [
  ...acceso,
  ...asistencia,
  ...persona,
  ...gestorDocumental,
  ...historial,
] as const;
