import { ExecutionMethod, Functions, Models } from "node-appwrite";
export interface CustomFunctions {
    registraMarcacion: (datos: Record<string, any>, async?: boolean, xpath?: string, method?: ExecutionMethod, headers?: object, scheduledAt?: string) => Promise<Models.Execution>;
}
/**
 * Crea y devuelve el objeto 'func' tipado para interactuar con las funciones de Appwrite.
 * Requiere una instancia inicializada de 'Functions'.
 */
export declare function createFunc(appwriteFunciones: Functions): CustomFunctions;
