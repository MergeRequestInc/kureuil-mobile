import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {ConnectionPage} from "../pages/Connection/Connection";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthenficationServices} from "../services/authenfication.services";
import {PasswordServices} from "../services/password.services";
import {RegisterServices} from "../services/register.services";
import {HomePage} from "../pages/home/home";
import {ReactiveFormsModule} from "@angular/forms";
import {EditChanelPage} from "../pages/edit-chanel/edit-chanel";
import {ChanelServices} from "../services/chanel.services";
import {LinkService} from "../services/link.service";
import {SearchPage} from "../pages/search/search";
import {EditLinkPage} from "../pages/edit-link/edit-link";
import {AuthInterceptor} from "../services-common/interceptor/auth.interceptor";
import {AuthExpiredInterceptor} from "../services-common/interceptor/auth-expired.interceptor";
import {IonicStorageModule} from "@ionic/storage";

@NgModule({
  declarations: [
    MyApp,
      ConnectionPage,
      HomePage,
      EditChanelPage,
      SearchPage,
      EditLinkPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      IonicStorageModule.forRoot(),
      HttpClientModule,
      ReactiveFormsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConnectionPage,
      HomePage,
      EditChanelPage,
      SearchPage,
      EditLinkPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
      AuthenficationServices,
      PasswordServices,
      RegisterServices,
      ChanelServices,
      LinkService,
      {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
      },
      {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthExpiredInterceptor,
          multi: true
      }
  ]
})
export class AppModule {}
