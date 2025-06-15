"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.func = exports.db = exports.init = void 0;
var appwrite_sdk_builder_1 = require("./appwrite-sdk-builder");
var db_1 = require("./db");
var func_1 = require("./func");
// Variables privadas para las instancias globales
var _isInitialized = false;
var _globalDbInstance = null;
var _globalFuncInstance = null;
// Handlers de Proxy para las instancias globales 'db' y 'func'
// Esto permite la sintaxis `db.database.collection` y la verificación de inicialización.
var globalDbProxyHandler = {
    get: function (target, prop, receiver) {
        if (!_isInitialized || !_globalDbInstance) {
            throw new Error("centro-de-datos: El SDK global no ha sido inicializado. Llama a `init()` primero.");
        }
        return Reflect.get(_globalDbInstance, prop, receiver);
    },
};
var globalFuncProxyHandler = {
    get: function (target, prop, receiver) {
        if (!_isInitialized || !_globalFuncInstance) {
            throw new Error("centro-de-datos: El SDK global no ha sido inicializado. Llama a `init()` primero.");
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
var init = function (config) {
    if (_isInitialized) {
        console.warn("centro-de-datos: El SDK global ya ha sido inicializado. La inicialización duplicada no tendrá efecto.");
        return;
    }
    if (typeof window === "undefined" && !config.apiKey && config.sessionToken) {
        // Si estamos en un entorno sin 'window' (SSR) y no se está usando una API Key
        console.warn("centro-de-datos: Has inicializado el SDK global en un entorno SSR/Node.js " +
            "sin una `apiKey` y con un `sessionToken` o como cliente público. " +
            "Las instancias `db` y `func` globales no son adecuadas para sesiones de usuario dinámicas por solicitud. " +
            "Para sesiones de usuario en SSR, usa `CentroDeDatos({ endpoint, projectId, sessionToken })` directamente " +
            "en el contexto de cada solicitud para obtener instancias aisladas.");
    }
    var _a = (0, appwrite_sdk_builder_1.buildAppwriteClientInstances)(config), databases = _a.databases, functions = _a.functions;
    _globalDbInstance = (0, db_1.createDb)(databases);
    _globalFuncInstance = (0, func_1.createFunc)(functions);
    _isInitialized = true;
    console.log("centro-de-datos: SDK global inicializado.");
};
exports.init = init;
exports.db = new Proxy({}, globalDbProxyHandler);
exports.func = new Proxy({}, globalFuncProxyHandler);
