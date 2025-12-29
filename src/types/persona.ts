import { Models } from "node-appwrite";

declare namespace Persona {
  type Identidad = {
    nombre: string;
    pid: string;
    avatar?: string;
    telefono?: string;
    celular?: string;
    estado: boolean;
    fecha_nacimiento?: string;
    sexo?: string;
    estado_civil?: string;
    direcion?: string;
    comuna?: string;
    ciudad?: string;
    nacionalidad?: string;
    pin?: string;
  };

  type IdentidadProps = Identidad & Models.Row;

  type Departamento = {
    nombre: string;
    nombre_corto: string;
    id_padre?: string;
  };

  type DepartamentoProps = Departamento & Models.Row;

  type IdentidadAutenticacion = {
    id_identidad: string;
    tipo: string;
    contenido: string;
  };

  type IdentidadAutenticacionProps = IdentidadAutenticacion & Models.Row;

  type TodosProps =
    | IdentidadProps
    | DepartamentoProps
    | IdentidadAutenticacionProps;
}

export { Persona };
