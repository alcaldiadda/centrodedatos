"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadoEjecucion = exports.acceso = void 0;
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
                name: "autorizacion",
                id: "autorizacion",
                documentType: {},
            },
            {
                name: "sincronizacion",
                id: "sincronizacion",
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
exports.EstadoEjecucion = {
    PENDIENTE: "PENDIENTE",
    COMPLETADO: "COMPLETADO",
    ERROR: "ERROR",
};
