import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { PaymentPage } from '../payment/payment';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  private rootPage;
  private profilePage;
  private paymentPage;

  // @ViewChild(Nav) nav: Nav;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootPage = ProfilePage;
    this.profilePage = ProfilePage;
    this.paymentPage = PaymentPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  // openPage(p) {
  //   this.rootPage = p;
  //   console.log(p);
  // }

  // navigateToProfile() {
  //   this.navCtrl.push(ProfilePage);
  // }

}
