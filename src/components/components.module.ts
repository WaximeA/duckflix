import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";
import { HttpClientModule } from '@angular/common/http';

import { MoviesNowPlayingComponent } from './movies-now-playing/movies-now-playing';
import { MoviesTopRatedComponent } from './movies-top-rated/movies-top-rated';

@NgModule({
  declarations: [
    MoviesNowPlayingComponent,
    MoviesTopRatedComponent
  ],
  imports: [
    IonicModule, HttpClientModule
  ],
  exports: [
    MoviesNowPlayingComponent,
    MoviesTopRatedComponent
  ]
})

export class ComponentsModule {
}
