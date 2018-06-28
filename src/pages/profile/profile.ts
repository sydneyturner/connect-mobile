import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ModalController, MenuController } from 'ionic-angular';
import { Http } from '@angular/http';
import { LoginPage } from '../login/login';
import { User } from '../../models/user';
import { HomePage } from '../home/home';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { PaymentPage } from '../payment/payment';
import {MenuPage } from '../menu/menu';
import { AddPaymentPage } from '../add-payment/add-payment';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  private token: string;
  public user: User;


  constructor(public navCtrl: NavController, public navParams: NavParams,  private http: Http, 
    private app: App, public modalCtrl: ModalController, public menu: MenuController) {
    this.user = new User();
    this.menu.enable(true);
  }

  ionViewDidLoad() {
    
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

  navigateToEditProfileModal(){
    let modal = this.modalCtrl.create(EditProfilePage, { token: this.token });
    modal.present();
    // this.navCtrl.push(EditProfilePage, {
    //   token: this.token,}
    // );
  }

  logout() {
    // this.app.getRootNav().setRoot(HomePage);
    // this.navCtrl.popToRoot();
    localStorage.clear();
    this.navCtrl.push(HomePage);
  }

  // openMenu() {
  //   this.menu.enable(true);
  //   this.menu.toggle();
  //   // make sure to disable menu before pushing to new page
  // }

  navigateToAddPayment(){
    // this.menu.enable(false);
    this.navCtrl.push(AddPaymentPage);
  }


}
