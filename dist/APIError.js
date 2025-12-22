"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIError = exports.CODIGOS_ERROR = void 0;
exports.CODIGOS_ERROR = {
    USUARIO_NO_ENCONTRADO: "USUARIO_NO_ENCONTRADO",
    CREDENCIALES_INVALIDAS: "CREDENCIALES_INVALIDAS",
    MARCACION_DUPLICADA: "MARCACION_DUPLICADA",
    ERROR_INTERNO: "ERROR_INTERNO",
};
var APIError = /** @class */ (function (_super) {
    __extends(APIError, _super);
    function APIError(codigo, statusHttp, mensaje, detalles) {
        if (statusHttp === void 0) { statusHttp = 400; }
        var _this = _super.call(this, mensaje || codigo) || this;
        _this.name = "APIError";
        _this.codigo = codigo;
        _this.statusHttp = statusHttp;
        _this.detalles = detalles;
        return _this;
    }
    return APIError;
}(Error));
exports.APIError = APIError;
