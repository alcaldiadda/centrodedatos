import { Query } from "node-appwrite";
import { initAppwriteServices } from "./appwrite";
import { createDbInstance } from "./db";
import { createFuncInstance } from "./func";

// Define el tipo del objeto 'db' que se exportará.
// Incluye una propiedad '_isInitialized' para control interno
// y un índice de string que devuelve 'never' si no está inicializado,
// o el tipo real si sí lo está.
type DbProxy = ReturnType<typeof createDbInstance> & {
  _isInitialized?: boolean;
  [key: string]: any;
};

// Define el tipo del objeto 'func' que se exportará.
type FuncProxy = ReturnType<typeof createFuncInstance> & {
  _isInitialized?: boolean;
  [key: string]: any;
};

let _isInitialized = false;
let _actualDbInstance: ReturnType<typeof createDbInstance> | null = null;
let _actualFuncInstance: ReturnType<typeof createFuncInstance> | null = null;

const dbHandler: ProxyHandler<DbProxy> = {
  get: (target, prop, receiver) => {
    if (prop === "_isInitialized") {
      return _isInitialized;
    }
    if (!_isInitialized || !_actualDbInstance) {
      // lanzamos un error en cualquier intento de acceso
      // a una propiedad si no se ha inicializado.
      throw new Error(
        "centro-de-datos: El paquete no ha sido inicializado. Llama a 'init(endpoint, projectId, apiKey)' antes de usar 'db'."
      );
    }

    return Reflect.get(_actualDbInstance, prop, receiver);
  },
};

// Inicialmente está vacío, pero intercepta los accesos.
export const db = new Proxy({} as DbProxy, dbHandler);

const funcHandler: ProxyHandler<FuncProxy> = {
  get: (target, prop, receiver) => {
    if (prop === "_isInitialized") {
      return _isInitialized;
    }
    if (!_isInitialized || !_actualFuncInstance) {
      throw new Error(
        "centro-de-datos: El paquete no ha sido inicializado. Llama a 'init(endpoint, projectId, apiKey)' antes de usar 'func'."
      );
    }
    return Reflect.get(_actualFuncInstance, prop, receiver);
  },
};

export const func = new Proxy({} as FuncProxy, funcHandler);

/**
 * Inicializa el paquete 'centro-de-datos' con tus credenciales de Appwrite.
 * Debe ser llamado una vez al inicio de tu aplicación.
 */
export const init = (endpoint: string, projectId: string, apiKey: string) => {
  if (_isInitialized) {
    console.warn("centro-de-datos: El paquete ya ha sido inicializado.");
    return;
  }

  const { databases, functions } = initAppwriteServices(
    endpoint,
    projectId,
    apiKey
  );

  // Construye las instancias reales
  _actualDbInstance = createDbInstance(databases);
  _actualFuncInstance = createFuncInstance(functions);

  // Copia las propiedades de las instancias reales a los objetos proxy
  // Esto "rellena" los proxies con los métodos y propiedades correctas,
  // permitiendo que TypeScript infiera los tipos después de la inicialización.
  Object.assign(db, _actualDbInstance);
  Object.assign(func, _actualFuncInstance);

  _isInitialized = true;
  console.log("centro-de-datos: Paquete inicializado correctamente.");
};

export { Query };
