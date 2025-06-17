"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoMarcacion = exports.asistencia = void 0;
exports.asistencia = [
    {
        name: "asistencia",
        id: "asistencia",
        collections: [
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
                id: "marcacion-Mensual",
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
