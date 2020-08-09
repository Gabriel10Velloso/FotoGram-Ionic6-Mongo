import { Component, ViewChild, ElementRef } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

declare var window: any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  tempImages: string[] = [];
  cargandoGeo = false;

  url: any = '';



  @ViewChild('fileInput', { static: true }) fileInput: ElementRef;
  myFiles: any = [];
  post = {
    mensaje: '',
    coords: null,
    posicion: false
  };

  constructor(private postsService: PostsService,
    private route: Router,
    private geolocation: Geolocation,
    private camera: Camera
  ) { }

  async crearPost() {
    console.log('wwwww', this.post);
    const creado = await this.postsService.crearPost(this.post);
    this.post = {
      mensaje: '',
      coords: null,
      posicion: false
    };
    this.tempImages = [];
    this.route.navigateByUrl('/main/tabs/tab1');
  }

  getGeo() {
    if (!this.post.posicion) {
      this.post.coords = null;
      return;
    }
    this.cargandoGeo = true;
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.cargandoGeo = false;
      const coords = `${resp.coords.latitude},${resp.coords.longitude}`;
      console.log(coords);
      this.post.coords = coords;
    }).catch((error) => {
      console.log('Error getting location', error);
      this.cargandoGeo = false;
    });
  }

  // Upload APK
  camara() {
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    };
    this.procesarImagen(options);
  }

  // Upload APK
  libreria() {
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    this.procesarImagen(options);
  }

  // Upload APK
  procesarImagen(options: any) {
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      const img = window.Ionic.WebView.convertFileSrc(imageData);
      this.postsService.subirImagen(imageData);
      this.tempImages.push(img);
    }, (err) => {
      // Handle error
    });
  }

  // Upload browser
  private readFile(file: any) {
    console.log('ssss', file);
    const formData = new FormData();
    const reader = new FileReader();
    reader.onloadend = () => {
      const imgBlob = new Blob([reader.result], { type: file.type });
      formData.append('file', imgBlob, file.name);
    };
    reader.readAsArrayBuffer(file);
  }

  // Upload browser
  onUploadChange(ev) {
    // console.log(ev);
    this.myFiles = ev.target.files;
    //let url = URL.createObjectURL(myFile);
    console.log(this.myFiles);
    for (let i = 0; i < this.myFiles.length; i++) {
      this.readFile(this.myFiles[i]);
      // console.log('eu', this.myFiles[i]['name'], this.myFiles[i]['size']);
      this.tempImages.push(this.myFiles[i]['name']);
    }
    console.log(this.myFiles);
  }


  // Renderiza img 
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        console.log(this.url);
      }
    }
  }

  public delete() {
    this.url = null;
  }
  
}
