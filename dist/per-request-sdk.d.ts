import { Databases, Functions } from "node-appwrite";
import { AppwriteDBInterface } from "./db";
import { CustomFunctions } from "./func";
import { AppwriteClientConfig } from "./appwrite-sdk-builder";
/**
 * Tipo para el objeto devuelto por `CentroDeDatos()`.
 */
interface CentroDeDatosInstances {
    db: AppwriteDBInterface<any>;
    func: CustomFunctions;
}
export declare function CentroDeDatos(appwriteSdkInstances: {
    databases: Databases;
    functions: Functions;
}): CentroDeDatosInstances;
export declare function CentroDeDatos(config: AppwriteClientConfig): CentroDeDatosInstances;
export {};
