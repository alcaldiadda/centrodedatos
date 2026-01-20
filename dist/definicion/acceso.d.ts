import { Acceso } from "root/types/acceso";
export declare const acceso: readonly [{
    readonly name: "acceso";
    readonly id: "acceso";
    readonly tables: readonly [{
        readonly name: "dispositivo";
        readonly id: "dispositivo";
        readonly documentType: Acceso.DispositivoProps;
    }, {
        readonly name: "monitorDispositivo";
        readonly id: "monitor-dispositivo";
        readonly documentType: Acceso.MonitorDispositivoProps;
    }, {
        readonly name: "autorizacion";
        readonly id: "autorizacion";
        readonly documentType: Acceso.AutorizacionProps;
    }, {
        readonly name: "registro";
        readonly id: "registro";
        readonly documentType: Acceso.RegistroProps;
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
