// /*
// import { TestBed, ComponentFixture} from '@angular/core/testing';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
//
// import { ConnectionPage} from "./Connection";
// import {By} from "@angular/platform-browser";
//
// let fixture : ComponentFixture<ConnectionPage>;
// let instance : ConnectionPage;
//
// describe('Page: ConnectionPage', () => {
//     beforeEach(() => {
//         fixture = TestBed.createComponent(ConnectionPage);
//         instance = fixture.debugElement.componentInstance;
//         fixture.detectChanges();
//
//         TestBed.configureTestingModule({
//             schemas: [
//                 NO_ERRORS_SCHEMA
//             ],
//             declarations: [
//                 ConnectionPage
//             ]
//         }).compileComponents();
//
//
//     });
//
//     it('should exist', () => {
//         fixture.whenStable().then(() => {
//             fixture.detectChanges();
//             expect(instance).toBeDefined();
//         });
//     });
//
//     it('should create the Connection page', () => {
//         expect(instance).toBeTruthy();
//     });
//
//     it('should show a title', () => {
//         const h2: HTMLHeadingElement = fixture.debugElement.query(By.css('ion-title')).nativeElement;
//         expect(h2.textContent).toContain('KUREUIL');
//     });
//
//     it('Should show a connection card title', () => {
//         const h2 : HTMLHeadingElement = fixture.debugElement.query(By.css('h2')).nativeElement;
//         expect(h2.textContent).toContain('Connection');
//     });
//
//     it('should show 2 label Email et Password', () => {
//         const number = fixture.debugElement.queryAll(By.css('ion-label')).length
//         expect(number).toEqual(2);
//     });
//
//     it('should show 2 input Email et Password', () => {
//         const number = fixture.debugElement.queryAll(By.css('ion-input')).length
//         expect(number).toEqual(2);
//     });
//
//     it('should contain a login button', () => {
//         const button: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;
//         expect(button.textContent).toBe('Validate');
//     });
// });*/
//
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {ConnectionPage} from "./Connection";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {AuthenficationServices} from "../../services/authenfication.services";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {RegisterServices} from "../../services/register.services";
import {PasswordServices} from "../../services/password.services";
import {AlertController, App, Config, Platform} from "ionic-angular";
import {FormsModule, NgForm} from "@angular/forms";
import {By} from "@angular/platform-browser";

describe('ConnectionPage',() =>{
   let fixture: ComponentFixture<ConnectionPage>;
   let component: ConnectionPage;

   beforeEach(async(() =>{
       TestBed.configureTestingModule({
           declarations: [ConnectionPage],
           imports: [FormsModule, HttpClientModule],
           schemas: [CUSTOM_ELEMENTS_SCHEMA],
           providers: [AlertController, AuthenficationServices, RegisterServices, PasswordServices, App, Config, Platform]
       }).compileComponents();
   }));

   beforeEach(() =>{
       fixture = TestBed.createComponent(ConnectionPage);
       component = fixture.componentInstance;
       fixture.detectChanges();
   });


   it('should create', () =>{
        expect(component).toBeTruthy();
   });

        it('should create the Connection page', () => {
        expect(component).toBeTruthy();
    });

    it('should show a title', () => {
        const h2: HTMLHeadingElement = fixture.debugElement.query(By.css('ion-title')).nativeElement;
        expect(h2.textContent).toContain('Kureil');
    });

    it('Should show a connection card title', () => {
        const h2 : HTMLHeadingElement = fixture.debugElement.query(By.css('h2')).nativeElement;
        expect(h2.textContent).toContain('Connection');
    });

    it('should show 2 label Email et Password', () => {
        const number = fixture.debugElement.queryAll(By.css('ion-label')).length
        expect(number).toEqual(2);
    });

    it('should show 2 input Email et Password', () => {
        const number = fixture.debugElement.queryAll(By.css('ion-input')).length
        expect(number).toEqual(2);
    });

    it('should contain a login button', () => {
        const button: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;
        expect(button.textContent).toBe('Login');
    });
});