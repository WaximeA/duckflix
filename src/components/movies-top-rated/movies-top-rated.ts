import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl='https://api.themoviedb.org';

/**
 * Generated class for the MoviesTopRatedComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'movies-top-rated',
  templateUrl: 'movies-top-rated.html'
})
export class MoviesTopRatedComponent {

  pageNumber: any;
  number: any = 1;
  movies: any = [];

  constructor(private http: HttpClient) {
    // Get content with Http Get request
    this.fetchAPI();
    this.pageNumber = this.number;
  }

  paginatePrevious() {
    if  (this.number > 1){
      this.number = this.number-1;
      this.pageNumber = this.number;
      this.fetchAPI()
    }
  }

  paginateNext() {
    this.number = this.number+1;
    this.pageNumber = this.number;
    this.fetchAPI()
  }

  isFirstPage(){
    if (this.number < 2){
      return true;
    }
    return false;
  }

  fetchAPI() {
    this.http.get(`${apiUrl}/3/movie/top_rated?api_key=e47f7187bfd94a3b12ce8ca4ae282342&language=en-US&page=${this.number}`).subscribe(
      data => {
        this.movies = data['results'];
      }, err => {
        console.log("Une erreur s'est produite.");
      });
  }

}
