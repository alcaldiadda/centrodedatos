import { Client, Databases, Functions } from "node-appwrite";
/**
 * Función interna para inicializar el cliente de Appwrite y sus servicios.
 * Devuelve las instancias de Databases y Functions.
 */
export declare function initAppwriteServices(endpoint: string, projectId: string, apiKey: string): {
    client: Client;
    databases: Databases;
    functions: Functions;
};
