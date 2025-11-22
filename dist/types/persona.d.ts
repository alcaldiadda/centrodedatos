import { Models } from "node-appwrite";
declare namespace Persona {
    type Identidad = {
        nombre: string;
        pid: string;
        avatar?: boolean;
        telefono?: boolean;
        celular?: boolean;
        contrato: boolean;
        id_departamento?: string;
        estado: boolean;
        cargo?: string;
        fecha_nacimiento?: string;
        sexo?: string;
        extado_civil?: string;
        direcion?: string;
        comuna?: string;
        ciudad?: string;
        creado_por: string;
        actualizado_por: string;
    };
    type IdentidadProps = Identidad & Models.Row;
    type Departamento = {
        nombre: string;
        nombre_corto: string;
        id_padre?: string;
    };
    type DepartamentoProps = Departamento & Models.Row;
    type IdentidadDispositivo = {
        identidad_pin: string;
        id_dispositivo: string;
    };
    type IdentidadDispositivoProps = IdentidadDispositivo & Models.Row;
    type IdentidadAutenticacion = {
        id_identidad: string;
        tipo: string;
        contenido: string;
    };
    type IdentidadAutenticacionProps = IdentidadAutenticacion & Models.Row;
    type TodosProps = IdentidadProps | DepartamentoProps | IdentidadDispositivoProps | IdentidadAutenticacionProps;
}
export { Persona };
