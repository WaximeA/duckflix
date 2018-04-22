import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ShowMoviePage } from "../show-movie/show-movie";

const apiUrl='https://api.themoviedb.org';

/**
 * Generated class for the SearchMoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-movie',
  templateUrl: 'search-movie.html',
})
export class SearchMoviePage {

  research: any = [];
  event: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private http: HttpClient,  public modalCtrl: ModalController) {
    this.fetchAPI(event);
  }

  fetchAPI(event) {
    let val = event.target.value;

    this.http.get(`${apiUrl}/3/search/movie?api_key=e47f7187bfd94a3b12ce8ca4ae282342&query=${val}&page=1`).subscribe(
      data => {
        this.research = data['results'];
      }, err => {
        console.log("Une erreur s'est produite.");
      });

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      return this.research;
    } else {
      this.research = [];
      return this.research;
    }
  }

  openModal(movieId){
    let modal = this.modalCtrl.create(ShowMoviePage, movieId);
    modal.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
