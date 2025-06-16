import {
  Client,
  Databases,
  Functions,
  Account,
  Users,
  Avatars,
  Locale,
  Messaging,
  Storage,
  Teams,
} from "node-appwrite";

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
export function buildAppwriteClientInstances(
  config: AppwriteClientConfig
): AppwriteServiceInstances {
  const client = new Client()
    .setEndpoint(config.endpoint)
    .setProject(config.projectId);

  if (config.apiKey) {
    client.setKey(config.apiKey);
  } else if (config.sessionToken) {
    client.setSession(config.sessionToken);
  } else {
    throw new Error(
      "Se debe proporcionar API KEY o SESSION TOKEN para inicializar el cliente de Appwrite."
    );
  }

  const databases = new Databases(client);
  const functions = new Functions(client);
  const account = new Account(client);
  const users = new Users(client);
  const avatars = new Avatars(client);
  const locale = new Locale(client);
  const messaging = new Messaging(client);
  const storage = new Storage(client);
  const teams = new Teams(client);

  return {
    client,
    databases,
    functions,
    account,
    users,
    avatars,
    locale,
    messaging,
    storage,
    teams,
  };
}
