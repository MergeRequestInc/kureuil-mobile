import {Component, OnInit} from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {EditChanelPage} from "../edit-chanel/edit-chanel";
import {Chanel} from "../../model/chanel";

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
export class HomePage implements OnInit{

    chanels: Chanel[];

    constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) {
    }

    logOut() {
      this.navCtrl.popToRoot();
    }

    ngOnInit() {
        this.chanels = [{
            chanelName: 'Chanel 1',
            query: 'Select'
        },
            {
                chanelName: 'Chanel 2',
                query: 'Delete'
            }
        ];
    }

    onCreateCanal() {
        this.navCtrl.push(EditChanelPage, {mode: 'New'});
    }

    openMenu() {
        console.log(this.chanels.length);
        this.menuCtrl.open();
    }


    onLoadChanel(chanel: Chanel){
        console.log(chanel.chanelName);
    }
}
