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
    
    onLike($event, data) {
        // Normally update server side with new count here.
        data.likes = $event.liked ? data.likes + 1 : data.likes - 1;
        console.log(data.likes);
    }
}