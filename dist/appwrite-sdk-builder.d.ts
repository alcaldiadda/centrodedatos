import { Client, Databases, Functions, Account, Users, Avatars, Locale, Messaging, Storage, Teams } from "node-appwrite";
/**
 * Opciones de configuración para construir un cliente Appwrite.
 * Puede ser con apiKey para administradores/servicios o con sessionToken para usuarios.
 */
export interface AppwriteClientConfig {
    endpoint: string;
    projectId: string;
    apiKey?: string;
    sessionToken?: string;
}
/**
 * Interfaz que define todas las instancias de los servicios de
 * Appwrite que se construirán.
 */
export interface AppwriteServiceInstances {
    client: Client;
    databases: Databases;
    functions: Functions;
    account: Account;
    users: Users;
    avatars: Avatars;
    locale: Locale;
    messaging: Messaging;
    storage: Storage;
    teams: Teams;
}
/**
 * Construye y devuelve instancias inicializadas de Appwrite Databases y Functions.
 * Esta es una función de bajo nivel utilizada internamente por el paquete.
 *
 * @param config Configuración para el cliente de Appwrite.
 * @returns Un objeto que contiene instancias de Databases y Functions.
 */
export declare function buildAppwriteClientInstances(config: AppwriteClientConfig): AppwriteServiceInstances;
