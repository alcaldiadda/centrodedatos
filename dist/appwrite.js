"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initAppwriteServices = initAppwriteServices;
var node_appwrite_1 = require("node-appwrite");
/**
 * Función interna para inicializar el cliente de Appwrite y sus servicios.
 * Devuelve las instancias de Databases y Functions.
 */
function initAppwriteServices(endpoint, projectId, apiKey) {
    var client = new node_appwrite_1.Client();
    client.setEndpoint(endpoint).setProject(projectId).setKey(apiKey);
    var databases = new node_appwrite_1.Databases(client);
    var tablesDb = new node_appwrite_1.TablesDB(client);
    var functions = new node_appwrite_1.Functions(client);
    return { client: client, databases: databases, tablesDb: tablesDb, functions: functions };
}
