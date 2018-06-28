import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
// import { ProfilePage } from '../profile/profile';
// import { TabsPage } from '../tabs/tabs';
import { Http } from '@angular/http';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {
  public email: string;
  public password: string;
  public passwordCheck: string;
  public firstname: string;
  public lastname: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public alertCtrl: AlertController) {

  }

  passwordsDontMatch(){
    const alert = this.alertCtrl.create({
      title: 'Passwords do not match',
      subTitle: 'Please enter again',
      buttons: ['OK']
    });
    alert.present();
  }

  register() {
    if (this.password == this.passwordCheck) {
      this.http.post("http://localhost:3000/registration", {
        email: this.email,
        firstname: this.firstname,
        lastname: this.lastname,
        password: this.password
      })
        .subscribe(
          result => {
            console.log(result);

            this.navCtrl.push(LoginPage, {
              email: this.email,
              firstname: this.firstname,
              lastname: this.lastname,
              password: this.password
            });
            // this.navCtrl.push(ProfilePage);
          },

          error => {
            console.log(error);
          }
        );
        console.log('Passwords do not match');
        // add alert 
        
    }
    else {
      this.passwordsDontMatch();
    }
   



  }

  // in the future: if user is already registered, send alert.

  cancel() {
    // this.app.getRootNav().setRoot(HomePage);
    this.navCtrl.popToRoot();
  }


}
