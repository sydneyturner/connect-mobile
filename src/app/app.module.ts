import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistrationPage } from '../pages/registration/registration';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { HttpModule } from '@angular/http';
import { AuthService } from '../auth.service';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { MenuPage } from '../pages/menu/menu';
import { PaymentPage } from '../pages/payment/payment';
import { AddPaymentPage } from '../pages/add-payment/add-payment';
import { HistoryPage } from '../pages/history/history';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistrationPage,
    LoginPage,
    ProfilePage,
    EditProfilePage,
    MenuPage,
    PaymentPage,
    AddPaymentPage,
    HistoryPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistrationPage,
    LoginPage,
    ProfilePage,
    EditProfilePage,
    MenuPage,
    PaymentPage,
    AddPaymentPage,
    HistoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
