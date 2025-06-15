import { Databases, Functions, Query } from "node-appwrite";
import { initAppwriteServices } from "./appwrite";
import { createDbInstance } from "./db";
import { createFuncInstance } from "./func";

let _dbInstance: ReturnType<typeof createDbInstance> | null = null;
let _funcInstance: ReturnType<typeof createFuncInstance> | null = null;

// Variables para las instancias de Appwrite SDK, usadas internamente
let _appwriteDatabases: Databases | null = null;
let _appwriteFunctions: Functions | null = null;

/**
 * Inicializa el paquete con tus credenciales de Appwrite.
 * @param endpoint El endpoint de Appwrite.
 * @param projectId El ID del proyecto de Appwrite.
 * @param apiKey La clave API de Appwrite.
 */
export const init = (endpoint: string, projectId: string, apiKey: string) => {
  if (_dbInstance && _funcInstance) {
    console.warn("centro-de-datos: El paquete ya ha sido inicializado.");
    return;
  }

  const { databases, functions } = initAppwriteServices(
    endpoint,
    projectId,
    apiKey
  );

  _appwriteDatabases = databases;
  _appwriteFunctions = functions;

  _dbInstance = createDbInstance(databases);
  _funcInstance = createFuncInstance(functions);

  console.log("centro-de-datos: Paquete inicializado correctamente.");
};

/**
 * Proporciona acceso al cliente de base de datos de Appwrite.
 * Lanza un error si el paquete no ha sido inicializado.
 */
export const db = (): ReturnType<typeof createDbInstance> => {
  if (!_dbInstance) {
    throw new Error(
      "centro-de-datos: Debes llamar a init() antes de usar db()."
    );
  }
  return _dbInstance;
};

/**
 * Proporciona acceso a las funciones personalizadas de Appwrite.
 * Lanza un error si el paquete no ha sido inicializado.
 */
export const func = (): ReturnType<typeof createFuncInstance> => {
  if (!_funcInstance) {
    throw new Error(
      "centro-de-datos: Debes llamar a init() antes de usar func()."
    );
  }
  return _funcInstance;
};

export { Query };
