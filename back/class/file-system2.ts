import { FileUpload } from '../interfaces/file-upload';
import path from 'path';
import fs from 'fs';
import uniqid from 'uniqid';

export default class FileSystem2 {

  constructor() { };

  guardarImagenTemporal(file: FileUpload, userId: string) { 
    const path = this.crearCarpetaUsuario(userId);

  }

  private generarNombreUnico(nombreOriginal: string) { 

  }


  private crearCarpetaUsuario(userId: string) {

    const pathUser = path.resolve(__dirname, '../uploads2/', userId);
    const pathUserTemp = pathUser + '/temp';

    const existe = fs.existsSync(pathUser);

    if (!existe) {
      fs.mkdirSync(pathUser);
      fs.mkdirSync(pathUserTemp);
    }
    return pathUserTemp;
  }

  imagenesDeTempHaciaPost(userId: string) { }

  private obtenerImagenesEnTemp(userId: string) { }

  getFotoUrl(userId: string, img: string) { }

}