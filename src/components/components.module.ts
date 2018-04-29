import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";
import { HttpClientModule } from '@angular/common/http';

import { MoviesNowPlayingComponent } from './movies-now-playing/movies-now-playing';
import { MoviesTopRatedComponent } from './movies-top-rated/movies-top-rated';
import { MoviesSearchComponent } from './movies-search/movies-search';
import { MoviesGetVideosComponent } from './movies-get-videos/movies-get-videos';

@NgModule({
  declarations: [
    MoviesNowPlayingComponent,
    MoviesTopRatedComponent,
    MoviesSearchComponent,
    MoviesGetVideosComponent
  ],
  imports: [
    IonicModule, HttpClientModule
  ],
  exports: [
    MoviesNowPlayingComponent,
    MoviesTopRatedComponent,
    MoviesSearchComponent,
    MoviesGetVideosComponent
  ]
})

export class ComponentsModule {
}
