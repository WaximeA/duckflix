import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello MoviesSearchComponent Component');
    this.text = 'Hello World';
  }

}
