import { Persona } from "root/types/persona";
export declare const persona: readonly [{
    readonly name: "persona";
    readonly id: "persona";
    readonly tables: readonly [{
        readonly name: "identidad";
        readonly id: "identidad";
        readonly documentType: Persona.IdentidadProps;
    }, {
        readonly name: "departamento";
        readonly id: "departamento";
        readonly documentType: Persona.DepartamentoProps;
    }, {
        readonly name: "identidadDispositivo";
        readonly id: "identidad-dispositivo";
        readonly documentType: Persona.IdentidadDispositivoProps;
    }, {
        readonly name: "identidadAutenticacion";
        readonly id: "identidad-autenticacion";
        readonly documentType: Persona.IdentidadAutenticacionProps;
    }];
}];
