"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoAusencia = exports.JornadaTipo = exports.TipoMarcacion = exports.asistencia = void 0;
exports.asistencia = [
    {
        name: "asistencia",
        id: "asistencia",
        tables: [
            {
                name: "marcacion",
                id: "marcacion",
                documentType: {},
            },
            {
                name: "marcacionDiaria",
                id: "marcacion-diaria",
                documentType: {},
            },
            {
                name: "marcacionMensual",
                id: "marcacion-mensual",
                documentType: {},
            },
            {
                name: "presenciaDiaria",
                id: "presencia-diaria",
                documentType: {},
            },
            {
                name: "ausencia",
                id: "ausencia",
                documentType: {},
            },
            {
                name: "feriado",
                id: "feriado",
                documentType: {},
            },
            {
                name: "jornada",
                id: "jornada",
                documentType: {},
            },
        ],
    },
];
exports.TipoMarcacion = {
    ENTRADA: "ENTRADA",
    SALIDA: "SALIDA",
    INICIO_COLACION: "INICIO_COLACION",
    FIN_COLACION: "FIN_COLACION",
    INCONCLUSA: "INCONCLUSA",
    NO_HORARIO: "NO_HORARIO",
};
exports.JornadaTipo = {
    REGULAR: "regular",
    ESPECIAL: "especial",
    USUARIO: "usuario",
};
exports.TipoAusencia = {
    PERMISOS_ADMINISTRATIVOS_SIN_GOCE: "PERMISOS_ADMINISTRATIVOS_SIN_GOCE",
    PERMISOS_ADMINISTRATIVOS: "PERMISOS_ADMINISTRATIVOS",
    TIEMPO_COMPENSADO: "TIEMPO_COMPENSADO",
    FERIADO_LEGAL: "FERIADO_LEGAL",
    LICENCIA_MEDICA: "LICENCIA_MEDICA",
    DESCONOCIDA: "DESCONOCIDA",
};
