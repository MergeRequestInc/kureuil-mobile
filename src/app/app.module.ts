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
import {EditChanelPage} from "../pages/edit-chanel/edit-chanel";
import {ChanelServices} from "../services/chanel.services";
import {LinkService} from "../services/link.service";
import {SearchPage} from "../pages/search/search";

@NgModule({
  declarations: [
    MyApp,
      ConnectionPage,
      HomePage,
      EditChanelPage,
      SearchPage
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
      HomePage,
      EditChanelPage,
      SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
      AuthenficationServices,
      PasswordServices,
      RegisterServices,
      ChanelServices,
      LinkService
  ]
})
export class AppModule {}
