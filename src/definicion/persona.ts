import { Persona } from "root/types/persona";

export const persona = [
  {
    name: "persona",
    id: "persona",
    tables: [
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
        name: "identidadAutenticacion",
        id: "identidad-autenticacion",
        documentType: {} as Persona.IdentidadAutenticacionProps,
      },
    ] as const,
  } as const,
] as const;
