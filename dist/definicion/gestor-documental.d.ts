import { GestorDocumental } from "root/types";
export declare const gestorDocumental: readonly [{
    readonly name: "gestorDocumental";
    readonly id: "gestorDocumental";
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
