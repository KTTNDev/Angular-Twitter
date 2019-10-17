import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { TweetModalPage } from '../tweet-modal/tweet-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  apiEndpoint = "https://us-central1-angular-wick.cloudfunctions.net/api/api/tweets/"
  tweets = []
  tweetModal
  constructor(public navCtrl: NavController, private http:HttpClient, private modalCtrl:ModalController) {

  }

  ngOnInit(){
    this.tweetModal = this.modalCtrl.create(TweetModalPage)
    this.tweetModal.onDidDismiss(data =>
    {
      if(data == true){
        this.getTweets()
      }
    });
    this.getTweets()
  }

  getTweets(){
    this.http.get(this.apiEndpoint).subscribe((result:any)=>{
      console.log(result)
      if(result.status == 200){
        this.tweets = result.tweets
      }
    })
  }

  showTweetModal(){
    this.tweetModal.present()
  }

}
