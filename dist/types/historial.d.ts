import { Models } from "node-appwrite";
declare namespace Historial {
    type Accion = {
        entidad: string;
        id_entidad: string;
        accion: string;
        informacion_anterior: string;
        informacionNueva: string[];
        fecha: string;
        id_identidad: string;
        ip: string;
    };
    type AccionesProps = Accion & Models.Row;
    type TodosProps = AccionesProps;
}
export { Historial };
