import { GestorDocumental } from "root/types";
export declare const gestorDocumental: readonly [{
    readonly name: "gestor-documental";
    readonly id: "gestor-documental";
    readonly collections: readonly [{
        readonly name: "expediente";
        readonly id: "expediente";
        readonly documentType: GestorDocumental.ExpedienteProps;
    }, {
        readonly name: "documento";
        readonly id: "documento";
        readonly documentType: GestorDocumental.DocumentoProps;
    }];
}];
