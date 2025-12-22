import {
  ID,
  Query,
  Models,
  AppwriteException,
  Permission,
  Role,
  Operator,
} from "node-appwrite";
import {
  Acceso,
  Asistencia,
  Persona,
  GestorDocumental,
  Historial,
} from "./types";
import {
  JornadaTipo,
  TipoMarcacion,
  TipoJustificativo,
} from "./definicion/asistencia";
import { EstadoComando } from "./definicion/acceso";
import { APIError } from "./APIError";

export type { AppwriteClientConfig } from "./appwrite-sdk-builder";
export {
  init,
  db,
  func,
  account,
  users,
  avatars,
  locale,
  messaging,
  storage,
  teams,
} from "./global-sdk";

export { CentroDeDatos, CentroDeDatosInstances } from "./per-request-sdk";
export { ID, Query, Operator, Models, Permission, Role, AppwriteException };

export type {
  AppwriteDBInterface,
  TableConfig as CollectionConfig,
  TablesMethods as CollectionMethods,
  DatabaseConfig,
} from "./db";

export { APIError };

export type { CustomFunctions } from "./func";

export { Acceso, Asistencia, Persona, GestorDocumental, Historial };

export { TipoMarcacion, JornadaTipo, TipoJustificativo, EstadoComando };
