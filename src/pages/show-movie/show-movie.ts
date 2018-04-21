import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

const apiUrl='https://api.themoviedb.org';

/**
 * Generated class for the ShowMoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-movie',
  templateUrl: 'show-movie.html',
})
export class ShowMoviePage {

  movieId: any;
  movie: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private http: HttpClient) {
    this.movieId = this.navParams.get('movieId');
    this.fetchAPI();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowMoviePage');
    console.log(this.movieId)
  }

  fetchAPI() {
    this.http.get(`${apiUrl}/3/movie/${this.movieId}?api_key=e47f7187bfd94a3b12ce8ca4ae282342`).subscribe(
      data => {
        this.movie = data;
      }, err => {
        console.log("Une erreur s'est produite.");
      });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
