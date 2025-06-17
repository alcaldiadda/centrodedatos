import { Models } from "node-appwrite";

declare namespace Acceso {
  type Dispositivo = {
    numero_serie: string;
    ubicacion?: string;
    habilitado?: boolean;
    ip?: boolean;
    logs?: boolean;
    heartbeat?: boolean;
    puerto?: string;
    stamp?: string;
    opStamp?: string;
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
  };

  type DispositivoProps = Dispositivo & Models.Document;

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

  type DispositivoLogProps = DispositivoLog & Models.Document;

  type DispositivoComando = {
    numero_serie: string;
    comando: string;
    reintentos: number;
  };

  type DispositivoComandoProps = DispositivoComando & Models.Document;

  type DispositivoRespuesta = {
    numero_serie: string;
    comando: string;
    nombre_archivo?: string;
    contenido?: string;
    codigo_respuesta: number;
  };

  type DispositivoRespuestaProps = DispositivoRespuesta & Models.Document;

  type TodosProps =
    | DispositivoProps
    | DispositivoLogProps
    | DispositivoComandoProps
    | DispositivoRespuestaProps;
}

export { Acceso };
