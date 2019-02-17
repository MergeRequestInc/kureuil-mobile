import {Component, OnInit} from '@angular/core';
import {RegisterServices} from "../../services/register.services";
import {AuthenficationServices} from "../../services/authenfication.services";
import {PasswordServices} from "../../services/password.services";
import {AlertController, NavController, ToastController} from "ionic-angular";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HomePage} from "../home/home";
import {Storage} from "@ionic/storage";

@Component({
  selector: 'page-connection',
  templateUrl: 'Connection.html'
})
export class ConnectionPage implements OnInit{
    /**
     * user's email
     */
    email: string;
    /**
     * user's password
     */
    password: string;
    /**
     * login form
     */
    loginForm: FormGroup;

    constructor(private authenService: AuthenficationServices, private sessionStorage: Storage, private toastCtrl: ToastController,
                private registerService: RegisterServices, private passwordService: PasswordServices,
                private alertCtl: AlertController, private navCtrl: NavController, private localStorage: Storage) {
    }

    /**
     * ng Oninit
     */
    ngOnInit() {
        this.initializeForm();
        this.authenService.logout();

    }

    /**
     * Login with authenfication service
     */
    login() {
        this.authenService.login(this.loginForm.value.email, this.loginForm.value.userPassword).subscribe((response)=>{
            this.localStorage.set('isLoggedIn', 'true');
            this.localStorage.set('Authorization', response.body['access-token']);
            this.sessionStorage.set('Authorization', response.body['access-token']);
            this.navCtrl.push(HomePage);
        }, (error) => {
            if (error.status === 404 || error.status === 500) {
                const toast = this.toastCtrl.create({
                    duration: 30,
                    position: 'top',
                    message: 'An error occured. Please contact an administrator.'
                });
                toast.present();
            } else {
                const toast = this.toastCtrl.create({
                    duration: 30,
                    position: 'top',
                    message: 'Login impossible. Please verify your login and password.'
                });
                toast.present();
            }
        });
        this.email = "";
        this.password = "";
    }

    /**
     * Register a new user
     */
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
                            }, () =>{
                                const toast = this.toastCtrl.create({
                                    duration: 5,
                                    position: 'top',
                                    message: 'Registration impossible. Please contact an administrator'
                                });
                                toast.present();
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

    /**
     * Forget password
     */
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

    /**
     * Initalization form
     */
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
