import { Models } from "node-appwrite";

declare namespace GestorDocumental {
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

  type ExpedienteProps = Expediente & Models.Row;

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

  type DocumentoProps = Documento & Models.Row;

  type Entidad = {
    codigo: string;
    nombre: string;
    identificador: string;
    tipo: string[];
  };

  type EntidadProps = Entidad & Models.Row;

  type Relacion = {
    idExpediente: string;
    idEntidad: string;
    tipoRelacion: string;
  };

  type RelacionProps = Relacion & Models.Row;

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

  type VersionDocumentoProps = VersionDocumento & Models.Row;

  type TodosProps =
    | ExpedienteProps
    | DocumentoProps
    | EntidadProps
    | RelacionProps
    | VersionDocumentoProps;
}

export { GestorDocumental };
