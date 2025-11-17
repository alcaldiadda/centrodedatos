"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teams = exports.storage = exports.messaging = exports.locale = exports.avatars = exports.users = exports.account = exports.func = exports.db = exports.init = void 0;
var appwrite_sdk_builder_1 = require("./appwrite-sdk-builder");
var db_1 = require("./db");
var func_1 = require("./func");
// Variables privadas para las instancias globales
var _isInitialized = false;
var _actualGlobalSDKInstance = null;
// Proxy Handler genérico para todos los servicios globales exportados
// Esto permite que 'db', 'func', 'account', etc. sean propiedades directas.
function createGlobalServiceProxyHandler(serviceName) {
    return {
        get: function (target, prop, receiver) {
            if (!_isInitialized || !_actualGlobalSDKInstance) {
                throw new Error("centro-de-datos: El SDK global no ha sido inicializado. Llama a `init()` primero.");
            }
            // Accede a la propiedad del servicio específico dentro de _actualGlobalSDKInstance
            var serviceInstance = _actualGlobalSDKInstance[serviceName];
            if (!serviceInstance) {
                // Esto no debería ocurrir si buildAppwriteClientInstances devuelve todo
                throw new Error("centro-de-datos: El servicio '".concat(String(serviceName), "' no se encontr\u00F3 en la instancia global inicializada."));
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
var init = function (config) {
    if (_isInitialized) {
        console.warn("centro-de-datos: El SDK global ya ha sido inicializado. La inicialización duplicada no tendrá efecto.");
        return;
    }
    if (typeof window === "undefined" && !config.apiKey && !config.sessionToken) {
        console.warn("centro-de-datos: Advertencia: Has inicializado el SDK global en un entorno SSR/Node.js " +
            "sin una `apiKey` y sin un `sessionToken` fijo. " +
            "Las instancias `db` y `func` globales NO son adecuadas para sesiones de usuario dinámicas por solicitud. " +
            "Para sesiones de usuario en SSR, usa `CentroDeDatos({ endpoint, projectId, sessionToken })` directamente " +
            "en el contexto de cada solicitud para obtener instancias aisladas.");
    }
    else if (typeof window === "undefined" &&
        !config.apiKey &&
        config.sessionToken) {
        console.warn("centro-de-datos: Advertencia: Has inicializado el SDK global en un entorno SSR/Node.js " +
            "sin una `apiKey` y con un `sessionToken` fijo. Ten en cuenta que este `sessionToken` " +
            "será el mismo para todas las solicitudes. Para sesiones de usuario dinámicas por solicitud, " +
            "usa `CentroDeDatos({ endpoint, projectId, sessionToken })` en el contexto de cada solicitud.");
    }
    var _a = (0, appwrite_sdk_builder_1.buildAppwriteClientInstances)(config), databases = _a.tablesDb, functions = _a.functions, account = _a.account, users = _a.users, avatars = _a.avatars, locale = _a.locale, messaging = _a.messaging, storage = _a.storage, teams = _a.teams;
    _actualGlobalSDKInstance = {
        db: (0, db_1.createDb)(databases),
        func: (0, func_1.createFunc)(functions),
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
exports.init = init;
exports.db = new Proxy({}, createGlobalServiceProxyHandler("db"));
exports.func = new Proxy({}, createGlobalServiceProxyHandler("func"));
exports.account = new Proxy({}, createGlobalServiceProxyHandler("account"));
exports.users = new Proxy({}, createGlobalServiceProxyHandler("users"));
exports.avatars = new Proxy({}, createGlobalServiceProxyHandler("avatars"));
exports.locale = new Proxy({}, createGlobalServiceProxyHandler("locale"));
exports.messaging = new Proxy({}, createGlobalServiceProxyHandler("messaging"));
exports.storage = new Proxy({}, createGlobalServiceProxyHandler("storage"));
exports.teams = new Proxy({}, createGlobalServiceProxyHandler("teams"));
