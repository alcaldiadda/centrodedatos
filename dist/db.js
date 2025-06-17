"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDb = createDb;
var definicion_1 = require("./definicion");
/**
 * Crea y devuelve el objeto 'db' tipado para interactuar con las
 * bases de datos de Appwrite. Requiere una instancia inicializada de 'Databases'.
 */
function createDb(appwriteDatabases) {
    var db = {};
    definicion_1.definicion.forEach(function (dbConfig) {
        db[dbConfig.name] = {}; // Inicializa la DB en el objeto db
        dbConfig.collections.forEach(function (collectionConfig) {
            db[dbConfig.name][collectionConfig.name] = {
                list: function (queries) {
                    return appwriteDatabases.listDocuments(dbConfig.id, collectionConfig.id, queries || []);
                },
                get: function (documentId, queries) {
                    return appwriteDatabases.getDocument(dbConfig.id, collectionConfig.id, documentId, queries);
                },
                create: function (documentId, data, permissions) {
                    return appwriteDatabases.createDocument(dbConfig.id, collectionConfig.id, documentId, data, permissions);
                },
                update: function (documentId, data, permissions) {
                    return appwriteDatabases.updateDocument(dbConfig.id, collectionConfig.id, documentId, data, permissions);
                },
                delete: function (documentId) {
                    return appwriteDatabases.deleteDocument(dbConfig.id, collectionConfig.id, documentId);
                },
            };
        });
    });
    return db;
}
