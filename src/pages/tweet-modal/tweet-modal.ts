import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the TweetModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tweet-modal',
  templateUrl: 'tweet-modal.html',
})
export class TweetModalPage {
  message;
  apiEndpoint =  "https://us-central1-angular-wick.cloudfunctions.net/api/api/tweets/"
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TweetModalPage');
  }

  createTweet(message){
    var body = {
      name: "@nonwick-narak",
      message: message
    }
    this.http.post(this.apiEndpoint,body).subscribe((result:any)=>{
      console.log(result)
      this.viewCtrl.dismiss(true)
    })
  }

  dismiss(){
    this.viewCtrl.dismiss()
  }

}
