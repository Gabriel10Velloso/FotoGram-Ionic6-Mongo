"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const uniqid_1 = __importDefault(require("uniqid"));
class FileSystem2 {
    // nombreArchivo: any = [];
    constructor() {
        this.newName = [];
    }
    ;
    guardarImagenTemporal(file, userId) {
        return new Promise((resolve, reject) => {
            const path = this.crearCarpetaUsuario(userId);
            // Nombre archivo
            const nombre = this.generarNombreUnico(file);
            console.log('ttttttttttt', nombre);
            // Mover el archivo del Temp a nuestra carpeta
            // file.mv(`${path}/${nombre}`, (err: any) => {
            //   if (err) {
            //     reject(err);
            //   } else {
            //     resolve();
            //   }
            // });
        });
    }
    generarNombreUnico(nombreOriginal) {
        if (nombreOriginal.length == undefined) {
            const nombreArr = nombreOriginal.name.split('.');
            const extension = nombreArr[nombreArr.length - 1];
            const idUnico = uniqid_1.default();
            this.newName.push({ image: `${idUnico}.${extension}` });
            return this.newName;
        }
        nombreOriginal.forEach((item, i) => {
            // 6.copy.jpg []
            const nombreArr = item.name.split('.');
            const extension = nombreArr[nombreArr.length - 1];
            const idUnico = uniqid_1.default();
            this.newName.push({ image: `${idUnico}.${extension}` });
        });
        return this.newName;
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
