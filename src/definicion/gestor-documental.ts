import { GestorDocumental } from "root/types";

export const gestorDocumental = [
  {
    name: "gestor-documental",
    id: "gestor-documental",
    collections: [
      {
        name: "expediente",
        id: "expediente",
        documentType: {} as GestorDocumental.ExpedienteProps,
      },
      {
        name: "documento",
        id: "documento",
        documentType: {} as GestorDocumental.DocumentoProps,
      },
    ] as const,
  } as const,
] as const;
