import { Query } from "node-appwrite";
import { createDbInstance } from "./db";
import { createFuncInstance } from "./func";
type DbProxy = ReturnType<typeof createDbInstance> & {
    _isInitialized?: boolean;
    [key: string]: any;
};
type FuncProxy = ReturnType<typeof createFuncInstance> & {
    _isInitialized?: boolean;
    [key: string]: any;
};
export declare const db: DbProxy;
export declare const func: FuncProxy;
/**
 * Inicializa el paquete 'centro-de-datos' con tus credenciales de Appwrite.
 * Debe ser llamado una vez al inicio de tu aplicación.
 */
export declare const init: (endpoint: string, projectId: string, apiKey: string) => void;
export { Query };
