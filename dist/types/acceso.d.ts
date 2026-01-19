import { Models } from "node-appwrite";
import { EstadoEjecucion } from "root/definicion/acceso";
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
    type Sincronizacion = {
        numero_serie: string;
        tipo: string;
        payload: string;
        estado?: typeof EstadoEjecucion;
        intentos?: number;
        respuesta?: string;
    };
    type SincronizacionProps = Sincronizacion & Models.Row;
    type Registro = {
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
    type RegistroProps = Registro & Models.Row;
    type Autorizacion = {
        id_identidad: string;
        id_zona: string;
        fecha_inicio?: string;
        fecha_fin?: string;
        habilitado: boolean;
    };
    type AutorizacionProps = Autorizacion & Models.Row;
    type Zona = {
        nombre: string;
        descripcion?: string;
    };
    type ZonaProps = Zona & Models.Row;
    type TodosProps = DispositivoProps | SincronizacionProps | RegistroProps | AutorizacionProps | ZonaProps;
}
export { Acceso };
