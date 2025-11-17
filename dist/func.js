"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
        acc[nombre] = function (props) {
            return appwriteFunciones.createExecution(__assign(__assign({}, props), { functionId: id, body: JSON.stringify(props.datos) }));
        };
        return acc;
    }, {});
    return funcInstance;
}
