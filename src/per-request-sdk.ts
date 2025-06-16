import { Databases, Functions } from "node-appwrite";
import { createDb, AppwriteDBInterface } from "./db";
import { createFunc, CustomFunctions } from "./func";
import {
  AppwriteClientConfig,
  buildAppwriteClientInstances,
} from "./appwrite-sdk-builder";
import { definicion } from "./definicion";

/**
 * Tipo para el objeto devuelto por `CentroDeDatos()`.
 */
interface CentroDeDatosInstances {
  db: AppwriteDBInterface<typeof definicion>;
  func: CustomFunctions;
}

export function CentroDeDatos(appwriteSdkInstances: {
  databases: Databases;
  functions: Functions;
}): CentroDeDatosInstances;

export function CentroDeDatos(
  config: AppwriteClientConfig
): CentroDeDatosInstances;

/**
 * Crea y devuelve un nuevo conjunto de instancias de `db` y `func`
 * para un contexto de solicitud específico.
 * @returns Un objeto `{ db, func }` con interfaces tipadas para la
 * base de datos y funciones.
 */
export function CentroDeDatos(
  arg: { databases: Databases; functions: Functions } | AppwriteClientConfig
): CentroDeDatosInstances {
  let databases: Databases;
  let functions: Functions;

  if ("databases" in arg && "functions" in arg) {
    databases = arg.databases;
    functions = arg.functions;
  } else {
    const clientInstances = buildAppwriteClientInstances(arg);
    databases = clientInstances.databases;
    functions = clientInstances.functions;
  }

  const dbInstance = createDb(databases);
  const funcInstance = createFunc(functions);

  return { db: dbInstance, func: funcInstance };
}
