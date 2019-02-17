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
import {EditLinkPage} from "../edit-link/edit-link";

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
    /**
     * All user's channels
     */
    channels: Chanel[] = [];
    /**
     * all user's tags
     */
    tags = Array();
    /**
     * All user's links
     */
    links;
    /**
     * channel's index in the database
     */
    i = 0;

    /**
     * constructor
     * @param navCtrl
     * @param chanelServices
     * @param navParams
     * @param menuCtrl
     * @param actionSheetController
     * @param alertController
     * @param linkService
     * @param chanelService
     * @param toastCtrl
     */
    constructor(public navCtrl: NavController, public chanelServices: ChanelServices,
                public navParams: NavParams, private menuCtrl: MenuController,
                public actionSheetController: ActionSheetController,
                public alertController: AlertController, public linkService: LinkService,
                public chanelService: ChanelServices, public toastCtrl: ToastController) {
    }

    /**
     * ngOn Init
     */
    ngOnInit() {
        this.loadAllChannels();
    }

    /**
     * login out.
     */
    logOut() {
      this.navCtrl.popToRoot();
    }
    /**
     * before the ionic view is entered
     */
    ionViewWillEnter() {
        this.menuCtrl.close();
    }

    /**
     * after loading the ionic view
     */
    ionViewDidEnter() {
        this.loadAllChannels();
    }

    /**
     * creating a new channel to database
     */
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

                                        const tagName = data.tag.split(",");
                                        const linkId = Math.floor((Math.random() * 1000) + 100);
                                        for(let tagn of tagName){
                                            const tag = new Tag(Math.floor((Math.random() * 1000) + 100), tagn);
                                            this.tags.push(tag);
                                        }
                                        const dataAdd = new Link(linkId, data.link,this.tags);
                                        console.log(dataAdd);
                                        /**
                                         * using service to add link to server
                                         */
                                        this.linkService.addLink(dataAdd).subscribe(() => {
                                            const toast = this.toastCtrl.create({
                                                position: 'top',
                                                message: 'Link data added succesfully',
                                                duration: 20
                                            });
                                            toast.present();
                                            this.chanelService.getChanel().subscribe((data) => {
                                                this.channels = data;
                                            }, () => {
                                                console.log("No Chanel Found");
                                            });
                                        }, (err) =>{
                                            const toast = this.toastCtrl.create({
                                                position: 'top',
                                                message: 'Link data failed with ' + err
                                            });
                                            toast.present();
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

    /**
     * open the menu on the left
     */
    openMenu() {
        console.log(this.channels.length);
        this.menuCtrl.open();
    }

    /**
     * load user's channel for editing
     * @param chanel
     * @param index
     */
    onLoadChanel(chanel: Chanel, index: number){
        this.menuCtrl.close();
        this.navCtrl.push(EditChanelPage, {chanel: chanel,index: chanel.id, mode: 'Edit'});
        //this.chanel = chanel;
    }

    /**
     * opening the search page
     */
    openSearch() {
        this.navCtrl.push(SearchPage);
    }

    /**
     * Load all the connected user's channels
     */
    loadAllChannels() {
        this.chanelService.loadChannelsByUser().subscribe( channels => {
            this.channels = channels;
        });
    }

    /**
     * onload all tags
     * @param link
     */
    onLoadTag(link: Link) {
        this.navCtrl.push(EditLinkPage, {'link': link});
    }
}
