import { Historial } from "root/types/historial";

export const historial = [
  {
    name: "historial",
    id: "historial",
    tables: [
      {
        name: "accion",
        id: "accion",
        documentType: {} as Historial.AccionesProps,
      },
    ] as const,
  } as const,
] as const;
