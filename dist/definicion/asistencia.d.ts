import { Asistencia } from "root/types/asistencia";
export declare const asistencia: readonly [{
    readonly name: "asistencia";
    readonly id: "asistencia";
    readonly tables: readonly [{
        readonly name: "marcacion";
        readonly id: "marcacion";
        readonly documentType: Asistencia.MarcacionProps;
    }, {
        readonly name: "marcacionDiaria";
        readonly id: "marcacion-diaria";
        readonly documentType: Asistencia.MarcacionDiariaProps;
    }, {
        readonly name: "marcacionMensual";
        readonly id: "marcacion-mensual";
        readonly documentType: Asistencia.MarcacionMensualProps;
    }, {
        readonly name: "presenciaDiaria";
        readonly id: "presencia-diaria";
        readonly documentType: Asistencia.PresenciaDiariaProps;
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
export declare const JornadaTipo: {
    readonly REGULAR: "regular";
    readonly ESPECIAL: "especial";
    readonly USUARIO: "usuario";
};
export declare const TipoAusencia: {
    PERMISOS_ADMINISTRATIVOS_SIN_GOCE: string;
    PERMISOS_ADMINISTRATIVOS: string;
    TIEMPO_COMPENSADO: string;
    FERIADO_LEGAL: string;
    LICENCIA_MEDICA: string;
    DESCONOCIDA: string;
};
