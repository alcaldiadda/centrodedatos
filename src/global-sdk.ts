import {
  Account,
  Avatars,
  Locale,
  Messaging,
  Storage,
  Teams,
  Users,
} from "node-appwrite";
import {
  AppwriteClientConfig,
  buildAppwriteClientInstances,
} from "./appwrite-sdk-builder";
import { AppwriteDBWithGlobals, createDb } from "./db";
import { definicion } from "./definicion";
import { createFunc, CustomFunctions } from "./func";

interface GlobalSDKCombinedInstance {
  db: AppwriteDBWithGlobals<typeof definicion>;
  func: CustomFunctions;
  account: Account;
  users: Users;
  avatars: Avatars;
  locale: Locale;
  messaging: Messaging;
  storage: Storage;
  teams: Teams;
}
// Variables privadas para las instancias globales
let _isInitialized = false;
let _actualGlobalSDKInstance: GlobalSDKCombinedInstance | null = null;

// Proxy Handler genérico para todos los servicios globales exportados
// Esto permite que 'db', 'func', 'account', etc. sean propiedades directas.
function createGlobalServiceProxyHandler<
  T extends keyof GlobalSDKCombinedInstance
>(serviceName: T): ProxyHandler<GlobalSDKCombinedInstance[T]> {
  return {
    get: (target, prop, receiver) => {
      if (!_isInitialized || !_actualGlobalSDKInstance) {
        throw new Error(
          "centro-de-datos: El SDK global no ha sido inicializado. Llama a `init()` primero."
        );
      }
      // Accede a la propiedad del servicio específico dentro de _actualGlobalSDKInstance
      const serviceInstance = _actualGlobalSDKInstance[serviceName];
      if (!serviceInstance) {
        // Esto no debería ocurrir si buildAppwriteClientInstances devuelve todo
        throw new Error(
          `centro-de-datos: El servicio '${String(
            serviceName
          )}' no se encontró en la instancia global inicializada.`
        );
      }
      return Reflect.get(serviceInstance, prop, receiver);
    },
  };
}

/**
 * Inicializa la instancia global del SDK 'centro-de-datos'.
 *
 * @param config Configuración para el cliente de Appwrite (endpoint, projectId, apiKey u optional sessionToken).
 */
export const init = (config: AppwriteClientConfig): void => {
  if (_isInitialized) {
    console.warn(
      "centro-de-datos: El SDK global ya ha sido inicializado. La inicialización duplicada no tendrá efecto."
    );
    return;
  }

  if (typeof window === "undefined" && !config.apiKey && !config.sessionToken) {
    console.warn(
      "centro-de-datos: Advertencia: Has inicializado el SDK global en un entorno SSR/Node.js " +
        "sin una `apiKey` y sin un `sessionToken` fijo. " +
        "Las instancias `db` y `func` globales NO son adecuadas para sesiones de usuario dinámicas por solicitud. " +
        "Para sesiones de usuario en SSR, usa `CentroDeDatos({ endpoint, projectId, sessionToken })` directamente " +
        "en el contexto de cada solicitud para obtener instancias aisladas."
    );
  } else if (
    typeof window === "undefined" &&
    !config.apiKey &&
    config.sessionToken
  ) {
    console.warn(
      "centro-de-datos: Advertencia: Has inicializado el SDK global en un entorno SSR/Node.js " +
        "sin una `apiKey` y con un `sessionToken` fijo. Ten en cuenta que este `sessionToken` " +
        "será el mismo para todas las solicitudes. Para sesiones de usuario dinámicas por solicitud, " +
        "usa `CentroDeDatos({ endpoint, projectId, sessionToken })` en el contexto de cada solicitud."
    );
  }

  const {
    tablesDb,
    functions,
    account,
    users,
    avatars,
    locale,
    messaging,
    storage,
    teams,
  } = buildAppwriteClientInstances(config);

  _actualGlobalSDKInstance = {
    db: createDb(tablesDb),
    func: createFunc(functions),
    account: account,
    users: users,
    avatars: avatars,
    locale: locale,
    messaging: messaging,
    storage: storage,
    teams: teams,
  };
  _isInitialized = true;

  console.log("centro-de-datos: SDK global inicializado.");
};

export const db: AppwriteDBWithGlobals<typeof definicion> = new Proxy(
  {} as AppwriteDBWithGlobals<typeof definicion>,
  createGlobalServiceProxyHandler("db")
);
export const func: CustomFunctions = new Proxy(
  {} as CustomFunctions,
  createGlobalServiceProxyHandler("func")
);
export const account: Account = new Proxy(
  {} as Account,
  createGlobalServiceProxyHandler("account")
);
export const users: Users = new Proxy(
  {} as Users,
  createGlobalServiceProxyHandler("users")
);
export const avatars: Avatars = new Proxy(
  {} as Avatars,
  createGlobalServiceProxyHandler("avatars")
);
export const locale: Locale = new Proxy(
  {} as Locale,
  createGlobalServiceProxyHandler("locale")
);
export const messaging: Messaging = new Proxy(
  {} as Messaging,
  createGlobalServiceProxyHandler("messaging")
);
export const storage: Storage = new Proxy(
  {} as Storage,
  createGlobalServiceProxyHandler("storage")
);
export const teams: Teams = new Proxy(
  {} as Teams,
  createGlobalServiceProxyHandler("teams")
);
