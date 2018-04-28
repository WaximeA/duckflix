import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  isConnected: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.storage.get('isConnected').then((val) => {
      this.isConnected = val;
    });
  }

}
