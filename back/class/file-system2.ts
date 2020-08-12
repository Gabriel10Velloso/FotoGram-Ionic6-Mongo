import { FileUpload } from '../interfaces/file-upload';
import path from 'path';
import fs from 'fs';
import uniqid from 'uniqid';

export default class FileSystem2 {
  newName: any = [];
  nombreArchivo: any = [];
  constructor() { };

  guardarImagenTemporal(file: FileUpload, userId: string) {
    const path = this.crearCarpetaUsuario(userId);

    // Nombre archivo
    const nombre = this.generarNombreUnico(file);
    console.log('ttttttttttt',  nombre);
  }

  private generarNombreUnico(nombreOriginal: any) {
    
    if (nombreOriginal.length == undefined) {
      const nombreArr = nombreOriginal.name.split('.');
      const extension = nombreArr[nombreArr.length - 1];
      const idUnico = uniqid();
      this.newName.push({image: `${idUnico}.${extension}`})
      return this.newName 
    }
    nombreOriginal.forEach((item: any, i: any) => {
      // 6.copy.jpg []
      const nombreArr = item.name.split('.');
      const extension = nombreArr[nombreArr.length - 1];
      const idUnico = uniqid();
      this.newName.push({image: `${idUnico}.${extension}`})
    });
    return this.newName
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