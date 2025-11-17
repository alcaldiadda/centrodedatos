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
    var tablesDb = new node_appwrite_1.TablesDB(client);
    var functions = new node_appwrite_1.Functions(client);
    var account = new node_appwrite_1.Account(client);
    var users = new node_appwrite_1.Users(client);
    var avatars = new node_appwrite_1.Avatars(client);
    var locale = new node_appwrite_1.Locale(client);
    var messaging = new node_appwrite_1.Messaging(client);
    var storage = new node_appwrite_1.Storage(client);
    var teams = new node_appwrite_1.Teams(client);
    return {
        client: client,
        tablesDb: tablesDb,
        functions: functions,
        account: account,
        users: users,
        avatars: avatars,
        locale: locale,
        messaging: messaging,
        storage: storage,
        teams: teams,
    };
}
