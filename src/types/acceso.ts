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

  type DispositivoComando = {
    numero_serie: string;
    tipo: string;
    payload: string;
    estado: typeof EstadoComando;
    intentos: number;
    respuesta?: string;
  };

  type DispositivoComandoProps = DispositivoComando & Models.Row;

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

  type TodosProps = DispositivoProps | DispositivoComandoProps;
}

export { Acceso };
