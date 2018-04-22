import { Component } from '@angular/core';
import { SearchMoviePage } from "../../pages/search-movie/search-movie";
import { ModalController } from "ionic-angular";

/**
 * Generated class for the MoviesSearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'movies-search',
  templateUrl: 'movies-search.html'
})
export class MoviesSearchComponent {

  constructor(public modalCtrl: ModalController) {}

  openModal(){
    let modal = this.modalCtrl.create(SearchMoviePage);
    modal.present();
  }

}
