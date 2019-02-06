import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {ChanelServices} from "../../services/chanel.services";
import {NgForm} from "@angular/forms";
import {Chanel} from "../../model/chanel";
import {LinkService} from "../../services/link.service";
import {Link} from "../../model/link";
import {Tag} from "../../model/tag";
import {EditLinkPage} from "../edit-link/edit-link";

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
    chanelId: number;
    chanelName: string;
    query: string;
    chanelDelete: Chanel = null;
    index: number;
    links;
    linksURL: string[];
  constructor(private navCtrl: NavController,private navParams: NavParams, public linkService: LinkService,
              private chanelService: ChanelServices, public toastCtrl: ToastController){

  }

  ionViewWillEnter() {
    this.mode = this.navParams.get('mode');
    console.log(this.mode);
    if (this.mode == 'Edit') {
        this.chanelDelete = this.navParams.get('chanel');
        this.chanelName = this.chanelDelete.name;
        this.query = this.chanelDelete.query;
        this.index = this.navParams.get('index');
        this.linkService.getLinks(this.query).subscribe( (links) => {this.links = links}, () => {
            this.linkService.getLinks("").subscribe(links => this.links = links);
        });
    }
  }

    onAddChanel(form: NgForm) {
      const data = new Chanel(form.value.name, form.value.query);
      console.log(data);
      if(this.mode == 'New'){
          this.chanelService.create(data);
          this.chanelService.create(data).subscribe((chanel) => {

              console.log(chanel);
          }, (err)=> {
              console.log(err);
          });
      } else {

          this.chanelService.update(data).subscribe((channel) => {
              // const toast = this.toastCtrl.create({
              //    position: 'top',
              //    message: 'Edit channel successfully',
              //     duration: 2000
              //
              // });
              // toast.present();
              console.log(channel);
          }, (err) => {
              // const toast = this.toastCtrl.create({
              //     position: 'top',
              //     message: 'Edit channel failed with' + err,
              //     duration: 2000
              //
              // });
              // toast.present();
              console.log(err);
          });

      }
        this.navCtrl.pop();
    }

    deleteChanel() {
      console.log('Delete ' + this.index);
      if(this.chanelDelete != null) {

          this.chanelService.delete(this.index).subscribe(() => {
          }, (err)=> {
              console.log(err);
          }) ;
      }
    }

    back() {
      this.navCtrl.pop();
    }

    onLoadLink(link:Link) {
       this.navCtrl.push(EditLinkPage, {'link': link, 'mode': 'Edit'});
    }
}
