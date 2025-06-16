import { Databases, Functions } from "node-appwrite";
import { AppwriteDBInterface } from "./db";
import { CustomFunctions } from "./func";
import { AppwriteClientConfig } from "./appwrite-sdk-builder";
import { definicion } from "./definicion";
/**
 * Tipo para el objeto devuelto por `CentroDeDatos()`.
 */
interface CentroDeDatosInstances {
    db: AppwriteDBInterface<typeof definicion>;
    func: CustomFunctions;
}
export declare function CentroDeDatos(appwriteSdkInstances: {
    databases: Databases;
    functions: Functions;
}): CentroDeDatosInstances;
export declare function CentroDeDatos(config: AppwriteClientConfig): CentroDeDatosInstances;
export {};
