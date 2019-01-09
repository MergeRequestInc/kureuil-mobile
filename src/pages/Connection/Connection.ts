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
        this.authenService.login(form.value.userEmail, form.value.userPassword);
        console.log(form.value);
        this.email = "";
        this.password = "";
    }

    registerUser() {
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
                            this.registerService.register(data.Email, data.Password);
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

    motPasseOublie() {
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
