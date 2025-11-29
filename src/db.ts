// src/db.ts
import { Models, TablesDB } from "node-appwrite";
import { definicion } from "./definicion";
import { Filas } from "./types";

export interface TableConfig {
  readonly name: string;
  readonly id: string;
  readonly rowType?: Models.Row | Filas;
}

export interface DatabaseConfig {
  readonly name: string;
  readonly id: string;
  readonly tables: readonly TableConfig[];
}

export type GlobalMethods = {
  createOperations: (props: {
    transactionId: string;
    operations?: object[];
  }) => Promise<Models.Transaction>;
  createTransaction: (props?: { ttl?: number }) => Promise<Models.Transaction>;
  getTransaction: (props: {
    transactionId: string;
  }) => Promise<Models.Transaction>;
  listTransaction: (props?: {
    queries?: string[];
  }) => Promise<Models.TransactionList>;
  updateTransaction: (props: {
    transactionId: string;
    commit?: boolean;
    rollback?: boolean;
  }) => Promise<Models.Transaction>;
  deleteTransaction: (props: { transactionId: string }) => Promise<{}>;
};

export interface TablesMethods<T extends Models.Row = Models.Row> {
  createRow: (props: {
    rowId: string;
    data: Record<string, any>;
    permissions?: string[];
    transactionId?: string;
  }) => Promise<T>;
  createRows: (props: {
    rows: object[];
    transactionId?: string;
  }) => Promise<Models.RowList<T>>;

  getRow: (props: {
    rowId: string;
    queries?: string[];
    transactionId?: string;
  }) => Promise<T>;
  listRows: (props: {
    queries?: string[];
    transactionId?: string;
  }) => Promise<Models.RowList<T>>;

  updateRow: (props: {
    rowId: string;
    data: Record<string, any>;
    permissions?: string[];
    transactionId?: string;
  }) => Promise<T>;
  updateRows: (props: {
    data: Record<string, any>;
    queries?: string[];
    transactionId?: string;
  }) => Promise<Models.RowList<T>>;
  upsertRow: (props: {
    rowId: string;
    data: Record<string, any>;
    permissions?: string[];
    transactionId?: string;
  }) => Promise<T>;
  upsertRows: (props: {
    rows: object[];
    transactionId?: string;
  }) => Promise<Models.RowList<T>>;
  deleteRow: (props: { rowId: string; transactionId?: string }) => Promise<{}>;
  deleteRows: (props: {
    queries?: string[];
    transactionId?: string;
  }) => Promise<Models.RowList<T>>;
  incrementRowColumn: (props: {
    rowId: string;
    column: string;
    value?: number;
    max?: number;
    transactionId?: string;
  }) => Promise<T>;
  decrementRowColumn: (props: {
    rowId: string;
    column: string;
    value?: number;
    min?: number;
    transactionId?: string;
  }) => Promise<T>;
}

export type AppwriteDBInterface<T extends readonly DatabaseConfig[]> = {
  [DBConfig in T[number] as DBConfig["name"]]: {
    [ColConfig in DBConfig["tables"][number] as ColConfig["name"]]: ColConfig extends {
      // usa ese tipo para TablesMethods; de lo contrario, usa Models.Document como fallback.
      documentType: infer D;
    }
      ? D extends Models.Row
        ? TablesMethods<D>
        : TablesMethods<Models.Row>
      : TablesMethods<Models.Row>;
  };
};

export type AppwriteDBWithGlobals<T extends readonly DatabaseConfig[]> =
  AppwriteDBInterface<T> & GlobalMethods;

/**
 * Crea y devuelve el objeto 'db' tipado para interactuar con las
 * bases de datos de Appwrite. Requiere una instancia inicializada de 'Databases'.
 */
export function createDb(
  appwriteDatabases: TablesDB
): AppwriteDBWithGlobals<typeof definicion> {
  const db: AppwriteDBWithGlobals<typeof definicion> =
    {} as AppwriteDBWithGlobals<typeof definicion>;

  // Métodos globales
  db.createOperations = (props: {
    operations?: object[];
    transactionId: string;
  }) => appwriteDatabases.createOperations(props);

  db.createTransaction = (props?: { ttl?: number }) =>
    appwriteDatabases.createTransaction(props);

  db.getTransaction = (props: { transactionId: string }) =>
    appwriteDatabases.getTransaction(props);

  db.listTransaction = (props?: { queries?: string[] }) =>
    appwriteDatabases.listTransactions(props);

  db.updateTransaction = (props: {
    transactionId: string;
    commit?: boolean;
    rollback?: boolean;
  }) => appwriteDatabases.updateTransaction(props);

  db.deleteTransaction = (props: { transactionId: string }) =>
    appwriteDatabases.deleteTransaction(props);

  definicion.forEach((dbConfig) => {
    (db as any)[dbConfig.name] = {}; // Inicializa la DB en el objeto db

    dbConfig.tables.forEach((tableConfig) => {
      (db as any)[dbConfig.name][tableConfig.name] = {
        createRow: (props: {
          rowId: string;
          data: Record<string, any>;
          permissions?: string[];
          transactionId?: string;
        }) =>
          appwriteDatabases.createRow({
            ...props,
            databaseId: dbConfig.id,
            tableId: tableConfig.id,
          }),
        createRows: (props: { rows: object[]; transactionId?: string }) =>
          appwriteDatabases.createRows({
            ...props,
            databaseId: dbConfig.id,
            tableId: tableConfig.id,
          }),
        getRow: (props: {
          rowId: string;
          queries?: string[];
          transactionId?: string;
        }) =>
          appwriteDatabases.getRow({
            ...props,
            databaseId: dbConfig.id,
            tableId: tableConfig.id,
          }),
        listRows: (props: { queries?: string[]; transactionId?: string }) =>
          appwriteDatabases.listRows({
            ...props,
            databaseId: dbConfig.id,
            tableId: tableConfig.id,
          }),
        updateRow: (props: {
          rowId: string;
          data: Record<string, any>;
          permissions?: string[];
          transactionId?: string;
        }) =>
          appwriteDatabases.updateRow({
            ...props,
            databaseId: dbConfig.id,
            tableId: tableConfig.id,
          }),
        updateRows: (props: {
          data: Record<string, any>;
          queries?: string[];
          transactionId?: string;
        }) =>
          appwriteDatabases.updateRows({
            ...props,
            databaseId: dbConfig.id,
            tableId: tableConfig.id,
          }),
        upsertRow: (props: {
          rowId: string;
          data: Record<string, any>;
          permissions?: string[];
          transactionId?: string;
        }) =>
          appwriteDatabases.upsertRow({
            ...props,
            databaseId: dbConfig.id,
            tableId: tableConfig.id,
          }),
        upsertRows: (props: { rows: object[]; transactionId?: string }) =>
          appwriteDatabases.upsertRows({
            ...props,
            databaseId: dbConfig.id,
            tableId: tableConfig.id,
          }),
        deleteRow: (props: { rowId: string; transactionId?: string }) =>
          appwriteDatabases.deleteRow({
            ...props,
            databaseId: dbConfig.id,
            tableId: tableConfig.id,
          }),
        deleteRows: (props: { queries?: string[]; transactionId?: string }) =>
          appwriteDatabases.deleteRows({
            ...props,
            databaseId: dbConfig.id,
            tableId: tableConfig.id,
          }),
        incrementRowColumn: (props: {
          rowId: string;
          column: string;
          value?: number;
          max?: number;
          transactionId?: string;
        }) =>
          appwriteDatabases.incrementRowColumn({
            ...props,
            databaseId: dbConfig.id,
            tableId: tableConfig.id,
          }),
        decrementRowColumn: (props: {
          rowId: string;
          column: string;
          value?: number;
          min?: number;
          transactionId?: string;
        }) =>
          appwriteDatabases.decrementRowColumn({
            ...props,
            databaseId: dbConfig.id,
            tableId: tableConfig.id,
          }),
      };
    });
  });

  return db;
}
