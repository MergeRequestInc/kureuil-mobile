import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Link} from "../../model/link";
import {NgForm} from "@angular/forms";

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
    linkId: number;
    linkUrl: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.linkSelected = this.navParams.get('link');
    if (this.linkSelected){
        this.linkId = this.linkSelected.id;
        this.linkUrl = this.linkSelected.url;
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditLinkPage');
  }

    OnEditLink(form: NgForm){

    }
}
