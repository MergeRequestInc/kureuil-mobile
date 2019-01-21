import {Component, OnInit} from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {EditChanelPage} from "../edit-chanel/edit-chanel";
import {Chanel} from "../../model/chanel";
import {ChanelServices} from "../../services/chanel.services";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

    chanels: Chanel[];

    constructor(public navCtrl: NavController, public chanelServices: ChanelServices, public navParams: NavParams, private menuCtrl: MenuController) {
    }

    logOut() {
      this.navCtrl.popToRoot();
    }

    ionViewWillEnter() {
        this.menuCtrl.close();
        this.chanels = this.chanelServices.getChanel();
    }

    onCreateCanal() {
        this.navCtrl.push(EditChanelPage, {mode: 'New'});
    }

    openMenu() {
        console.log(this.chanels.length);
        this.menuCtrl.open();
    }


    onLoadChanel(chanel: Chanel, index: number){
        this.menuCtrl.close();
        this.navCtrl.push(EditChanelPage, {chanel: chanel,index: index, mode: 'Edit'});
    }
}
