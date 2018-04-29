import { Component } from '@angular/core';

/**
 * Generated class for the DuckflixHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'duckflix-header',
  templateUrl: 'duckflix-header.html'
})
export class DuckflixHeaderComponent {

  text: string;

  constructor() {
    console.log('Hello DuckflixHeaderComponent Component');
    this.text = 'Hello World';
  }

}
