import { Account, Avatars, Locale, Messaging, Storage, Teams, Users } from "node-appwrite";
import { AppwriteClientConfig, AppwriteServiceInstances } from "./appwrite-sdk-builder";
import { AppwriteDBWithGlobals } from "./db";
import { definicion } from "./definicion";
import { CustomFunctions } from "./func";
/**
 * Tipo para el objeto devuelto por `CentroDeDatos()`.
 * Ahora incluye 'db', 'func' y todos los demás servicios de Appwrite.
 */
export interface CentroDeDatosInstances {
    db: AppwriteDBWithGlobals<typeof definicion>;
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
