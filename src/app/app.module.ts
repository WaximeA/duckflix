import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ComponentsModule } from '../components/components.module';
import { IonicStorageModule } from '@ionic/storage';

import { LandingPage } from '../pages/landing/landing';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { TopPage } from '../pages/top/top';
import { WatchPage } from '../pages/watch/watch';
import { SettingsPage } from '../pages/settings/settings';
import { ShowMoviePage } from '../pages/show-movie/show-movie';
import { ShowVideoPage } from '../pages/show-video/show-video';
import { SearchMoviePage } from '../pages/search-movie/search-movie';
import { TabsPage } from '../pages/tabs/tabs';

import { CleanUrlPipe } from "../pipes/clean-url/clean-url";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LandingPage,
    LoginPage,
    HomePage,
    TopPage,
    WatchPage,
    SettingsPage,
    ShowMoviePage,
    ShowVideoPage,
    SearchMoviePage,
    TabsPage,
    CleanUrlPipe
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__duckflixdb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LandingPage,
    LoginPage,
    HomePage,
    TopPage,
    WatchPage,
    SettingsPage,
    ShowMoviePage,
    ShowVideoPage,
    SearchMoviePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
