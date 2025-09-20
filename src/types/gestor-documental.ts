import { Models } from "node-appwrite";

declare namespace GestorDocumental {
  type Documento = {
    identificador: string;
    titulo: string;
    descripcion: string;
    tipoDocumento: string; // oficio, decreto, memo
    fechaCreacion: string;
    fechaModificacion: string;
    estado: string; //borrador, firmado, aprobado, rechazado
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

  type DocumentoProps = Documento & Models.Document;

  type VersionDocumento = {
    idDocumento: string;
    numero: string; // numero version
    usuario: string;
    descripcion: string;
    fecha: string;
    url: string;
    hash: string;
    formato: string;
    fechaCaptura?: string;
    resolucionCaptura?: string;
    paginas: string;
    tamano: string;
    firmaElectronica: string;
  };

  type VersionDocumentoProps = VersionDocumento & Models.Document;

  type Expediente = {
    identificador: string;
    titulo: string;
    descripcion: string;
    categoria: string[];
    etiqueta: string[];
    estado: string; // abierto, cerrado, archivado
    responsable: string;
    origen: string;
    autor: string;
    confidencial: boolean;
    sensible: boolean;
  };

  type ExpedienteProps = Expediente & Models.Document;

  type TodosProps = DocumentoProps | VersionDocumentoProps | ExpedienteProps;
}

export { GestorDocumental };
