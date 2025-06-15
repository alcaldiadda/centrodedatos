import { Query } from "node-appwrite";
import { createDbInstance } from "./db";
import { createFuncInstance } from "./func";
/**
 * Inicializa el paquete con tus credenciales de Appwrite.
 * @param endpoint El endpoint de Appwrite.
 * @param projectId El ID del proyecto de Appwrite.
 * @param apiKey La clave API de Appwrite.
 */
export declare const init: (endpoint: string, projectId: string, apiKey: string) => void;
/**
 * Proporciona acceso al cliente de base de datos de Appwrite.
 * Lanza un error si el paquete no ha sido inicializado.
 */
export declare const db: () => ReturnType<typeof createDbInstance>;
/**
 * Proporciona acceso a las funciones personalizadas de Appwrite.
 * Lanza un error si el paquete no ha sido inicializado.
 */
export declare const func: () => ReturnType<typeof createFuncInstance>;
export { Query };
