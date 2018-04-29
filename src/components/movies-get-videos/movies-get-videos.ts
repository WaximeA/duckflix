import { Component } from '@angular/core';

/**
 * Generated class for the MoviesGetVideosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'movies-get-videos',
  templateUrl: 'movies-get-videos.html'
})
export class MoviesGetVideosComponent {

  text: string;

  constructor() {
    console.log('Hello MoviesGetVideosComponent Component');
    this.text = 'Hello World';
  }

}
