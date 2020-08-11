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
const file_system_1 = __importDefault(require("../class/file-system"));
const post2Routes = express_1.Router();
const fileSystem = new file_system_1.default();
// Servicio para subir archivos
post2Routes.post('/upload2', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.files) {
        return res.status(400).json({
            ok: false,
            mensaje: 'No se subió ningun archivo'
        });
    }
    const file = req.files.image;
    const verifica = [];
    verifica.push(file);
    // console.log(verifica)
    if (!file) {
        return res.status(400).json({
            ok: false,
            mensaje: 'No se subió ningun archivo - image'
        });
    }
    // for (let fileImg of verifica) {
    // if (!fileImg.mimetype.includes('image')) {
    //   return res.status(400).json({
    //     ok: false,
    //     mensaje: 'Lo que subió no es una imagen'
    //   });
    // }
    // var re = /\s*;\s*/  ---- [ 'image/png' ]
    // console.log(fileImg.mimetype.split(re))
    // https://stackoverflow.com/questions/5965808/how-can-i-remove-all-characters-up-to-and-including-the-3rd-slash-in-a-string
    // https://alligator.io/js/push-pop-shift-unshift-array-methods/
    // console.log(fileImg.mimetype.split('/').shift())
    // console.log(fileImg.mimetype.split('/').pop())
    // }
    res.json({
        ok: true,
        arquivo: file,
        file: file.mimetype
    });
}));
exports.default = post2Routes;
