import { Router, Response } from 'express';
import { verificaToken } from '../middlewares/autenticacion';
import { Post } from '../models/post.model';
import { FileUpload } from '../interfaces/file-upload';
import FileSystem2 from '../class/file-system2';

const post2Routes = Router();

const fileSystem = new FileSystem2();


// Servicio para subir archivos
post2Routes.post('/upload2', [verificaToken], async (req: any, res: Response) => {
  if (!req.files) {
    return res.status(400).json({
      ok: false,
      mensaje: 'No se subió ningun archivo'
    });
  }
  const file: FileUpload = req.files.image;
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

  await fileSystem.guardarImagenTemporal(file, req.usuario._id);
  res.json({
    ok: true,
    arquivo: file,
    file: file.mimetype
  });
});


export default post2Routes;
