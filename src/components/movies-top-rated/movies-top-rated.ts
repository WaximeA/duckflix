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

  movies: any = [];

  constructor(private http: HttpClient) {
    // Get content with Http Get request
    this.http.get(`${apiUrl}/3/movie/top_rated?api_key=e47f7187bfd94a3b12ce8ca4ae282342&language=en-US&page=1`).subscribe(
      data => {
        this.movies = data['results'];
      }, err => {
        console.log("Une erreur s'est produite.");
      });
  }

}
