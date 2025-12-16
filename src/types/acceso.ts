import { Models } from "node-appwrite";
import { EstadoComando } from "root/definicion/acceso";

declare namespace Acceso {
  type Dispositivo = {
    numero_serie: string;
    habilitado: boolean;
    ip?: string;
    logs: boolean;
    heartbeat?: string;
    puerto?: string;
    stamp: string;
    opStamp: string;
    pushver?: string;
    language?: string;
    pushOptionsFlag?: string;
    config?: string;
    mac?: string;
    cantidad_usuarios?: string;
    cantidad_huellas?: string;
    cantidad_rostros?: string;
    cantidad_espacio?: string;
    cantidad_registros?: string;
    id_zona: string;
  };

  type DispositivoProps = Dispositivo & Models.Row;

  type DispositivoLog = {
    numero_serie: string;
    codigo_op: string;
    nombre_op: string;
    fecha_hora: string;
    id_admin: string;
    paramtro1?: string;
    paramtro2?: string;
    paramtro3?: string;
    paramtro4?: string;
  };

  type DispositivoLogProps = DispositivoLog & Models.Row;

  type DispositivoComando = {
    numero_serie: string;
    comando: string;
    estado: typeof EstadoComando;
    intentos: number;
  };

  type DispositivoComandoProps = DispositivoComando & Models.Row;

  type DispositivoRespuesta = {
    numero_serie: string;
    comando: string;
    nombre_archivo?: string;
    contenido?: string;
    codigo_respuesta: number;
  };

  type DispositivoRespuestaProps = DispositivoRespuesta & Models.Row;

  type Autorizacion = {
    id_identidad: string;
    id_zona: string;
    fecha_inicio?: string;
    fecha_fin?: string;
  };

  type AutorizacionProps = Autorizacion & Models.Row;

  type Zona = {
    nombre: string;
    descripcion?: string;
  };

  type ZonaProps = Zona & Models.Row;

  type TodosProps =
    | DispositivoProps
    | DispositivoLogProps
    | DispositivoComandoProps
    | DispositivoRespuestaProps;
}

export { Acceso };
