import { Acceso } from "root/types/acceso";

export const acceso = [
  {
    name: "acceso",
    id: "acceso",
    collections: [
      {
        name: "dispositivo",
        id: "dispositivo",
        documentType: {} as Acceso.DispositivoProps,
      },
      {
        name: "dispositivoLog",
        id: "dispositivo-log",
        documentType: {} as Acceso.DispositivoLogProps,
      },
      {
        name: "dispositivoRespuesta",
        id: "dispositivo-respuesta",
        documentType: {} as Acceso.DispositivoRespuestaProps,
      },

      {
        name: "dispositivoComando",
        id: "dispositivo-comando",
        documentType: {} as Acceso.DispositivoComandoProps,
      },
    ] as const,
  } as const,
] as const;
