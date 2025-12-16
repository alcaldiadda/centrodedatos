"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadoComando = exports.acceso = void 0;
exports.acceso = [
    {
        name: "acceso",
        id: "acceso",
        tables: [
            {
                name: "dispositivo",
                id: "dispositivo",
                documentType: {},
            },
            {
                name: "dispositivoLog",
                id: "dispositivo-log",
                documentType: {},
            },
            {
                name: "dispositivoRespuesta",
                id: "dispositivo-respuesta",
                documentType: {},
            },
            {
                name: "dispositivoComando",
                id: "dispositivo-comando",
                documentType: {},
            },
            {
                name: "autorizacion",
                id: "autorizacion",
                documentType: {},
            },
            {
                name: "zona",
                id: "zona",
                documentType: {},
            },
        ],
    },
];
exports.EstadoComando = {
    PENDIENTE: "PENDIENTE",
    EJECUTADO: "EJECUTADO",
    ERROR: "ERROR",
};
