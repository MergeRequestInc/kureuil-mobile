import { Component } from '@angular/core';
import {RegisterServices} from "../../services/register.services";
import {AuthenficationServices} from "../../services/authenfication.services";
import {PasswordServices} from "../../services/password.services";
import {AlertController} from "ionic-angular";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'page-connection',
  templateUrl: 'Connection.html'
})
export class ConnectionPage {
    email: string;
    password: string;

    constructor(private authenService: AuthenficationServices,
                private registerService: RegisterServices, private passwordService: PasswordServices,
                private alertCtl: AlertController) {
    }

    login(form: NgForm) {
        this.authenService.login(form.value.email, form.value.userPassword).subscribe((text)=>{
            console.log("OK");
        }, (error) => {
            console.log(error);
        });
        this.email = "";
        this.password = "";
    }

    registerUser() {
        const alert = this.alertCtl.create({
            title: 'Registration',
            inputs: [
                {
                    name: 'Name',
                    placeholder: 'Your name',
                    type: 'text'
                },
                {
                    name: 'Email',
                    placeholder: 'Your Email',
                    type: 'text'
                },
                {
                    name: 'Password',
                    placeholder: 'Your Password',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Register',
                    handler: (data) =>{
                        if(data.Name != null && data.Email != null && data.Password != null) {
                            console.log("register");
                            this.registerService.register(data.Name, data.Email, data.Password).subscribe(() =>{
                                console.log("Success");
                            }, () =>{
                                console.log("error");
                            });
                        }
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });

        alert.present();
    }

    forgotPassword() {
        const alert = this.alertCtl.create({
            title: 'Forgotten password',
            inputs: [
                {
                    name: 'email',
                    placeholder: 'abc@yahoo.fr',
                    type: 'text',
                    label: 'Email'
                }
            ],
            buttons: [
                {
                    text: 'Reclaim',
                    handler: (data) =>{
                        if(data.email != null) {
                            this.passwordService.forgotPassword(data.email);
                        }
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        alert.present();
    }
}
