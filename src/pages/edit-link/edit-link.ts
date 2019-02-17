import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Link} from "../../model/link";
import {NgForm} from "@angular/forms";
import {LinkService} from "../../services/link.service";
import {Tag} from "../../model/tag";

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

    /**
     * Selected link
     */
    linkSelected: Link;
    /**
     * link's url
     */
    linkUrl: string;
    /**
     * mode new or edit link
     */
    mode: string = 'New';
    /**
     * link's tags
     */
    tags = Array();
    /**
     * tag strings
     */
    tag1: string;
    tag2: string;
    tag3: string;
    tag4: string;
    tag5: string;
    /**
     * tag edits
     */
    tagsEdit = Array();

    /**
     * Constructor
     * @param navCtrl
     * @param navParams
     * @param linkService
     * @param toastCtrl
     */
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public linkService: LinkService, public toastCtrl: ToastController) {
  }

    /**
     * NgOn Init
     */
  ngOnInit() {
    this.linkSelected = this.navParams.get('link');
    if (this.linkSelected){
        this.linkUrl = this.linkSelected.url;
        for(let tag of this.linkSelected.tags){
            this.tags.push(tag.name);
        }

        this.tag1 = this.tags[0];
        this.tag2 = this.tags[1];
        this.tag3 = this.tags[2];
        this.tag4 = this.tags[3];
        this.tag5 = this.tags[4];

    }
  }

    /**
     * Before entering ionic view
     */
    ionViewWillEnter(){
      if(this.navParams.get('mode')){
          this.mode = this.navParams.get('mode');
      }
    }

    /**
     * back to previous page
     **/
    back() {
        this.navCtrl.pop();
    }

    /**
     * Edit links from ng form
     * @param form
     * @constructor
     */
    OnEditLink(form: NgForm){
      console.log(this.tag5);
        if(this.tag1 != undefined || this.tag1 != "") {
            const tag1 = new Tag(Math.floor((Math.random() * 1000) + 100), form.value.tag1);
            this.tagsEdit.push(tag1);
        }
        if(this.tag2 != undefined || this.tag2 != "") {
            const tag2 = new Tag(Math.floor((Math.random() * 1000) + 100), form.value.tag2);
            this.tagsEdit.push(tag2);
        }
        if(this.tag3 != undefined || this.tag3 != "") {
            const tag3 = new Tag(Math.floor((Math.random() * 1000) + 100), form.value.tag3);
            this.tagsEdit.push(tag3);
        }
        if(this.tag4 != undefined || this.tag4 != "") {
            const tag4 = new Tag(Math.floor((Math.random() * 1000) + 100), form.value.tag4);
            this.tagsEdit.push(tag4);
        }
        if(this.tag5 != undefined || this.tag5 != "") {
            const tag5 = new Tag(Math.floor((Math.random() * 1000) + 100), form.value.tag5);
            this.tagsEdit.push(tag5);
        }
        const dataAdd = new Link(this.linkSelected.id, form.value.linkUrl, this.tagsEdit);
        console.log(dataAdd);

        this.linkService.update(dataAdd).subscribe(()=>{
            const toast = this.toastCtrl.create({
                message:'Update link successfully',
                position: 'top',
                duration: 20
            });
            toast.present();
            this.navCtrl.pop();
        },() =>{
            const toast = this.toastCtrl.create({
                message:'Update link failed',
                position: 'top',
                duration: 20
            });
            toast.present();
        } )
    }

    /**
     * Delete a specify link
     */
    deleteLink() {
      this.linkService.delete(this.linkSelected.id).subscribe(() => this.navCtrl.pop());
    }
}
