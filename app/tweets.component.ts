import { Component, EventEmitter, Output } from 'angular2/core';
import { TweetComponent} from './tweet.component'
import { Tweet, TweetsService } from './tweets.service'

@Component({
    selector: 'tweets',
    templateUrl: 'app/tweets.component.html',
    styleUrls: ['app/tweets.component.css'],
    directives: [TweetComponent],
    providers: [TweetsService]
})

export class TweetsComponent {
    tweets: Tweet[];
    
    constructor(tweetService: TweetsService) {
        this.tweets = tweetService.getTweets();
    }

}