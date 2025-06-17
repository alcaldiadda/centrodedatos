import { JornadaTipo, TipoMarcacion } from "root/definicion/asistencia";
import { Models } from "node-appwrite";

declare namespace Asistencia {
  type MarcacionBase = {
    id_usuario?: string;
    fecha: string;
    tipo: string;
    creado_el: string;
    actualizado_el: string;
    agregado_por?: string;
    actualizado_por?: string;
    id_jornada?: string;
    id_dispositivo: string;
    identidad_pin: string;
  };

  type MarcacionProps = MarcacionBase & Models.Document;

  type MarcacionBruta = Pick<
    MarcacionBase,
    "id_usuario" | "identidad_pin" | "fecha"
  >;

  export type Marcacion = Pick<
    MarcacionBase,
    "id_usuario" | "id_jornada" | "fecha" | "tipo"
  >;

  type MarcacionDiaria = {
    id_usuario: string;
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
    agregado_por?: string;
    actualizado_por?: string;
    colacion_en_rango: boolean | null;
  };

  type MarcacionDiariaProps = MarcacionDiaria & Models.Document;

  type MarcacionMensual = {
    id_usuario: string;
    fecha: string;
    horas_trabajadas: string;
    atraso: string;
    salida_anticipada: string;
    horas_extras_25: string;
    horas_extras_50: string;
    colacion_no_devuelta: string;
    no_marco_colacion: number;
    agregado_por?: string;
    actualizado_por?: string;
  };

  type MarcacionMensualProps = MarcacionMensual & Models.Document;

  type RegistraMarcacion = {
    id_dispositivo?: string;
    identidad_pin?: string;
    $id?: string;
    pid?: string;
    fecha_string: string;
  };

  type Ausencia = {
    id_usuario: string;
    tipo: string;
    id_reemplazante?: string;
    agregado_por?: string;
    actualizado_por?: string;
    fecha_inicio: string;
    fecha_termino: string;
    folio_decreto?: string;
  };

  type AusenciaProps = Ausencia & Models.Document;

  type Feriado = {
    fecha: string;
    descripcion?: string;
    creado_el: string;
    actualizado_el: string;
  };

  type FeriadoProps = Feriado & Models.Document;

  type Jornada = {
    dia_semana?: string;
    entrada: string;
    salida: string;
    colacion_inicio?: string;
    colacion_fin?: string;
    fecha?: string;
    id_usuario?: string;
    tipo: typeof JornadaTipo;
    creado_el: string;
    actualizado_el: string;
  };

  type JornadaProps = Jornada & Models.Document;

  type TodosProps =
    | MarcacionProps
    | MarcacionDiariaProps
    | MarcacionMensualProps
    | AusenciaProps
    | FeriadoProps
    | JornadaProps;

  type SalidaTipoMarcacion = {
    tipo: (typeof TipoMarcacion)[keyof typeof TipoMarcacion];
    mensaje: string;
  };
}

export { Asistencia };
