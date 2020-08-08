import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class UiServiceService {


  constructor(private alertController: AlertController,
              private toastController: ToastController) { }

  async alertaInformativa(message: string) {
    const alert = await this.alertController.create({
      header:  'Teste',
      subHeader: '',
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      position: 'top',
      duration: 5000
    });
    toast.present();
  }

  async presentToastDanger(message: string) {
    const toast = await this.toastController.create({
      message,
      color: 'danger',
      position: 'bottom',
      duration: 5000
    });
    toast.present();
  }

}



// https://forum.ionicframework.com/t/changing-the-toast-background-colour-in-ionic-4/142630
