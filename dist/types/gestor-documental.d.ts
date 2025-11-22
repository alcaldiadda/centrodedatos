import { Models } from "node-appwrite";
declare namespace GestorDocumental {
    type Expediente = {
        identificador: string;
        titulo: string;
        descripcion: string;
        categoria: string[];
        etiqueta: string[];
        estado: string;
        responsable: string;
        origen: string;
        autor: string;
        confidencial: boolean;
        sensible: boolean;
    };
    type ExpedienteProps = Expediente & Models.Row;
    type Documento = {
        identificador: string;
        titulo: string;
        descripcion: string;
        tipo_documento: string;
        estado: string;
        origen: string;
        autor: string;
        destino?: string;
        destinatario?: string;
        etiqueta: string[];
        categoria: string[];
        confidencial: boolean;
        sensible: boolean;
        version: string;
    };
    type DocumentoProps = Documento & Models.Row;
    type Entidad = {
        codigo: string;
        nombre: string;
        identificador: string;
        tipo: string[];
    };
    type EntidadProps = Entidad & Models.Row;
    type Relacion = {
        id_expediente: string;
        id_entidad: string;
        tipo_relacion: string;
    };
    type RelacionProps = Relacion & Models.Row;
    type VersionDocumento = {
        id_documento: string;
        numero: string;
        identidad: string;
        descripcion: string;
        fecha: string;
        url: string;
        hash: string;
        formato: string;
        fecha_captura?: string;
        resolucion_captura?: string;
        paginas: string;
        tamano: string;
        firma_electronica: string;
    };
    type VersionDocumentoProps = VersionDocumento & Models.Row;
    type TodosProps = ExpedienteProps | DocumentoProps | EntidadProps | RelacionProps | VersionDocumentoProps;
}
export { GestorDocumental };
