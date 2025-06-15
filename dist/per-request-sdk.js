"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CentroDeDatos = CentroDeDatos;
var db_1 = require("./db");
var func_1 = require("./func");
var appwrite_sdk_builder_1 = require("./appwrite-sdk-builder");
/**
 * Crea y devuelve un nuevo conjunto de instancias de `db` y `func`
 * para un contexto de solicitud específico.
 * @returns Un objeto `{ db, func }` con interfaces tipadas para la
 * base de datos y funciones.
 */
function CentroDeDatos(arg) {
    var databases;
    var functions;
    if ("databases" in arg && "functions" in arg) {
        databases = arg.databases;
        functions = arg.functions;
    }
    else {
        var clientInstances = (0, appwrite_sdk_builder_1.buildAppwriteClientInstances)(arg);
        databases = clientInstances.databases;
        functions = clientInstances.functions;
    }
    var dbInstance = (0, db_1.createDb)(databases);
    var funcInstance = (0, func_1.createFunc)(functions);
    return { db: dbInstance, func: funcInstance };
}
