import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'yes', //Or  'yes'
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hideurlbar:'yes',//Or 'no'

};

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private iab: InAppBrowser
  ) {
    this.initializeApp();
    this.openWithInAppBrowser('https://stackoverflow.com/questions/25408257/ion-content-overlap-with-ion-header-bar');
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // this.splashScreen.hide();
      // let status bar overlay webview
      this.statusBar.overlaysWebView(false);
      // set status bar to white
      this.statusBar.backgroundColorByHexString('#000000');
      // if(this.statusBar.isVisible) {
        // this.statusBar.hide();
        console.log(this.statusBar)

      // }
      
    });
  }
// Consigo redirecionar para outro site sem mostrar a url
  public openWithInAppBrowser(url : string){
    // let target = "_blank";
    // this.iab.create(url,'_blank',{ location: 'no', zoom: 'yes'} );
}
}
