import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { Http } from '@angular/http';
import { ProfilePage } from '../profile/profile';
// import { getBaseUrl } from '../../getBaseUrl';
/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  // user_info: Array<User> = [];
  public user: User = new User();
  public firstname: string;
  public lastname: string;
  public email: string;
  public password: string;
  private token: string;

  public newUsername: string;
  public newPassword: string;
  public newEmail: string;
  public newFirstname: string;
  public newLastname: string;
  public newConfirmPassword: string;

  jwt: string = localStorage.getItem("TOKEN");

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private http: Http, public viewCtrl: ViewController, public alertCtrl: AlertController) {
    this.user = new User();
  }

  ionViewDidLoad() {
    this.token = localStorage.getItem("TOKEN");
    console.log("editProfile token", this.token)

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

  ionViewWillEnter(){
    localStorage.getItem("TOKEN");
  }


  alertLogoutforChanges(){
    const alert = this.alertCtrl.create({
      title: 'Changes saved!',
      subTitle: 'Please logout and log back in to see changes',
      buttons: ['OK']
    });
    alert.present();
  }

  passwordsDontMatch(){
    const alert = this.alertCtrl.create({
      title: 'Passwords do not match',
      subTitle: 'Please enter again',
      buttons: ['OK']
    });
    alert.present();
  }


  cancel() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

  changeProfileInfo() {
    if(this.newPassword == this.newConfirmPassword){
      this.http.patch("http://localhost:3000/editUser?jwt=" + localStorage.getItem("TOKEN"), {
        firstname: this.newFirstname,
        lastname: this.newLastname,
        email: this.newEmail,
        password: this.newPassword
      })
        .subscribe(
          result => {
            console.log(result);
  
            var Usertoken = result.json();
            localStorage.setItem("TOKEN", Usertoken.token);
            // console.log(Usertoken.token);
            this.viewCtrl.dismiss();
            this.alertLogoutforChanges();
            
           

          },
          error => {
            console.log(error);
          }
        );
    }
    else {
      this.passwordsDontMatch();
    }
   
  }
}
