import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PaymentPage } from '../pages/payment/payment';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  pages: Array<{title: string, component: any}>;

  @ViewChild(Nav) nav: Nav

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
  private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Profile', component: HomePage },
      { title: 'Payment', component: PaymentPage }
    ];
  }

 

  // openPage(page: any){
  //   this.navCtrl.setRoot(page);
  //   this.menuCtrl.close();
  // }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

