import { Injectable } from 'angular2/core'

@Injectable()
export class TweetsService {
    
    imgUrl: string = "http://www.lorempixel.com/100/100/city";
    
    getTweets() {
        return [
            new Tweet(this.imgUrl + "?1", "AngularJS 2", "@JohnPapa", "Something about AngularJS2", 1, true),
            new Tweet(this.imgUrl + "?2", "PHP Developers", "@PHPDevWorld", "We Love PHP we do", 5, true),
            new Tweet(this.imgUrl + "?3", "Vagrant Boxes", "@DanWahlin", "Do I even use Vagrant?", 0, false)        
        ]
    }
}

export class Tweet {
   
   constructor(public image: string, public title: string, public handle: string,
   public body: string, public likes: number, public isLiked: boolean) {
       
   } 
}