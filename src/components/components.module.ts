import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";
import { HttpClientModule } from '@angular/common/http';

import { MoviesNowPlayingComponent } from './movies-now-playing/movies-now-playing';
import { MoviesTopRatedComponent } from './movies-top-rated/movies-top-rated';
import { MoviesSearchComponent } from './movies-search/movies-search';

@NgModule({
  declarations: [
    MoviesNowPlayingComponent,
    MoviesTopRatedComponent,
    MoviesSearchComponent
  ],
  imports: [
    IonicModule, HttpClientModule
  ],
  exports: [
    MoviesNowPlayingComponent,
    MoviesTopRatedComponent,
    MoviesSearchComponent
  ]
})

export class ComponentsModule {
}
