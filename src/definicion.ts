export const definicion = [
  {
    name: "acceso",
    id: "acceso",
    collections: [
      {
        name: "dispositivo",
        id: "dispositivo",
      },
      {
        name: "dispositivoLog",
        id: "dispositivo-log",
      },
      {
        name: "dispositivoRespuesta",
        id: "dispositivo-respuesta",
      },

      {
        name: "dispositivoComando",
        id: "dispositivo-comando",
      },
    ],
  },
  {
    name: "asistencia",
    id: "asistencia",
    collections: [
      {
        name: "marcacion",
        id: "marcacion",
      },
      {
        name: "marcacionDiaria",
        id: "marcacion-diaria",
      },
      {
        name: "marcacionMensual",
        id: "marcacion-Mensual",
      },
      {
        name: "ausencia",
        id: "ausencia",
      },
      {
        name: "feriado",
        id: "feriado",
      },
      {
        name: "jornada",
        id: "jornada",
      },
    ],
  },
  {
    name: "persona",
    id: "persona",
    collections: [
      {
        name: "identidad",
        id: "identidad",
      },
      {
        name: "departamento",
        id: "departamento",
      },
      {
        name: "identidadDispositivo",
        id: "identidad-dispositivo",
      },
      {
        name: "identidadAutenticacion",
        id: "identidad-autenticacion",
      },
    ],
  },
] as const;
