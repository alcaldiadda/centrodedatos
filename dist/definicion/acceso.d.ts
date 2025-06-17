import { Acceso } from "root/types/acceso";
export declare const acceso: readonly [{
    readonly name: "acceso";
    readonly id: "acceso";
    readonly collections: readonly [{
        readonly name: "dispositivo";
        readonly id: "dispositivo";
        readonly documentType: Acceso.DispositivoProps;
    }, {
        readonly name: "dispositivoLog";
        readonly id: "dispositivo-log";
        readonly documentType: Acceso.DispositivoLogProps;
    }, {
        readonly name: "dispositivoRespuesta";
        readonly id: "dispositivo-respuesta";
        readonly documentType: Acceso.DispositivoRespuestaProps;
    }, {
        readonly name: "dispositivoComando";
        readonly id: "dispositivo-comando";
        readonly documentType: Acceso.DispositivoComandoProps;
    }];
}];
