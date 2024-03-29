import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController, Content } from "ionic-angular";
import { ShowMoviePage } from "../../pages/show-movie/show-movie";

const apiUrl='https://api.themoviedb.org';

/**
 * Generated class for the MoviesNowPlayingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'movies-now-playing',
  templateUrl: 'movies-now-playing.html'
})
export class MoviesNowPlayingComponent {

  pageNumber: any;
  number: any = 1;
  movies: any = [];

  constructor(private http: HttpClient, public modalCtrl: ModalController, public content: Content) {
    // Get content with Http Get request
    this.fetchAPI();
    this.pageNumber = this.number;
  }

  paginatePrevious() {
    if  (this.number > 1){
      this.number = this.number-1;
      this.pageNumber = this.number;
      this.fetchAPI()
      this.content.scrollToTop(400);
    }
  }

  paginateNext() {
    this.number = this.number+1;
    this.pageNumber = this.number;
    this.fetchAPI();
    this.content.scrollToTop(400);
  }

  isFirstPage(){
    if (this.number < 2){
      return true;
    }
    return false;
  }

  fetchAPI() {
    this.http.get(`${apiUrl}/3/movie/now_playing?api_key=e47f7187bfd94a3b12ce8ca4ae282342&language=en-US&page=${this.number}`).subscribe(
      data => {
        this.movies = data['results'];
      }, err => {
        console.log("Une erreur s'est produite.");
      });
  }

  openModal(movieId){
    let modal = this.modalCtrl.create(ShowMoviePage, movieId);
    modal.present();
  }

}
