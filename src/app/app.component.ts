import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Http } from '@angular/http';
import { HomePage } from '../pages/home/home';
import { PaymentPage } from '../pages/payment/payment';
import { HistoryPage } from '../pages/history/history';
import { MapPage } from '../pages/map/map';
import { ProfilePage } from '../pages/profile/profile';
import { User } from '../models/user';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  private token: string;
  public user: User;

  pages: Array<{ title: string, component: any }>;

  @ViewChild(Nav) nav: Nav

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private http: Http) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();


    });

    this.pages = [
      { title: 'Map', component: MapPage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Payment', component: PaymentPage },
      { title: 'History', component: HistoryPage }
    ];

    this.user = new User();
    this.userInfo();
  }

  userInfo() {

    this.token = localStorage.getItem("TOKEN");
    console.log("profile token", this.token)

    this.http.get("http://localhost:3000/me?jwt=" + this.token)
      .subscribe(
        result => {
          console.log(result);
          this.user = result.json().user;
          console.log(this.user);

        },
        error => {
          console.log(error);
        }
      );

  }

  logout() {
    // this.app.getRootNav().setRoot(HomePage);
    // this.navCtrl.popToRoot();
    localStorage.clear();
    this.nav.push(HomePage);

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

