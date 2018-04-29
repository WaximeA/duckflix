import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from "@ionic/storage";
import { LoadingController, ModalController } from "ionic-angular";
import { ShowVideoPage } from "../../pages/show-video/show-video";

const apiUrl='https://api.themoviedb.org';

/**
 * Generated class for the MoviesAddedComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'movies-added',
  templateUrl: 'movies-added.html'
})
export class MoviesAddedComponent {

  addedMovies: any = [];
  movies: any = [];

  constructor(private http: HttpClient, public storage: Storage, public modalCtrl: ModalController, public loadingCtrl: LoadingController) {
    this.prensentLoader();
    this.storage.get('addedMoviesStorage').then((val) => {
      this.addedMovies = val;
      this.getAllData();
    });
  }

  prensentLoader(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  assignAddedMovies(){
    this.storage.get('addedMoviesStorage').then((val) => {
      this.addedMovies = val;
    });
  }

  fetchAPI(addedMovieId) {
    this.http.get(`${apiUrl}/3/movie/${addedMovieId}?api_key=e47f7187bfd94a3b12ce8ca4ae282342`).subscribe(
      data => {
        this.movies.push(data);
      }, err => {
        console.log("Une erreur s'est produite.");
      });
  }

  getAllData(){
    console.log(this.addedMovies);
    console.log('stored OUT : '+this.addedMovies);
    this.addedMovies.forEach((addedMovieId) => {
      this.fetchAPI(addedMovieId);
    });
  }

  openModal(movieId){
    let modal = this.modalCtrl.create(ShowVideoPage, movieId);
    modal.present();
  }

}
