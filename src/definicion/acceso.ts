import { Acceso } from "root/types/acceso";

export const acceso = [
  {
    name: "acceso",
    id: "acceso",
    tables: [
      {
        name: "dispositivo",
        id: "dispositivo",
        documentType: {} as Acceso.DispositivoProps,
      },
      {
        name: "autorizacion",
        id: "autorizacion",
        documentType: {} as Acceso.AutorizacionProps,
      },
      {
        name: "sincronizacion",
        id: "sincronizacion",
        documentType: {} as Acceso.SincronizacionProps,
      },
      {
        name: "zona",
        id: "zona",
        documentType: {} as Acceso.ZonaProps,
      },
    ] as const,
  } as const,
] as const;

export const EstadoEjecucion = {
  PENDIENTE: "PENDIENTE",
  COMPLETADO: "COMPLETADO",
  ERROR: "ERROR",
};
