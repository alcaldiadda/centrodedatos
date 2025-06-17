import { Persona } from "helper/types/persona";

export const persona = [
  {
    name: "persona",
    id: "persona",
    collections: [
      {
        name: "identidad",
        id: "identidad",
        documentType: {} as Persona.IdentidadProps,
      },
      {
        name: "departamento",
        id: "departamento",
        documentType: {} as Persona.DepartamentoProps,
      },
      {
        name: "identidadDispositivo",
        id: "identidad-dispositivo",
        documentType: {} as Persona.IdentidadDispositivoProps,
      },
      {
        name: "identidadAutenticacion",
        id: "identidad-autenticacion",
        documentType: {} as Persona.IdentidadAutenticacionProps,
      },
    ] as const,
  } as const,
] as const;
