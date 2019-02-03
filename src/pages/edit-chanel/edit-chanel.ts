import {Component} from '@angular/core';
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
export class EditChanelPage{
    mode: string;
    chanelName: string;
    query: string;
    chanelDelete: Chanel = null;
    index: number;

  constructor(private navCtrl: NavController,private navParams: NavParams,
              private chanelService: ChanelServices){

  }

  ionViewWillEnter() {
    this.mode = this.navParams.get('mode');
    if (this.mode == 'Edit') {
        this.chanelDelete = this.navParams.get('chanel');
        this.chanelName = this.chanelDelete.chanelName;
        this.query = this.chanelDelete.query;
        this.index = this.navParams.get('index');
    }
  }

    onAddChanel(form: NgForm) {
      const data = new Chanel(form.value.chanelName, form.value.query);
      console.log(data);
      if(this.mode == 'New'){
          this.chanelService.addChanel(data);
          // this.chanelService.addChanel(data).subscribe(() => {
          //     console.log('successfully created chanel');
          //
          // }, (err)=> {
          //     console.log(err);
          // });
      } else {
          this.chanelService.editChanel(data,this.index);
          // this.chanelService.editChanel(data).subscribe(() => {
          //     console.log('successfully updated chanel');
          //
          // }, (err)=> {
          //     console.log(err);
          // });
      }
        this.navCtrl.pop();
    }

    deleteChanel() {
      if(this.chanelDelete != null) {
          // this.chanelService.deleteChanel(this.navParams.get('chanel')).subscribe(() => {
          //     console.log('Delete ok');
          // }, (error) => {
          //     console.log(error);
          // });
          this.chanelService.deleteChanel(this.chanelDelete,this.index);
      }
    }

    back() {
      this.navCtrl.pop();
    }
}
