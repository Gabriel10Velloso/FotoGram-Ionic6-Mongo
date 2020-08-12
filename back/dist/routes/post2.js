"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autenticacion_1 = require("../middlewares/autenticacion");
const file_system2_1 = __importDefault(require("../class/file-system2"));
const post2Routes = express_1.Router();
const fileSystem = new file_system2_1.default();
// Servicio para subir archivos
post2Routes.post('/upload2', [autenticacion_1.verificaToken], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.files) {
        return res.status(400).json({
            ok: false,
            mensaje: 'No se subió ningun archivo'
        });
    }
    const file = req.files.image;
    const verifica = [];
    if (!file) {
        return res.status(400).json({
            ok: false,
            mensaje: 'No se subió ningun archivo - image'
        });
    }
    // var re = /\s*;\s*/  ---- [ 'image/png' ]
    // console.log(fileImg.mimetype.split(re))
    // https://stackoverflow.com/questions/5965808/how-can-i-remove-all-characters-up-to-and-including-the-3rd-slash-in-a-string
    // https://alligator.io/js/push-pop-shift-unshift-array-methods/
    // console.log(fileImg.mimetype.split('/').shift())
    // console.log(fileImg.mimetype.split('/').pop())
    // }
    // if (!file.mimetype.includes('image')) {
    //   return res.status(400).json({
    //     ok: false,
    //     mensaje: 'Lo que subió no es una imagen'
    //   });
    // }
    yield fileSystem.guardarImagenTemporal(file, req.usuario._id);
    res.json({
        ok: true,
        arquivo: file,
        file: file.mimetype
    });
}));
exports.default = post2Routes;
