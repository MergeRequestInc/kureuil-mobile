import {Component, OnInit} from '@angular/core';
import {
    ActionSheetController,
    AlertController,
    IonicPage,
    MenuController,
    NavController,
    NavParams
} from 'ionic-angular';
import {EditChanelPage} from "../edit-chanel/edit-chanel";
import {Chanel} from "../../model/chanel";
import {ChanelServices} from "../../services/chanel.services";
import {LinkService} from "../../services/link.service";
import {SearchPage} from "../search/search";

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
    chanel: Chanel;

    constructor(public navCtrl: NavController, public chanelServices: ChanelServices,
                public navParams: NavParams, private menuCtrl: MenuController,
                public actionSheetController: ActionSheetController,
                public alertController: AlertController, public linkService: LinkService) {
    }

    ngOnInit() {
        this.chanels = this.chanelServices.getChanel();
        this.chanel = this.chanels[0];
    }

    logOut() {
      this.navCtrl.popToRoot();
    }

    ionViewWillEnter() {
        this.menuCtrl.close();
        this.chanels = this.chanelServices.getChanel();
        this.chanel = this.chanels[0];
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
                                    name: 'link',
                                    type: 'text',
                                    placeholder: 'Links'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Add',
                                    handler: (data) => {
                                        this.linkService.addLink(data.link);
                                        console.log(this.linkService.getLinks());
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
        console.log(this.chanels.length);
        this.menuCtrl.open();
    }


    onLoadChanel(chanel: Chanel, index: number){
        this.menuCtrl.close();
        //this.navCtrl.push(EditChanelPage, {chanel: chanel,index: index, mode: 'Edit'});
        this.chanel = chanel;
    }

    openSearch() {
        this.navCtrl.push(SearchPage);
    }
}
