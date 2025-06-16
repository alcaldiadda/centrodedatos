import { AppwriteClientConfig } from "./appwrite-sdk-builder";
import { AppwriteDBInterface } from "./db";
import { definicion } from "./definicion";
import { CustomFunctions } from "./func";
type GlobalDbInstanceType = AppwriteDBInterface<typeof definicion>;
type GlobalFuncInstanceType = CustomFunctions;
/**
 * Inicializa la instancia global del SDK 'centro-de-datos'.
 *
 * **¡IMPORTANTE!** Este método configura un cliente global de Appwrite.
 * Si necesitas manejar sesiones de usuario dinámicas por solicitud
 * (ej. en Next.js Server Components, API Routes), **NO uses este
 * 'db'/'func' global** para operaciones específicas del usuario.
 * En su lugar, usa la función `CentroDeDatos()` para crear instancias por solicitud.
 *
 * @param config Configuración para el cliente de Appwrite (endpoint,
 * projectId, apiKey u optional sessionToken).
 */
export declare const init: (config: AppwriteClientConfig) => void;
export declare const db: GlobalDbInstanceType;
export declare const func: GlobalFuncInstanceType;
export {};
