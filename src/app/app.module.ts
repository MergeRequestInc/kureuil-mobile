import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {ConnectionPage} from "../pages/Connection/Connection";
import {HttpClientModule} from "@angular/common/http";
import {AuthenficationServices} from "../services/authenfication.services";
import {PasswordServices} from "../services/password.services";
import {RegisterServices} from "../services/register.services";
import {HomePage} from "../pages/home/home";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    MyApp,
      ConnectionPage,
      HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
      ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConnectionPage,
      HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
      AuthenficationServices,
      PasswordServices,
      RegisterServices
  ]
})
export class AppModule {}
