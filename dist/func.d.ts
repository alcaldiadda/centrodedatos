import { ExecutionMethod, Functions, Models } from "node-appwrite";
type FunctionParams = (datos: Record<string, any>, async?: boolean, xpath?: string, method?: ExecutionMethod, headers?: object, scheduledAt?: string) => Promise<Models.Execution>;
declare const funciones: readonly [{
    readonly id: "registra-marcacion";
    readonly nombre: "registraMarcacion";
}, {
    readonly id: "procesa-jornada-diaria";
    readonly nombre: "procesaJornadaDiaria";
}, {
    readonly id: "actualiza-marcacion";
    readonly nombre: "actualizaMarcacion";
}, {
    readonly id: "agrega-identidad";
    readonly nombre: "agregaIdentidad";
}];
type FuncionNombre = (typeof funciones)[number]["nombre"];
export type CustomFunctions = {
    [K in FuncionNombre]: FunctionParams;
};
/**
 * Crea y devuelve el objeto 'func' tipado para interactuar con las funciones de Appwrite.
 * Requiere una instancia inicializada de 'Functions'.
 */
export declare function createFunc(appwriteFunciones: Functions): CustomFunctions;
export {};
