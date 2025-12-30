import { Persona } from "root/types/persona";
export declare const persona: readonly [{
    readonly name: "persona";
    readonly id: "persona";
    readonly tables: readonly [{
        readonly name: "identidad";
        readonly id: "identidad";
        readonly documentType: Persona.IdentidadProps;
    }, {
        readonly name: "identidadLaboral";
        readonly id: "identidad-laboral";
        readonly documentType: Persona.IdentidadLaboralProps;
    }, {
        readonly name: "departamento";
        readonly id: "departamento";
        readonly documentType: Persona.DepartamentoProps;
    }, {
        readonly name: "identidadAutenticacion";
        readonly id: "identidad-autenticacion";
        readonly documentType: Persona.IdentidadAutenticacionProps;
    }, {
        readonly name: "sincronizacion";
        readonly id: "sincronizacion";
        readonly documentType: Persona.SincronizacionProps;
    }];
}];
