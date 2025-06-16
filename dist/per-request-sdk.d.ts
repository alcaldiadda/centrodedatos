import { Account, Avatars, Locale, Messaging, Storage, Teams, Users } from "node-appwrite";
import { AppwriteDBInterface } from "./db";
import { CustomFunctions } from "./func";
import { AppwriteClientConfig, AppwriteServiceInstances } from "./appwrite-sdk-builder";
import { definicion } from "./definicion";
/**
 * Tipo para el objeto devuelto por `CentroDeDatos()`.
 * Ahora incluye 'db', 'func' y todos los demás servicios de Appwrite.
 */
export interface CentroDeDatosInstances {
    db: AppwriteDBInterface<typeof definicion>;
    func: CustomFunctions;
    account: Account;
    users: Users;
    avatars: Avatars;
    locale: Locale;
    messaging: Messaging;
    storage: Storage;
    teams: Teams;
}
export declare function CentroDeDatos(appwriteSdkInstances: AppwriteServiceInstances): CentroDeDatosInstances;
export declare function CentroDeDatos(config: AppwriteClientConfig): CentroDeDatosInstances;
