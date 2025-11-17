import { Client, Databases, Functions, TablesDB } from "node-appwrite";

/**
 * Función interna para inicializar el cliente de Appwrite y sus servicios.
 * Devuelve las instancias de Databases y Functions.
 */
export function initAppwriteServices(
  endpoint: string,
  projectId: string,
  apiKey: string
): {
  client: Client;
  databases: Databases;
  tablesDb: TablesDB;
  functions: Functions;
} {
  const client = new Client();

  client.setEndpoint(endpoint).setProject(projectId).setKey(apiKey);

  const databases = new Databases(client);
  const tablesDb = new TablesDB(client);
  const functions = new Functions(client);

  return { client, databases, tablesDb, functions };
}
