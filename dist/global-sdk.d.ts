import { Account, Avatars, Locale, Messaging, Storage, Teams, Users } from "node-appwrite";
import { AppwriteClientConfig } from "./appwrite-sdk-builder";
import { AppwriteDBInterface } from "./db";
import { definicion } from "./definicion";
import { CustomFunctions } from "./func";
/**
 * Inicializa la instancia global del SDK 'centro-de-datos'.
 *
 * @param config Configuración para el cliente de Appwrite (endpoint, projectId, apiKey u optional sessionToken).
 */
export declare const init: (config: AppwriteClientConfig) => void;
export declare const db: AppwriteDBInterface<typeof definicion>;
export declare const func: CustomFunctions;
export declare const account: Account;
export declare const users: Users;
export declare const avatars: Avatars;
export declare const locale: Locale;
export declare const messaging: Messaging;
export declare const storage: Storage;
export declare const teams: Teams;
