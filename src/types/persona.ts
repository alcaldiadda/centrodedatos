import { Models } from "node-appwrite";
import { EstadoEjecucion } from "root/definicion/acceso";

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

  type IdentidadLaboral = {
    contrato: string;
    id_departamento?: string;
    cargo?: string;
    jefe_directo?: string;
    ingreso_administración_publica?: string;
    ingreso_cargo?: string;
    ingreso_municipalidad?: string;
  };

  type IdentidadLaboralProps = IdentidadLaboral & Models.Row;

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

  type Sincronizacion = {
    pin: string;
    tipo: typeof EstadoEjecucion;
    payload: string;
  };

  type SincronizacionProps = Sincronizacion & Models.Row;

  type TodosProps =
    | IdentidadProps
    | IdentidadLaboralProps
    | DepartamentoProps
    | IdentidadAutenticacionProps
    | SincronizacionProps;
}

export { Persona };
