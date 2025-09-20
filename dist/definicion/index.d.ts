export declare const definicion: readonly [{
    readonly name: "acceso";
    readonly id: "acceso";
    readonly collections: readonly [{
        readonly name: "dispositivo";
        readonly id: "dispositivo";
        readonly documentType: import("..").Acceso.DispositivoProps;
    }, {
        readonly name: "dispositivoLog";
        readonly id: "dispositivo-log";
        readonly documentType: import("..").Acceso.DispositivoLogProps;
    }, {
        readonly name: "dispositivoRespuesta";
        readonly id: "dispositivo-respuesta";
        readonly documentType: import("..").Acceso.DispositivoRespuestaProps;
    }, {
        readonly name: "dispositivoComando";
        readonly id: "dispositivo-comando";
        readonly documentType: import("..").Acceso.DispositivoComandoProps;
    }];
}, {
    readonly name: "asistencia";
    readonly id: "asistencia";
    readonly collections: readonly [{
        readonly name: "marcacion";
        readonly id: "marcacion";
        readonly documentType: import("..").Asistencia.MarcacionProps;
    }, {
        readonly name: "marcacionDiaria";
        readonly id: "marcacion-diaria";
        readonly documentType: import("..").Asistencia.MarcacionDiariaProps;
    }, {
        readonly name: "marcacionMensual";
        readonly id: "marcacion-Mensual";
        readonly documentType: import("..").Asistencia.MarcacionMensualProps;
    }, {
        readonly name: "ausencia";
        readonly id: "ausencia";
        readonly documentType: import("..").Asistencia.AusenciaProps;
    }, {
        readonly name: "feriado";
        readonly id: "feriado";
        readonly documentType: import("..").Asistencia.FeriadoProps;
    }, {
        readonly name: "jornada";
        readonly id: "jornada";
        readonly documentType: import("..").Asistencia.JornadaProps;
    }];
}, {
    readonly name: "persona";
    readonly id: "persona";
    readonly collections: readonly [{
        readonly name: "identidad";
        readonly id: "identidad";
        readonly documentType: import("..").Persona.IdentidadProps;
    }, {
        readonly name: "departamento";
        readonly id: "departamento";
        readonly documentType: import("..").Persona.DepartamentoProps;
    }, {
        readonly name: "identidadDispositivo";
        readonly id: "identidad-dispositivo";
        readonly documentType: import("..").Persona.IdentidadDispositivoProps;
    }, {
        readonly name: "identidadAutenticacion";
        readonly id: "identidad-autenticacion";
        readonly documentType: import("..").Persona.IdentidadAutenticacionProps;
    }];
}, {
    readonly name: "gestorDocumental";
    readonly id: "gestorDocumental";
    readonly collections: readonly [{
        readonly name: "expediente";
        readonly id: "expediente";
        readonly documentType: import("../types").GestorDocumental.ExpedienteProps;
    }, {
        readonly name: "documento";
        readonly id: "documento";
        readonly documentType: import("../types").GestorDocumental.DocumentoProps;
    }];
}, {
    readonly name: "historial";
    readonly id: "historial";
    readonly collections: readonly [{
        readonly name: "accion";
        readonly id: "accion";
        readonly documentType: import("../types/historial").Historial.AccionesProps;
    }];
}];
