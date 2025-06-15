import { ExecutionMethod, Functions } from "node-appwrite";

/**
 * Crea y devuelve el objeto 'func' tipado para interactuar con las funciones de Appwrite.
 * Requiere una instancia inicializada de 'Functions'.
 */
export function createFuncInstance(appwriteFunciones: Functions) {
  const func = {
    registraMarcacion: async (
      datos: Record<string, any>,
      async?: boolean,
      xpath?: string,
      method?: ExecutionMethod,
      headers?: object,
      scheduledAt?: string
    ) => {
      return appwriteFunciones.createExecution(
        "registra-marcacion",
        JSON.stringify(datos),
        async,
        xpath,
        method,
        headers,
        scheduledAt
      );
    },
  };
  return func;
}
