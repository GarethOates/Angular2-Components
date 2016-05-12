import { Component, Input } from 'angular2/core'
import { Tweet, TweetsService } from './tweets.service'
import { LikeComponent } from './like.component'


@Component({
    selector: 'tweet',
    templateUrl: 'app/tweet.component.html',
    providers: [TweetsService],
    directives: [LikeComponent],
    styleUrls: ['app/tweets.component.css']
})
export class TweetComponent {

    @Input() data: Tweet[];
    
    constructor(private tweetsService: TweetsService) {
        this.data = tweetsService.getTweets();
    }
}