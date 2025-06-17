import { Asistencia } from "root/types/asistencia";
export declare const asistencia: readonly [{
    readonly name: "asistencia";
    readonly id: "asistencia";
    readonly collections: readonly [{
        readonly name: "marcacion";
        readonly id: "marcacion";
        readonly documentType: Asistencia.MarcacionProps;
    }, {
        readonly name: "marcacionDiaria";
        readonly id: "marcacion-diaria";
        readonly documentType: Asistencia.MarcacionDiariaProps;
    }, {
        readonly name: "marcacionMensual";
        readonly id: "marcacion-Mensual";
        readonly documentType: Asistencia.MarcacionMensualProps;
    }, {
        readonly name: "ausencia";
        readonly id: "ausencia";
        readonly documentType: Asistencia.AusenciaProps;
    }, {
        readonly name: "feriado";
        readonly id: "feriado";
        readonly documentType: Asistencia.FeriadoProps;
    }, {
        readonly name: "jornada";
        readonly id: "jornada";
        readonly documentType: Asistencia.JornadaProps;
    }];
}];
export declare const TipoMarcacion: {
    readonly ENTRADA: "ENTRADA";
    readonly SALIDA: "SALIDA";
    readonly INICIO_COLACION: "INICIO_COLACION";
    readonly FIN_COLACION: "FIN_COLACION";
    readonly INCONCLUSA: "INCONCLUSA";
    readonly NO_HORARIO: "NO_HORARIO";
};
