import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";
import { HttpClientModule } from '@angular/common/http';

import { MoviesNowPlayingComponent } from './movies-now-playing/movies-now-playing';

@NgModule({
  declarations: [
    MoviesNowPlayingComponent
  ],
  imports: [
    IonicModule, HttpClientModule
  ],
  exports: [
    MoviesNowPlayingComponent
  ]
})

export class ComponentsModule {
}
