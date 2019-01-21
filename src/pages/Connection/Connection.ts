import {Component, OnInit} from '@angular/core';
import {RegisterServices} from "../../services/register.services";
import {AuthenficationServices} from "../../services/authenfication.services";
import {PasswordServices} from "../../services/password.services";
import {AlertController, NavController} from "ionic-angular";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HomePage} from "../home/home";
import {EditCanalPage} from "../edit-canal/edit-canal";

@Component({
  selector: 'page-connection',
  templateUrl: 'Connection.html'
})
export class ConnectionPage implements OnInit{
    email: string;
    password: string;
    loginForm: FormGroup;

    constructor(private authenService: AuthenficationServices,
                private registerService: RegisterServices, private passwordService: PasswordServices,
                private alertCtl: AlertController, private navCtrl: NavController) {
    }

    ngOnInit() {
        this.initializeForm();
    }

    login() {
        this.authenService.login(this.loginForm.value.email, this.loginForm.value.userPassword).subscribe((text)=>{
            //console.log("OK");
            this.navCtrl.push(HomePage);
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
                    placeholder: 'Your email',
                    type: 'text'
                },
                {
                    name: 'Password',
                    placeholder: 'Your password',
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


    private initializeForm() {
        this.loginForm = new FormGroup({
            'email': new FormControl(null,Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])),
            'userPassword': new FormControl(null,Validators.required)
        });
    }
}
