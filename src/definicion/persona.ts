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
        name: "identidadLaboral",
        id: "identidad-laboral",
        documentType: {} as Persona.IdentidadLaboralProps,
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
      {
        name: "sincronizacion",
        id: "sincronizacion",
        documentType: {} as Persona.SincronizacionProps,
      },
    ] as const,
  } as const,
] as const;
