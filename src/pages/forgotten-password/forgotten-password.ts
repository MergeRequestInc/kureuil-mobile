import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {PasswordServices} from "../../services/password.services";
import {NgForm} from "@angular/forms";

/**
 * Generated class for the ForgottenPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgotten-password',
  templateUrl: 'forgotten-password.html',
})
export class ForgottenPasswordPage {
    resetEmail: string;

  constructor(public navCtrl: NavController, private passwordService: PasswordServices,
              private toastCtl: ToastController ) {
  }

    cancelReset(){
      this.navCtrl.pop();
    }

    resetPassword(form: NgForm) {
        if(form.value.email != null) {
            this.passwordService.forgotPassword(form.value.email).subscribe(() => {
                const succes = this.toastCtl.create({
                   message: 'Password is reset',
                   duration: 3000,
                   position: 'top'
                });
        } , (error) => {
                const succes = this.toastCtl.create({
                    message: error,
                    duration: 3000,
                    position: 'top'
                });
            });
        }
    }
}
