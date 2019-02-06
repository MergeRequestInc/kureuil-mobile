import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Link} from "../../model/link";
import {NgForm} from "@angular/forms";
import {LinkService} from "../../services/link.service";

/**
 * Generated class for the EditLinkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-link',
  templateUrl: 'edit-link.html',
})
export class EditLinkPage implements OnInit{

  linkSelected: Link;
    linkUrl: string;
    mode: string = 'New';

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public linkService: LinkService) {
  }

  ngOnInit() {
    this.linkSelected = this.navParams.get('link');
    if (this.linkSelected){
        this.linkUrl = this.linkSelected.url;
    }
  }
    ionViewWillEnter(){
      if(this.navParams.get('mode')){
          this.mode = this.navParams.get('mode');
      }
    }

    back() {
        this.navCtrl.pop();
    }

    OnEditLink(form: NgForm){

    }

    deleteLink() {
      this.linkService.delete(this.linkSelected.id).subscribe(() => this.navCtrl.pop()  );
    }
}
