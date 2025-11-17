import { Models } from "node-appwrite";

declare namespace Historial {
  type Accion = {
    entidad: string;
    idEntidad: string;
    accion: string; // crear_expediente, editar_metadatos, agregar_documento, etc
    informacionAnterior: string;
    informacionNueva: string[];
    fecha: string;
    usuario: string;
    ip: string;
  };

  type AccionesProps = Accion & Models.Row;
  type TodosProps = AccionesProps;
}

export { Historial };
