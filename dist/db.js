"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDb = createDb;
var definicion_1 = require("./definicion");
/**
 * Crea y devuelve el objeto 'db' tipado para interactuar con las
 * bases de datos de Appwrite. Requiere una instancia inicializada de 'Databases'.
 */
function createDb(appwriteDatabases) {
    var db = {};
    // Métodos globales
    db.createOperations = function (props) { return appwriteDatabases.createOperations(props); };
    db.createTransaction = function (props) {
        return appwriteDatabases.createTransaction(props);
    };
    db.getTransaction = function (props) {
        return appwriteDatabases.getTransaction(props);
    };
    db.listTransaction = function (props) {
        return appwriteDatabases.listTransactions(props);
    };
    db.updateTransaction = function (props) { return appwriteDatabases.updateTransaction(props); };
    db.deleteTransaction = function (props) {
        return appwriteDatabases.deleteTransaction(props);
    };
    definicion_1.definicion.forEach(function (dbConfig) {
        db[dbConfig.name] = {}; // Inicializa la DB en el objeto db
        dbConfig.tables.forEach(function (tableConfig) {
            db[dbConfig.name][tableConfig.name] = {
                createRow: function (props) {
                    return appwriteDatabases.createRow(__assign(__assign({}, props), { databaseId: dbConfig.id, tableId: tableConfig.id }));
                },
                createRows: function (props) {
                    return appwriteDatabases.createRows(__assign(__assign({}, props), { databaseId: dbConfig.id, tableId: tableConfig.id }));
                },
                getRow: function (props) {
                    return appwriteDatabases.getRow(__assign(__assign({}, props), { databaseId: dbConfig.id, tableId: tableConfig.id }));
                },
                listRows: function (props) {
                    return appwriteDatabases.listRows(__assign(__assign({}, props), { databaseId: dbConfig.id, tableId: tableConfig.id }));
                },
                updateRow: function (props) {
                    return appwriteDatabases.updateRow(__assign(__assign({}, props), { databaseId: dbConfig.id, tableId: tableConfig.id }));
                },
                updateRows: function (props) {
                    return appwriteDatabases.updateRows(__assign(__assign({}, props), { databaseId: dbConfig.id, tableId: tableConfig.id }));
                },
                upsertRow: function (props) {
                    return appwriteDatabases.upsertRow(__assign(__assign({}, props), { databaseId: dbConfig.id, tableId: tableConfig.id }));
                },
                upsertRows: function (props) {
                    return appwriteDatabases.upsertRows(__assign(__assign({}, props), { databaseId: dbConfig.id, tableId: tableConfig.id }));
                },
                deleteRow: function (props) {
                    return appwriteDatabases.deleteRow(__assign(__assign({}, props), { databaseId: dbConfig.id, tableId: tableConfig.id }));
                },
                deleteRows: function (props) {
                    return appwriteDatabases.deleteRows(__assign(__assign({}, props), { databaseId: dbConfig.id, tableId: tableConfig.id }));
                },
                incrementRowColumn: function (props) {
                    return appwriteDatabases.incrementRowColumn(__assign(__assign({}, props), { databaseId: dbConfig.id, tableId: tableConfig.id }));
                },
                decrementRowColumn: function (props) {
                    return appwriteDatabases.decrementRowColumn(__assign(__assign({}, props), { databaseId: dbConfig.id, tableId: tableConfig.id }));
                },
            };
        });
    });
    return db;
}
