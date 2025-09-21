import { Acceso } from "./acceso";
import { Asistencia } from "./asistencia";
import { Persona } from "./persona";
import { GestorDocumental } from "./gestor-documental";
import { Historial } from "./historial";
export type Documentos = Acceso.TodosProps | Asistencia.TodosProps | Persona.TodosProps | Historial.TodosProps;
export { Acceso, Asistencia, Persona, GestorDocumental, Historial };
