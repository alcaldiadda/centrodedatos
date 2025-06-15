"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = exports.func = exports.db = exports.init = void 0;
var node_appwrite_1 = require("node-appwrite");
Object.defineProperty(exports, "Query", { enumerable: true, get: function () { return node_appwrite_1.Query; } });
var appwrite_1 = require("./appwrite");
var db_1 = require("./db");
var func_1 = require("./func");
var _dbInstance = null;
var _funcInstance = null;
// Variables para las instancias de Appwrite SDK, usadas internamente
var _appwriteDatabases = null;
var _appwriteFunctions = null;
/**
 * Inicializa el paquete con tus credenciales de Appwrite.
 * @param endpoint El endpoint de Appwrite.
 * @param projectId El ID del proyecto de Appwrite.
 * @param apiKey La clave API de Appwrite.
 */
var init = function (endpoint, projectId, apiKey) {
    if (_dbInstance && _funcInstance) {
        console.warn("centro-de-datos: El paquete ya ha sido inicializado.");
        return;
    }
    var _a = (0, appwrite_1.initAppwriteServices)(endpoint, projectId, apiKey), databases = _a.databases, functions = _a.functions;
    _appwriteDatabases = databases;
    _appwriteFunctions = functions;
    _dbInstance = (0, db_1.createDbInstance)(databases);
    _funcInstance = (0, func_1.createFuncInstance)(functions);
    console.log("centro-de-datos: Paquete inicializado correctamente.");
};
exports.init = init;
/**
 * Proporciona acceso al cliente de base de datos de Appwrite.
 * Lanza un error si el paquete no ha sido inicializado.
 */
var db = function () {
    if (!_dbInstance) {
        throw new Error("centro-de-datos: Debes llamar a init() antes de usar db().");
    }
    return _dbInstance;
};
exports.db = db;
/**
 * Proporciona acceso a las funciones personalizadas de Appwrite.
 * Lanza un error si el paquete no ha sido inicializado.
 */
var func = function () {
    if (!_funcInstance) {
        throw new Error("centro-de-datos: Debes llamar a init() antes de usar func().");
    }
    return _funcInstance;
};
exports.func = func;
