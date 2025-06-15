"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = exports.init = exports.func = exports.db = void 0;
var node_appwrite_1 = require("node-appwrite");
Object.defineProperty(exports, "Query", { enumerable: true, get: function () { return node_appwrite_1.Query; } });
var appwrite_1 = require("./appwrite");
var db_1 = require("./db");
var func_1 = require("./func");
var _isInitialized = false;
var _actualDbInstance = null;
var _actualFuncInstance = null;
var dbHandler = {
    get: function (target, prop, receiver) {
        if (prop === "_isInitialized") {
            return _isInitialized;
        }
        if (!_isInitialized || !_actualDbInstance) {
            // lanzamos un error en cualquier intento de acceso
            // a una propiedad si no se ha inicializado.
            throw new Error("centro-de-datos: El paquete no ha sido inicializado. Llama a 'init(endpoint, projectId, apiKey)' antes de usar 'db'.");
        }
        return Reflect.get(_actualDbInstance, prop, receiver);
    },
};
// Inicialmente está vacío, pero intercepta los accesos.
exports.db = new Proxy({}, dbHandler);
var funcHandler = {
    get: function (target, prop, receiver) {
        if (prop === "_isInitialized") {
            return _isInitialized;
        }
        if (!_isInitialized || !_actualFuncInstance) {
            throw new Error("centro-de-datos: El paquete no ha sido inicializado. Llama a 'init(endpoint, projectId, apiKey)' antes de usar 'func'.");
        }
        return Reflect.get(_actualFuncInstance, prop, receiver);
    },
};
exports.func = new Proxy({}, funcHandler);
/**
 * Inicializa el paquete 'centro-de-datos' con tus credenciales de Appwrite.
 * Debe ser llamado una vez al inicio de tu aplicación.
 */
var init = function (endpoint, projectId, apiKey) {
    if (_isInitialized) {
        console.warn("centro-de-datos: El paquete ya ha sido inicializado.");
        return;
    }
    var _a = (0, appwrite_1.initAppwriteServices)(endpoint, projectId, apiKey), databases = _a.databases, functions = _a.functions;
    // Construye las instancias reales
    _actualDbInstance = (0, db_1.createDbInstance)(databases);
    _actualFuncInstance = (0, func_1.createFuncInstance)(functions);
    // Copia las propiedades de las instancias reales a los objetos proxy
    // Esto "rellena" los proxies con los métodos y propiedades correctas,
    // permitiendo que TypeScript infiera los tipos después de la inicialización.
    Object.assign(exports.db, _actualDbInstance);
    Object.assign(exports.func, _actualFuncInstance);
    _isInitialized = true;
    console.log("centro-de-datos: Paquete inicializado correctamente.");
};
exports.init = init;
