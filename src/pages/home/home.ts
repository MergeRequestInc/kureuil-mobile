import {Component, OnInit} from '@angular/core';
import {
    ActionSheetController,
    AlertController,
    IonicPage,
    MenuController,
    NavController,
    NavParams, ToastController
} from 'ionic-angular';
import {EditChanelPage} from "../edit-chanel/edit-chanel";
import {Chanel} from "../../model/chanel";
import {ChanelServices} from "../../services/chanel.services";
import {LinkService} from "../../services/link.service";
import {SearchPage} from "../search/search";
import {Link} from "../../model/link";
import {Tag} from "../../model/tag";

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

    channels: Chanel[];

    constructor(public navCtrl: NavController, public chanelServices: ChanelServices,
                public navParams: NavParams, private menuCtrl: MenuController,
                public actionSheetController: ActionSheetController,
                public alertController: AlertController, public linkService: LinkService,
                public chanelService: ChanelServices, public toastCtrl: ToastController) {
    }

    ngOnInit() {
        this.channels = [{chanelName: 'Test', query: 'query'}];
        this.chanelService.getChanel().subscribe((data) => {
            this.channels = data;
        }, () => {
            console.log("No Chanel Found");
        });
    }

    logOut() {
      this.navCtrl.popToRoot();
    }

    ionViewWillEnter() {
        this.menuCtrl.close();
        this.chanelService.getChanel().subscribe((data) => {
            this.channels = data;
        }, () => {
            console.log("No Chanel Found");
        })
    }

    onCreateCanal() {
        const actionSheet = this.actionSheetController.create({
            title: 'Choose action',
            buttons: [{
                text: 'Add new chanel',
                handler: () => {
                    this.navCtrl.push(EditChanelPage, {mode: 'New'});
                }
            },
                {
                    text: 'Add new link',
                    handler: () => {
                        const alerCtrl = this.alertController.create({
                            title: "Add new link",
                            inputs: [
                                {
                                  name: 'id',
                                  type: 'text',
                                  placeholder: 'Id'
                                },
                                {
                                    name: 'link',
                                    type: 'text',
                                    placeholder: 'Links'
                                }, {
                                    name: 'tag',
                                    type: 'text',
                                    placeholder: 'Create tags, separate by,'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Add',
                                    handler: (data) => {
                                        const tag = data.tag.split(",");
                                        const tags : Tag[] = [];
                                        tags.push(...tag);
                                        const dataAdd = new Link(data.id, data.link,tags);
                                        this.linkService.addLink(dataAdd).subscribe(() => {
                                            const toast = this.toastCtrl.create({
                                                position: 'top',
                                                message: 'Link data added succesfully'
                                            });
                                        }, (err) =>{
                                            const toast = this.toastCtrl.create({
                                                position: 'top',
                                                message: 'Link data failed with ' + err
                                            });
                                        });
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'Cancel'
                                }
                            ]
                        });
                        alerCtrl.present();
                    }
                }
            ]
        });
        actionSheet.present();
    }

    openMenu() {
        console.log(this.channels.length);
        this.menuCtrl.open();
    }


    onLoadChanel(chanel: Chanel, index: number){
        this.menuCtrl.close();
        this.navCtrl.push(EditChanelPage, {chanel: chanel,index: index, mode: 'Edit'});
        //this.chanel = chanel;
    }

    openSearch() {
        this.navCtrl.push(SearchPage);
    }
}
