import { ID, Query } from "node-appwrite";
import {
  Acceso,
  Asistencia,
  Persona,
  GestorDocumental,
  Historial,
} from "./types";
import { JornadaTipo, TipoMarcacion } from "./definicion/asistencia";

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
export { ID, Query };

export type {
  AppwriteDBInterface,
  TableConfig as CollectionConfig,
  TablesMethods as CollectionMethods,
  DatabaseConfig,
} from "./db";

export type { CustomFunctions } from "./func";

export { Acceso, Asistencia, Persona, GestorDocumental, Historial };

export { TipoMarcacion, JornadaTipo };
