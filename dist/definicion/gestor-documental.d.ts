import { GestorDocumental } from "root/types";
export declare const gestorDocumental: readonly [{
    readonly name: "gestorDocumental";
    readonly id: "gestor-documental";
    readonly collections: readonly [{
        readonly name: "expediente";
        readonly id: "expediente";
        readonly documentType: GestorDocumental.ExpedienteProps;
    }, {
        readonly name: "documento";
        readonly id: "documento";
        readonly documentType: GestorDocumental.DocumentoProps;
    }, {
        readonly name: "entidad";
        readonly id: "entidad";
        readonly documentType: GestorDocumental.EntidadProps;
    }, {
        readonly name: "relacion";
        readonly id: "relacion";
        readonly documentType: GestorDocumental.RelacionProps;
    }, {
        readonly name: "versionDocumento";
        readonly id: "version-documento";
        readonly documentType: GestorDocumental.VersionDocumentoProps;
    }];
}];
