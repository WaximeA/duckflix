import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";
import { HttpClientModule } from '@angular/common/http';

import { MoviesNowPlayingComponent } from './movies-now-playing/movies-now-playing';
import { MoviesTopRatedComponent } from './movies-top-rated/movies-top-rated';
import { MoviesSearchComponent } from './movies-search/movies-search';
import { DuckflixHeaderComponent } from './duckflix-header/duckflix-header';

@NgModule({
  declarations: [
    MoviesNowPlayingComponent,
    MoviesTopRatedComponent,
    MoviesSearchComponent,
    DuckflixHeaderComponent
  ],
  imports: [
    IonicModule, HttpClientModule
  ],
  exports: [
    MoviesNowPlayingComponent,
    MoviesTopRatedComponent,
    MoviesSearchComponent,
    DuckflixHeaderComponent
  ]
})

export class ComponentsModule {
}
