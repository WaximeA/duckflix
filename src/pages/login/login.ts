import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public storage: Storage) {
  }

  continueNext() {
    this.storage.set('username', this.username);
    this.storage.set('isConnected', 'true');
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    this.navCtrl.push(TabsPage);
  }
}
