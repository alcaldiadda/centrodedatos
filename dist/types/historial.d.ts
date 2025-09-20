import { Models } from "node-appwrite";
declare namespace Historial {
    type Accion = {
        entidad: string;
        idEntidad: string;
        accion: string;
        informacionAnterior: string;
        informacionNueva: string[];
        fecha: string;
        usuario: string;
        ip: string;
    };
    type AccionesProps = Accion & Models.Document;
    type TodosProps = AccionesProps;
}
export { Historial };
