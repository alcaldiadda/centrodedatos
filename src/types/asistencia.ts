import { JornadaTipo, TipoMarcacion } from "root/definicion/asistencia";
import { Models } from "node-appwrite";

declare namespace Asistencia {
  type MarcacionBase = {
    id_identidad?: string;
    fecha: string;
    tipo: string;
    id_jornada?: string;
    id_dispositivo: string;
    identidad_pin?: string;
    agregado_por?: string | null;
    actualizado_por?: string | null;
  };

  type MarcacionProps = MarcacionBase & Models.Row;

  type MarcacionBruta = Pick<
    MarcacionBase,
    "id_identidad" | "identidad_pin" | "fecha"
  >;

  export type Marcacion = Pick<
    MarcacionBase,
    "id_identidad" | "id_jornada" | "fecha" | "tipo"
  >;

  type MarcacionDiaria = {
    id_identidad: string;
    fecha: string;
    id_jornada?: string;
    hora_entrada: string;
    hora_salida: string;
    horas_trabajadas: string;
    inicio_colacion?: string;
    fin_colacion?: string;
    tiempo_colacion?: string;
    atraso: string;
    salida_anticipada: string;
    exceso_colacion: string;
    colacion_no_devuelta: string;
    horas_extras_25: string;
    horas_extras_50: string;
    colacion_en_rango: boolean | null;
    agregado_por?: string | null;
    actualizado_por?: string | null;
  };

  type MarcacionDiariaProps = MarcacionDiaria & Models.Row;

  type MarcacionMensual = {
    id_identidad: string;
    fecha: string;
    horas_trabajadas: string;
    atraso: string;
    salida_anticipada: string;
    horas_extras_25: string;
    horas_extras_50: string;
    colacion_no_devuelta: string;
    no_marco_colacion: number;
    agregado_por?: string | null;
    actualizado_por?: string | null;
  };

  type MarcacionMensualProps = MarcacionMensual & Models.Row;

  type RegistraMarcacion = {
    id_dispositivo: string;
    identidad_pin?: string;
    $id?: string;
    pid?: string;
    fecha_string: string;
  };

  type PresenciaDiaria = {
    id_identidad: string[];
    fecha: string;
  };

  type PresenciaDiariaProps = PresenciaDiaria & Models.Row;

  type Ausencia = {
    id_identidad: string;
    fecha: string;
  };

  type AusenciaProps = Ausencia & Models.Row;

  type Justificativo = {
    fecha_inicio: string;
    fecha_termino: string;
    id_identidad: string;
    tipo: string;
    id_reemplazante?: string;
    folio_decreto?: string;
    numero_dias: number;
    agregado_por?: string | null;
    actualizado_por?: string | null;
  };

  type JustificativoProps = Justificativo & Models.Row;

  type JustificacionArmonia = {
    run: string;
    fechaInicio: string;
    fechaTermino: string;
    numeroDecreto: number | null;
    idReemplazante?: number | null;
    dias: number;
    tipo: string;
  };

  type Feriado = {
    fecha: string;
    descripcion?: string;
  };

  type FeriadoProps = Feriado & Models.Row;

  type Jornada = {
    dia_semana?: string;
    entrada: string;
    salida: string;
    colacion_inicio?: string;
    colacion_fin?: string;
    fecha?: string;
    id_identidad?: string;
    tipo: typeof JornadaTipo;
  };

  type JornadaProps = Jornada & Models.Row;

  type TodosProps =
    | MarcacionProps
    | MarcacionDiariaProps
    | MarcacionMensualProps
    | JustificativoProps
    | FeriadoProps
    | JornadaProps;

  type SalidaTipoMarcacion = {
    tipo: (typeof TipoMarcacion)[keyof typeof TipoMarcacion];
    mensaje: string;
  };
}

export { Asistencia };
