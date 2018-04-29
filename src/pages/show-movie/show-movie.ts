import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ToastController } from 'ionic-angular';
import { Storage } from "@ionic/storage";

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
  addedMovies: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private http: HttpClient, public toastCtrl: ToastController, public storage: Storage) {
    this.movieId = this.navParams.get('movieId');
    this.assignAddedMovies();
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

  addMovie(position: string, movieId, movieTitle) {
    this.addedMovies.push(movieId);
    this.storage.set('addedMoviesStorage', this.addedMovies);
    console.log('added movies : '+this.addedMovies);

    // display success message toast
    let toast = this.toastCtrl.create({
      message: 'You successfully ADD "'+ movieTitle +'" to your watch section',
      duration: 2500,
      position: position
    });

    toast.present(toast);
  }

  removeMovie(position: string, movieId, movieTitle){
    let movieIndex = this.addedMovies.indexOf(movieId);
    this.addedMovies.splice(movieIndex, movieIndex+1);
    this.storage.set('addedMoviesStorage', this.addedMovies);
    console.log(this.addedMovies);
    console.log(movieIndex);

    // display success message toast
    let toast = this.toastCtrl.create({
      message: 'You successfully REMOVE "'+ movieTitle +'" to your watch section',
      duration: 2500,
      position: position
    });

    toast.present(toast);
  }

  assignAddedMovies(){
    this.storage.get('addedMoviesStorage').then((val) => {
      this.addedMovies = val;
    });
  }

  isMovieAdded(movieId){
    if (this.addedMovies.indexOf(movieId) > -1) {
      return true;
    }
    return false;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
