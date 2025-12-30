import { Acceso } from "root/types/acceso";
export declare const acceso: readonly [{
    readonly name: "acceso";
    readonly id: "acceso";
    readonly tables: readonly [{
        readonly name: "dispositivo";
        readonly id: "dispositivo";
        readonly documentType: Acceso.DispositivoProps;
    }, {
        readonly name: "dispositivoComando";
        readonly id: "dispositivo-comando";
        readonly documentType: Acceso.DispositivoComandoProps;
    }, {
        readonly name: "dispositivoLog";
        readonly id: "dispositivo-log";
        readonly documentType: Acceso.DispositivoLogProps;
    }, {
        readonly name: "autorizacion";
        readonly id: "autorizacion";
        readonly documentType: Acceso.AutorizacionProps;
    }, {
        readonly name: "sincronizacion";
        readonly id: "sincronizacion";
        readonly documentType: Acceso.SincronizacionProps;
    }, {
        readonly name: "zona";
        readonly id: "zona";
        readonly documentType: Acceso.ZonaProps;
    }];
}];
export declare const EstadoEjecucion: {
    PENDIENTE: string;
    COMPLETADO: string;
    ERROR: string;
};
