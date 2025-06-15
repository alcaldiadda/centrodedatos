import { ExecutionMethod, Functions } from "node-appwrite";
/**
 * Crea y devuelve el objeto 'func' tipado para interactuar con las funciones de Appwrite.
 * Requiere una instancia inicializada de 'Functions'.
 */
export declare function createFuncInstance(appwriteFunciones: Functions): {
    registraMarcacion: (datos: Record<string, any>, async?: boolean, xpath?: string, method?: ExecutionMethod, headers?: object, scheduledAt?: string) => Promise<import("node-appwrite").Models.Execution>;
};
