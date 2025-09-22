import { GestorDocumental } from "root/types";

export const gestorDocumental = [
  {
    name: "gestorDocumental",
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
      {
        name: "entidad",
        id: "entidad",
        documentType: {} as GestorDocumental.EntidadProps,
      },
      {
        name: "relacion",
        id: "relacion",
        documentType: {} as GestorDocumental.RelacionProps,
      },
      {
        name: "versionDocumento",
        id: "version-documento",
        documentType: {} as GestorDocumental.VersionDocumentoProps,
      },
    ] as const,
  } as const,
] as const;
