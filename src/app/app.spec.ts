import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import {AuthenficationServices} from "../services/authenfication.services";
import {PasswordServices} from "../services/password.services";
import {RegisterServices} from "../services/register.services";
import {HttpClientModule} from "@angular/common/http";

describe('MyApp', () => {

    let fixture: ComponentFixture<MyApp>;
    let instance: MyApp;

    const platformStub = {
        ready: (): Promise<string> => new Promise<string>((resolve, reject) => resolve('ready'))
    };
    const statusBarStub = {
        styleDefault: (): void => undefined
    };
    const splashScreenStub = {
        hide: (): void => undefined
    };

    const authenficationServices = {
        hide: (): void => undefined
    };

    const passwordServices = {
        hide: (): void => undefined
    };

    const registerServices = {
        hide: (): void => undefined
    };

    const httpModule = {
        hide: (): void => undefined
    };



    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [
                NO_ERRORS_SCHEMA
            ],
            declarations: [
                MyApp
            ],
            providers: [
                {provide: Platform, useValue: platformStub},
                {provide: StatusBar, useValue: statusBarStub},
                {provide: SplashScreen, useValue: splashScreenStub},
                {provide: AuthenficationServices, useValue: authenficationServices},
                {provide: PasswordServices, useValue: passwordServices},
                {provide: RegisterServices, useValue: registerServices},
                {provide: HttpClientModule, useValue: httpModule}

            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MyApp);
        instance = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the root page', () => {
        expect(instance).toBeTruthy();
    });

});
