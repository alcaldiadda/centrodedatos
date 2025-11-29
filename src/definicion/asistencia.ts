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
        id: "marcacion-mensual",
        documentType: {} as Asistencia.MarcacionMensualProps,
      },
      {
        name: "presenciaDiaria",
        id: "presencia-diaria",
        documentType: {} as Asistencia.PresenciaDiariaProps,
      },
      {
        name: "ausencia",
        id: "ausencia",
        documentType: {} as Asistencia.AusenciaProps,
      },
      {
        name: "justificativo",
        id: "justificativo",
        documentType: {} as Asistencia.JustificativoProps,
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

export const TipoJustificativo = {
  PERMISOS_ADMINISTRATIVOS_SIN_GOCE: "PERMISOS_ADMINISTRATIVOS_SIN_GOCE",
  PERMISOS_ADMINISTRATIVOS: "PERMISOS_ADMINISTRATIVOS",
  TIEMPO_COMPENSADO: "TIEMPO_COMPENSADO",
  FERIADO_LEGAL: "FERIADO_LEGAL",
  LICENCIA_MEDICA: "LICENCIA_MEDICA",
};
