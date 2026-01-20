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
function createDb(appwriteTables) {
    var db = {};
    // Métodos globales
    db.createOperations = function (props) { return appwriteTables.createOperations(props); };
    db.createTransaction = function (props) {
        return appwriteTables.createTransaction(props);
    };
    db.getTransaction = function (props) {
        return appwriteTables.getTransaction(props);
    };
    db.listTransaction = function (props) {
        return appwriteTables.listTransactions(props);
    };
    db.updateTransaction = function (props) { return appwriteTables.updateTransaction(props); };
    db.deleteTransaction = function (props) {
        return appwriteTables.deleteTransaction(props);
    };
    definicion_1.definicion.forEach(function (dbConfig) {
        db[dbConfig.name] = {}; // Inicializa la DB en el objeto db
        dbConfig.tables.forEach(function (tableConfig) {
            db[dbConfig.name][tableConfig.name] = {
                createRow: function (props) {
                    return appwriteTables.createRow(__assign(__assign({}, props), { databaseId: dbConfig.id, tableId: tableConfig.id }));
                },
                createRows: function (props) {
                    return appwriteTables.createRows(__assign(__assign({}, props), { databaseId: dbConfig.id, tableId: tableConfig.id }));
                },
                getRow: function (props) {
                    return appwriteTables.getRow(__assign(__assign({}, props), { databaseId: dbConfig.id, tableId: tableConfig.id }));
                },
                listRows: function (props) {
                    return appwriteTables.listRows(__assign(__assign({}, props), { databaseId: dbConfig.id, tableId: tableConfig.id }));
                },
                updateRow: function (props) {
                    return appwriteTables.updateRow(__assign(__assign({}, props), { databaseId: dbConfig.id, tableId: tableConfig.id }));
                },
                updateRows: function (props) {
                    return appwriteTables.updateRows(__assign(__assign({}, props), { databaseId: dbConfig.id, tableId: tableConfig.id }));
                },
                upsertRow: function (props) {
                    return appwriteTables.upsertRow(__assign(__assign({}, props), { databaseId: dbConfig.id, tableId: tableConfig.id }));
                },
                upsertRows: function (props) {
                    return appwriteTables.upsertRows(__assign(__assign({}, props), { databaseId: dbConfig.id, tableId: tableConfig.id }));
                },
                deleteRow: function (props) {
                    return appwriteTables.deleteRow(__assign(__assign({}, props), { databaseId: dbConfig.id, tableId: tableConfig.id }));
                },
                deleteRows: function (props) {
                    return appwriteTables.deleteRows(__assign(__assign({}, props), { databaseId: dbConfig.id, tableId: tableConfig.id }));
                },
                incrementRowColumn: function (props) {
                    return appwriteTables.incrementRowColumn(__assign(__assign({}, props), { databaseId: dbConfig.id, tableId: tableConfig.id }));
                },
                decrementRowColumn: function (props) {
                    return appwriteTables.decrementRowColumn(__assign(__assign({}, props), { databaseId: dbConfig.id, tableId: tableConfig.id }));
                },
            };
        });
    });
    return db;
}
