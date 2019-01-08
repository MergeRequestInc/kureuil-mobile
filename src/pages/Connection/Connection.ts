import { Component } from '@angular/core';
import {RegisterServices} from "../../services/register.services";
import {AuthenficationServices} from "../../services/authenfication.services";
import {PasswordServices} from "../../services/password.services";
import {AlertController} from "ionic-angular";

@Component({
  selector: 'page-connection',
  templateUrl: 'Connection.html'
})
export class ConnectionPage {
    email: string;
    password: string;

    constructor(private authenficationService: AuthenficationServices,
                private registerService: RegisterServices, private passwordService: PasswordServices,
                private alertCtl: AlertController) {
    }

    login(email: String, password: String) {
        this.authenficationService.login(email, password);
        this.email = "";
        this.password = "";
    }

    registerUser(email: String, password: String) {
        const alert = this.alertCtl.create({
            title: 'Register',
            message: 'Enter email and password',
            inputs: [
                {
                    name: 'Email',
                    placeholder: 'Enter email',
                    type: 'text'
                },
                {
                    name: 'Password',
                    placeholder: 'Enter Password',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Register',
                    handler: (data) =>{
                        if(data.Email != null && data.Password != null) {
                            this.registerService.register(email, password);
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

    motPasseOublie(email: String) {
        const alert = this.alertCtl.create({
            title: 'Forget password',
            message: 'Enter email to recover your password',
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
                    text: 'Reset',
                    handler: (data) =>{
                        if(data.email != null) {
                            this.passwordService.forgotPassword(email);
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
