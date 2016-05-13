System.register(['angular2/core', './tweets.service', './like.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tweets_service_1, like_component_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tweets_service_1_1) {
                tweets_service_1 = tweets_service_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            }],
        execute: function() {
            TweetComponent = (function () {
                function TweetComponent(tweetsService) {
                    this.tweetsService = tweetsService;
                    this.data = tweetsService.getTweets();
                }
                TweetComponent.prototype.onLike = function ($event, data) {
                    // Normally update server side with new count here.
                    data.likes = $event.liked ? data.likes + 1 : data.likes - 1;
                    console.log(data.likes);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], TweetComponent.prototype, "data", void 0);
                TweetComponent = __decorate([
                    core_1.Component({
                        selector: 'tweet',
                        templateUrl: 'app/tweet.component.html',
                        providers: [tweets_service_1.TweetsService],
                        directives: [like_component_1.LikeComponent],
                        styleUrls: ['app/tweets.component.css']
                    }), 
                    __metadata('design:paramtypes', [tweets_service_1.TweetsService])
                ], TweetComponent);
                return TweetComponent;
            }());
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweet.component.js.map