"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFunc = createFunc;
var funciones = [
    {
        id: "registra-marcacion",
        nombre: "registraMarcacion",
    },
    {
        id: "procesa-jornada-diaria",
        nombre: "procesaJornadaDiaria",
    },
    {
        id: "actualiza-marcacion",
        nombre: "actualizaMarcacion",
    },
    {
        id: "agrega-identidad",
        nombre: "agregaIdentidad",
    },
];
/**
 * Crea y devuelve el objeto 'func' tipado para interactuar con las funciones de Appwrite.
 * Requiere una instancia inicializada de 'Functions'.
 */
function createFunc(appwriteFunciones) {
    var funcInstance = funciones.reduce(function (acc, _a) {
        var id = _a.id, nombre = _a.nombre;
        acc[nombre] = function (datos, async, xpath, method, headers, scheduledAt) {
            return appwriteFunciones.createExecution(id, JSON.stringify(datos), async, xpath, method, headers, scheduledAt);
        };
        return acc;
    }, {});
    return funcInstance;
}
