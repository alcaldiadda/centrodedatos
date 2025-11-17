import {
  Account,
  Avatars,
  Locale,
  Messaging,
  Storage,
  Teams,
  Users,
} from "node-appwrite";
import {
  AppwriteClientConfig,
  AppwriteServiceInstances,
  buildAppwriteClientInstances,
} from "./appwrite-sdk-builder";
import { AppwriteDBInterface, createDb } from "./db";
import { definicion } from "./definicion";
import { createFunc, CustomFunctions } from "./func";

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

export function CentroDeDatos(
  appwriteSdkInstances: AppwriteServiceInstances
): CentroDeDatosInstances;

export function CentroDeDatos(
  config: AppwriteClientConfig
): CentroDeDatosInstances;

/**
 * Crea y devuelve un nuevo conjunto de instancias de `db`, `func`
 * y otros servicios de Appwrite para un contexto de solicitud específico.
 *
 * @param arg Un objeto que contiene instancias completas de los servicios de Appwrite, o un objeto de configuración.
 * @returns Un objeto `{ db, func, account, users, ... }` con interfaces tipadas.
 */
export function CentroDeDatos(
  arg: AppwriteServiceInstances | AppwriteClientConfig
): CentroDeDatosInstances {
  let serviceInstances: AppwriteServiceInstances;

  if ("client" in arg && "databases" in arg && "functions" in arg) {
    // Si se proporcionó una instancia completa de AppwriteServiceInstances
    serviceInstances = arg;
  } else {
    // Si se proporcionó solo la configuración, construir todas las instancias
    serviceInstances = buildAppwriteClientInstances(
      arg as AppwriteClientConfig
    );
  }

  const dbInstance = createDb(serviceInstances.tablesDb);
  const funcInstance = createFunc(serviceInstances.functions);

  return {
    db: dbInstance,
    func: funcInstance,
    account: serviceInstances.account,
    users: serviceInstances.users,
    avatars: serviceInstances.avatars,
    locale: serviceInstances.locale,
    messaging: serviceInstances.messaging,
    storage: serviceInstances.storage,
    teams: serviceInstances.teams,
  };
}
