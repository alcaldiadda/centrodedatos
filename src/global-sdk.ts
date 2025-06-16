import {
  buildAppwriteClientInstances,
  AppwriteClientConfig,
} from "./appwrite-sdk-builder";
import { createDb, AppwriteDBInterface } from "./db";
import { definicion } from "./definicion";
import { createFunc, CustomFunctions } from "./func";

type GlobalDbInstanceType = AppwriteDBInterface<typeof definicion>;
type GlobalFuncInstanceType = CustomFunctions;

// Variables privadas para las instancias globales
let _isInitialized = false;
let _globalDbInstance: GlobalDbInstanceType | null = null;
let _globalFuncInstance: GlobalFuncInstanceType | null = null;

// Handlers de Proxy para las instancias globales 'db' y 'func'
// Esto permite la sintaxis `db.database.collection` y la verificación de inicialización.
const globalDbProxyHandler: ProxyHandler<GlobalDbInstanceType> = {
  get: (target, prop, receiver) => {
    if (!_isInitialized || !_globalDbInstance) {
      throw new Error(
        "centro-de-datos: El SDK global no ha sido inicializado. Llama a `init()` primero."
      );
    }
    return Reflect.get(_globalDbInstance, prop, receiver);
  },
};

const globalFuncProxyHandler: ProxyHandler<GlobalFuncInstanceType> = {
  get: (target, prop, receiver) => {
    if (!_isInitialized || !_globalFuncInstance) {
      throw new Error(
        "centro-de-datos: El SDK global no ha sido inicializado. Llama a `init()` primero."
      );
    }
    return Reflect.get(_globalFuncInstance, prop, receiver);
  },
};

/**
 * Inicializa la instancia global del SDK 'centro-de-datos'.
 *
 * **¡IMPORTANTE!** Este método configura un cliente global de Appwrite.
 * Si necesitas manejar sesiones de usuario dinámicas por solicitud
 * (ej. en Next.js Server Components, API Routes), **NO uses este
 * 'db'/'func' global** para operaciones específicas del usuario.
 * En su lugar, usa la función `CentroDeDatos()` para crear instancias por solicitud.
 *
 * @param config Configuración para el cliente de Appwrite (endpoint,
 * projectId, apiKey u optional sessionToken).
 */
export const init = (config: AppwriteClientConfig): void => {
  if (_isInitialized) {
    console.warn(
      "centro-de-datos: El SDK global ya ha sido inicializado. La inicialización duplicada no tendrá efecto."
    );
    return;
  }

  if (typeof window === "undefined" && !config.apiKey && config.sessionToken) {
    // Si estamos en un entorno sin 'window' (SSR) y no se está usando una API Key
    console.warn(
      "centro-de-datos: Has inicializado el SDK global en un entorno SSR/Node.js " +
        "sin una `apiKey` y con un `sessionToken` o como cliente público. " +
        "Las instancias `db` y `func` globales no son adecuadas para sesiones de usuario dinámicas por solicitud. " +
        "Para sesiones de usuario en SSR, usa `CentroDeDatos({ endpoint, projectId, sessionToken })` directamente " +
        "en el contexto de cada solicitud para obtener instancias aisladas."
    );
  }

  const { databases, functions } = buildAppwriteClientInstances(config);

  _globalDbInstance = createDb(databases);
  _globalFuncInstance = createFunc(functions);
  _isInitialized = true;

  console.log("centro-de-datos: SDK global inicializado.");
};

export const db: GlobalDbInstanceType = new Proxy(
  {} as GlobalDbInstanceType,
  globalDbProxyHandler
);

export const func: GlobalFuncInstanceType = new Proxy(
  {} as GlobalFuncInstanceType,
  globalFuncProxyHandler
);
