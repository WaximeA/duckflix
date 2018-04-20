import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-landing',
    templateUrl: 'landing.html',
})
export class LandingPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LandingPage');
    }

    gotoHome() {
        this.navCtrl.push(TabsPage, {
            un_parametre: 'Je suis un paramètre'
        });
    }
}
