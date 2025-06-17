export declare const definicion: readonly [{
    readonly name: "acceso";
    readonly id: "acceso";
    readonly collections: readonly [{
        readonly name: "dispositivo";
        readonly id: "dispositivo";
        readonly documentType: import("../types/acceso").Acceso.DispositivoProps;
    }, {
        readonly name: "dispositivoLog";
        readonly id: "dispositivo-log";
        readonly documentType: import("../types/acceso").Acceso.DispositivoLogProps;
    }, {
        readonly name: "dispositivoRespuesta";
        readonly id: "dispositivo-respuesta";
        readonly documentType: import("../types/acceso").Acceso.DispositivoRespuestaProps;
    }, {
        readonly name: "dispositivoComando";
        readonly id: "dispositivo-comando";
        readonly documentType: import("../types/acceso").Acceso.DispositivoComandoProps;
    }];
}, {
    readonly name: "asistencia";
    readonly id: "asistencia";
    readonly collections: readonly [{
        readonly name: "marcacion";
        readonly id: "marcacion";
        readonly documentType: import("../types/asistencia").Asistencia.MarcacionProps;
    }, {
        readonly name: "marcacionDiaria";
        readonly id: "marcacion-diaria";
        readonly documentType: import("../types/asistencia").Asistencia.MarcacionDiariaProps;
    }, {
        readonly name: "marcacionMensual";
        readonly id: "marcacion-Mensual";
        readonly documentType: import("../types/asistencia").Asistencia.MarcacionMensualProps;
    }, {
        readonly name: "ausencia";
        readonly id: "ausencia";
        readonly documentType: import("../types/asistencia").Asistencia.AusenciaProps;
    }, {
        readonly name: "feriado";
        readonly id: "feriado";
        readonly documentType: import("../types/asistencia").Asistencia.FeriadoProps;
    }, {
        readonly name: "jornada";
        readonly id: "jornada";
        readonly documentType: import("../types/asistencia").Asistencia.JornadaProps;
    }];
}, {
    readonly name: "persona";
    readonly id: "persona";
    readonly collections: readonly [{
        readonly name: "identidad";
        readonly id: "identidad";
        readonly documentType: import("../types/persona").Persona.IdentidadProps;
    }, {
        readonly name: "departamento";
        readonly id: "departamento";
        readonly documentType: import("../types/persona").Persona.DepartamentoProps;
    }, {
        readonly name: "identidadDispositivo";
        readonly id: "identidad-dispositivo";
        readonly documentType: import("../types/persona").Persona.IdentidadDispositivoProps;
    }, {
        readonly name: "identidadAutenticacion";
        readonly id: "identidad-autenticacion";
        readonly documentType: import("../types/persona").Persona.IdentidadAutenticacionProps;
    }];
}];
