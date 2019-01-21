import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditChanelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-chanel',
  templateUrl: 'edit-chanel.html',
})
export class EditChanelPage implements OnInit{
    mode: string;
    chanelName: string;
    query: string;

  constructor(private navCtrl: NavController,private navParams: NavParams){

  }

  ngOnInit() {
    this.mode = this.navParams.get('mode');
  }

    onAddChanel() {
        this.navCtrl.pop();
    }
}
