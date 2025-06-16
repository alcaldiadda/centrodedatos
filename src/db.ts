// src/db.ts
import { Models, Databases } from "node-appwrite";
import { definicion } from "./definicion";

export interface CollectionConfig {
  readonly name: string;
  readonly id: string;
}

export interface DatabaseConfig {
  readonly name: string;
  readonly id: string;
  readonly collections: readonly CollectionConfig[];
}

export interface CollectionMethods<T extends Models.Document> {
  list: (queries?: string[]) => Promise<Models.DocumentList<T>>;
  get: (documentId: string) => Promise<T>;
  create: (
    documentId: string,
    data: object,
    permissions?: string[]
  ) => Promise<T>;
  update: (
    documentId: string,
    data: object,
    permissions?: string[]
  ) => Promise<T>;
  delete: (documentId: string) => Promise<object>;
}

export type AppwriteDBInterface<T extends readonly DatabaseConfig[]> = {
  [DBConfig in T[number] as DBConfig["name"]]: {
    [ColConfig in DBConfig["collections"][number] as ColConfig["name"]]: CollectionMethods<Models.Document>;
  };
};

/**
 * Crea y devuelve el objeto 'db' tipado para interactuar con las
 * bases de datos de Appwrite. Requiere una instancia inicializada de 'Databases'.
 */
export function createDb(
  appwriteDatabases: Databases
): AppwriteDBInterface<typeof definicion> {
  const db: AppwriteDBInterface<typeof definicion> = {} as AppwriteDBInterface<
    typeof definicion
  >;

  definicion.forEach((dbConfig) => {
    (db as any)[dbConfig.name] = {}; // Inicializa la DB en el objeto db

    dbConfig.collections.forEach((collectionConfig) => {
      (db as any)[dbConfig.name][collectionConfig.name] = {
        list: (queries?: string[]) =>
          appwriteDatabases.listDocuments(
            dbConfig.id,
            collectionConfig.id,
            queries || []
          ),
        get: (documentId: string, queries?: string[]) =>
          appwriteDatabases.getDocument(
            dbConfig.id,
            collectionConfig.id,
            documentId,
            queries
          ),
        create: (
          documentId: string,
          data: Record<string, any>,
          permissions: string[]
        ) =>
          appwriteDatabases.createDocument(
            dbConfig.id,
            collectionConfig.id,
            documentId,
            data,
            permissions
          ),
        update: (
          documentId: string,
          data: Record<string, any>,
          permissions: string[]
        ) =>
          appwriteDatabases.updateDocument(
            dbConfig.id,
            collectionConfig.id,
            documentId,
            data,
            permissions
          ),
        delete: (documentId: string) =>
          appwriteDatabases.deleteDocument(
            dbConfig.id,
            collectionConfig.id,
            documentId
          ),
      };
    });
  });

  return db;
}
