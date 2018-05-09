import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  isConnected: any;
  username: any;
  yes=true;
  wifi=true;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.storage.get('isConnected').then((val) => {
      this.isConnected = val;
    });
    this.storage.get('username').then((val) => {
      this.username = val;
    });
  }

}
