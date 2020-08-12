import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaPosts, Post } from '../interfaces/interfaces';
import { UsuarioService } from './usuario.service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  URL = environment.url;

  paginaPosts = 0;

  nuevoPost = new EventEmitter<Post>();


  constructor(private http: HttpClient,
    private usuarioService: UsuarioService,
    private fileTransfer: FileTransfer
  ) { }

  getPosts(pull: boolean = false) {
    if (pull) {
      this.paginaPosts = 0;
    }
    this.paginaPosts++;
    return this.http.get<RespuestaPosts>(`${this.URL}/posts/?pagina=${this.paginaPosts}`);
  }

  crearPost(post) {
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });
    return new Promise(resolve => {
      this.http.post(`${this.URL}/posts`, post, { headers })
        .subscribe(resp => {
          this.nuevoPost.emit(resp['post']);
          resolve(true);
        });
    });
  }


  subirImagen(img: string) {
    console.log('sssssssssss', img);
    const options: FileUploadOptions = {
      fileKey: 'image',
      headers: {
        'x-token': this.usuarioService.token
      }
    };
    const fileTransfer: FileTransferObject = this.fileTransfer.create();
    fileTransfer.upload(img, `${this.URL}/posts/upload`, options)
      .then(data => {
        console.log(data);
      }).catch(err => {
        console.log('error en carga', err);
      });
  }


  subirImagen2(images: any) {
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });
    const arr = [];
    const formData = new FormData();
    arr.push(images);

    arr[0].forEach((item, i) => {
      formData.append('image', arr[0][i]);
    })
    return this.http.post(`${this.URL}/posts2/upload2`, formData, { headers });
  }
}
