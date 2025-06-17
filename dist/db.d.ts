import { Databases, Models } from "node-appwrite";
import { definicion } from "./definicion";
import { Documentos } from "./types";
export interface CollectionConfig {
    readonly name: string;
    readonly id: string;
    readonly documentType?: Models.Document | Documentos;
}
export interface DatabaseConfig {
    readonly name: string;
    readonly id: string;
    readonly collections: readonly CollectionConfig[];
}
export interface CollectionMethods<T extends Models.Document = Models.Document> {
    list: (queries?: string[]) => Promise<Models.DocumentList<T>>;
    get: (documentId: string, queries?: string[]) => Promise<T>;
    create: (documentId: string, data: object, permissions?: string[]) => Promise<T>;
    update: (documentId: string, data: object, permissions?: string[]) => Promise<T>;
    delete: (documentId: string) => Promise<object>;
}
export type AppwriteDBInterface<T extends readonly DatabaseConfig[]> = {
    [DBConfig in T[number] as DBConfig["name"]]: {
        [ColConfig in DBConfig["collections"][number] as ColConfig["name"]]: ColConfig extends {
            documentType: infer D;
        } ? D extends Models.Document ? CollectionMethods<D> : CollectionMethods<Models.Document> : CollectionMethods<Models.Document>;
    };
};
/**
 * Crea y devuelve el objeto 'db' tipado para interactuar con las
 * bases de datos de Appwrite. Requiere una instancia inicializada de 'Databases'.
 */
export declare function createDb(appwriteDatabases: Databases): AppwriteDBInterface<typeof definicion>;
