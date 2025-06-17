"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.definicion = void 0;
var acceso_1 = require("./acceso");
var asistencia_1 = require("./asistencia");
var persona_1 = require("./persona");
exports.definicion = __spreadArray(__spreadArray(__spreadArray([], acceso_1.acceso, true), asistencia_1.asistencia, true), persona_1.persona, true);
