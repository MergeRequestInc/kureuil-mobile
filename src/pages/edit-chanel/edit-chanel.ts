import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChanelServices} from "../../services/chanel.services";
import {NgForm} from "@angular/forms";
import {Chanel} from "../../model/chanel";

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

  constructor(private navCtrl: NavController,private navParams: NavParams,
              private chanelService: ChanelServices){

  }

  ngOnInit() {
    this.mode = this.navParams.get('mode');
  }

    onAddChanel(form: NgForm) {
      const data = new Chanel(form.value.chanelName, form.value.query);
      this.chanelService.addChanel(data).subscribe(() => {
          console.log('Sucess');

      }, (err)=> {
          console.log(err);
      });
    }
}
