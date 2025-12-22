export declare const CODIGOS_ERROR: {
    readonly USUARIO_NO_ENCONTRADO: "USUARIO_NO_ENCONTRADO";
    readonly CREDENCIALES_INVALIDAS: "CREDENCIALES_INVALIDAS";
    readonly MARCACION_DUPLICADA: "MARCACION_DUPLICADA";
    readonly ERROR_INTERNO: "ERROR_INTERNO";
};
type TipoCodigoError = keyof typeof CODIGOS_ERROR;
export declare class APIError extends Error {
    readonly codigo: TipoCodigoError;
    readonly statusHttp: number;
    readonly detalles?: Record<string, any>;
    constructor(codigo: TipoCodigoError, statusHttp?: number, mensaje?: string, detalles?: Record<string, any>);
}
export {};
