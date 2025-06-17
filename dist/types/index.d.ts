import { Acceso } from "./acceso";
import { Asistencia } from "./asistencia";
import { Persona } from "./persona";
export type Documentos = Acceso.TodosProps | Asistencia.TodosProps | Persona.TodosProps;
export { Acceso, Asistencia, Persona };
