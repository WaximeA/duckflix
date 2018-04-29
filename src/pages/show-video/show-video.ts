import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";

const apiUrl='https://api.themoviedb.org';

/**
 * Generated class for the ShowVideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-video',
  templateUrl: 'show-video.html',
})
export class ShowVideoPage {

  movieId: any;
  videos: any = [];
  baseUrl: string = 'https://www.youtube.com/embed/';

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,  private http: HttpClient,  public loadingCtrl: LoadingController) {
    this.movieId = this.navParams.get('movieId');
    this.fetchAPI();
    this.prensentLoader();
  }

  prensentLoader(){
    let loader = this.loadingCtrl.create({
      content: "Please wait... videos are loading",
      duration: 4000
    });
    loader.present();
  }


  fetchAPI() {
    this.http.get(`${apiUrl}/3/movie/${this.movieId}/videos?api_key=e47f7187bfd94a3b12ce8ca4ae282342`).subscribe(
      data => {
        this.videos = data['results'];
      }, err => {
        console.log("Une erreur s'est produite.");
      });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
