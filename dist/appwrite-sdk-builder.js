"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildAppwriteClientInstances = buildAppwriteClientInstances;
var node_appwrite_1 = require("node-appwrite");
/**
 * Construye y devuelve instancias inicializadas de Appwrite Databases y Functions.
 * Esta es una función de bajo nivel utilizada internamente por el paquete.
 *
 * @param config Configuración para el cliente de Appwrite.
 * @returns Un objeto que contiene instancias de Databases y Functions.
 */
function buildAppwriteClientInstances(config) {
    var client = new node_appwrite_1.Client()
        .setEndpoint(config.endpoint)
        .setProject(config.projectId);
    if (config.apiKey) {
        client.setKey(config.apiKey);
    }
    else if (config.sessionToken) {
        client.setSession(config.sessionToken);
    }
    else {
        throw new Error("Se debe proporcionar API KEY o SESSION TOKEN para inicializar el cliente de Appwrite.");
    }
    var databases = new node_appwrite_1.Databases(client);
    var functions = new node_appwrite_1.Functions(client);
    return { databases: databases, functions: functions };
}
