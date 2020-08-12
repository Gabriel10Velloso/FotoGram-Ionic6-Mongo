"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
class FileSystem2 {
    constructor() { }
    ;
    guardarImagenTemporal(file, userId) {
        const path = this.crearCarpetaUsuario(userId);
    }
    generarNombreUnico(nombreOriginal) {
    }
    crearCarpetaUsuario(userId) {
        const pathUser = path_1.default.resolve(__dirname, '../uploads2/', userId);
        const pathUserTemp = pathUser + '/temp';
        const existe = fs_1.default.existsSync(pathUser);
        if (!existe) {
            fs_1.default.mkdirSync(pathUser);
            fs_1.default.mkdirSync(pathUserTemp);
        }
        return pathUserTemp;
    }
    imagenesDeTempHaciaPost(userId) { }
    obtenerImagenesEnTemp(userId) { }
    getFotoUrl(userId, img) { }
}
exports.default = FileSystem2;
