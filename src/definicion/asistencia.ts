import { Asistencia } from "root/types/asistencia";

export const asistencia = [
  {
    name: "asistencia",
    id: "asistencia",
    tables: [
      {
        name: "marcacion",
        id: "marcacion",
        documentType: {} as Asistencia.MarcacionProps,
      },
      {
        name: "marcacionDiaria",
        id: "marcacion-diaria",
        documentType: {} as Asistencia.MarcacionDiariaProps,
      },
      {
        name: "marcacionMensual",
        id: "marcacion-Mensual",
        documentType: {} as Asistencia.MarcacionMensualProps,
      },
      {
        name: "ausencia",
        id: "ausencia",
        documentType: {} as Asistencia.AusenciaProps,
      },
      {
        name: "feriado",
        id: "feriado",
        documentType: {} as Asistencia.FeriadoProps,
      },
      {
        name: "jornada",
        id: "jornada",
        documentType: {} as Asistencia.JornadaProps,
      },
    ] as const,
  } as const,
] as const;

export const TipoMarcacion = {
  ENTRADA: "ENTRADA",
  SALIDA: "SALIDA",
  INICIO_COLACION: "INICIO_COLACION",
  FIN_COLACION: "FIN_COLACION",
  INCONCLUSA: "INCONCLUSA",
  NO_HORARIO: "NO_HORARIO",
} as const;

export const JornadaTipo = {
  REGULAR: "regular",
  ESPECIAL: "especial",
  USUARIO: "usuario",
} as const;
