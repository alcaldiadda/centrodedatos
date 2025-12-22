export const CODIGOS_ERROR = {
  USUARIO_NO_ENCONTRADO: "USUARIO_NO_ENCONTRADO",
  CREDENCIALES_INVALIDAS: "CREDENCIALES_INVALIDAS",
  MARCACION_DUPLICADA: "MARCACION_DUPLICADA",
  ERROR_INTERNO: "ERROR_INTERNO",
} as const;

type TipoCodigoError = keyof typeof CODIGOS_ERROR;

export class APIError extends Error {
  public readonly codigo: TipoCodigoError;
  public readonly statusHttp: number;
  public readonly detalles?: Record<string, any>;

  constructor(
    codigo: TipoCodigoError,
    statusHttp: number = 400,
    mensaje?: string,
    detalles?: Record<string, any>
  ) {
    super(mensaje || codigo);
    this.name = "APIError";
    this.codigo = codigo;
    this.statusHttp = statusHttp;
    this.detalles = detalles;
  }
}
