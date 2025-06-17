"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CentroDeDatos = CentroDeDatos;
var appwrite_sdk_builder_1 = require("./appwrite-sdk-builder");
var db_1 = require("./db");
var func_1 = require("./func");
/**
 * Crea y devuelve un nuevo conjunto de instancias de `db`, `func`
 * y otros servicios de Appwrite para un contexto de solicitud específico.
 *
 * @param arg Un objeto que contiene instancias completas de los servicios de Appwrite, o un objeto de configuración.
 * @returns Un objeto `{ db, func, account, users, ... }` con interfaces tipadas.
 */
function CentroDeDatos(arg) {
    var serviceInstances;
    if ("client" in arg && "databases" in arg && "functions" in arg) {
        // Si se proporcionó una instancia completa de AppwriteServiceInstances
        serviceInstances = arg;
    }
    else {
        // Si se proporcionó solo la configuración, construir todas las instancias
        serviceInstances = (0, appwrite_sdk_builder_1.buildAppwriteClientInstances)(arg);
    }
    var dbInstance = (0, db_1.createDb)(serviceInstances.databases);
    var funcInstance = (0, func_1.createFunc)(serviceInstances.functions);
    return {
        db: dbInstance,
        func: funcInstance,
        account: serviceInstances.account,
        users: serviceInstances.users,
        avatars: serviceInstances.avatars,
        locale: serviceInstances.locale,
        messaging: serviceInstances.messaging,
        storage: serviceInstances.storage,
        teams: serviceInstances.teams,
    };
}
