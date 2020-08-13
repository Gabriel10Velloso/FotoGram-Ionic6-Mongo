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
            // Mover el archivo del Temp a nuestra carpeta
            for (let img of nombre) {
                file.mv(`${path}/${img.image}`, (err) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve();
                    }
                });
            }
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
            const nombreArr = item.name.split('.');
            const extension = nombreArr[nombreArr.length - 1];
            const idUnico = uniqid_1.default();
            this.newName.push({ image: `${idUnico}.${extension}` });
        });
        return this.newName;
    }
    crearCarpetaUsuario(userId) {
        const pathUser = path_1.default.resolve(__dirname, '../uploads/', userId);
        const pathUserTemp = pathUser + '/temp';
        const existe = fs_1.default.existsSync(pathUser);
        if (!existe) {
            fs_1.default.mkdirSync(pathUser);
            fs_1.default.mkdirSync(pathUserTemp);
        }
        return pathUserTemp;
    }
    imagenesDeTempHaciaPost(userId) {
        const pathTemp = path_1.default.resolve(__dirname, '../uploads/', userId, 'temp');
        const pathPost = path_1.default.resolve(__dirname, '../uploads/', userId, 'posts');
        if (!fs_1.default.existsSync(pathTemp)) {
            return [];
        }
        if (!fs_1.default.existsSync(pathPost)) {
            fs_1.default.mkdirSync(pathPost);
        }
        const imagenesTemp = this.obtenerImagenesEnTemp(userId);
        imagenesTemp.forEach(imagen => {
            fs_1.default.renameSync(`${pathTemp}/${imagen}`, `${pathPost}/${imagen}`);
        });
        return imagenesTemp;
    }
    obtenerImagenesEnTemp(userId) {
        const pathTemp = path_1.default.resolve(__dirname, '../uploads/', userId, 'temp');
        return fs_1.default.readdirSync(pathTemp) || [];
    }
    getFotoUrl(userId, img) {
        // Path POSTs
        const pathFoto = path_1.default.resolve(__dirname, '../uploads', userId, 'posts', img);
        // Si la imagen existe
        const existe = fs_1.default.existsSync(pathFoto);
        if (!existe) {
            return path_1.default.resolve(__dirname, '../assets/400x250.jpg');
        }
        return pathFoto;
    }
}
exports.default = FileSystem2;
