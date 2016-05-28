System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var TweetsService, Tweet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TweetsService = (function () {
                function TweetsService() {
                    this.imgUrl = "http://www.lorempixel.com/100/100/city";
                }
                TweetsService.prototype.getTweets = function () {
                    return [
                        new Tweet(this.imgUrl + "?1", "AngularJS 2", "@JohnPapa", "Something about AngularJS2", 1, true),
                        new Tweet(this.imgUrl + "?2", "PHP Developers", "@PHPDevWorld", "We Love PHP we do", 5, true),
                        new Tweet(this.imgUrl + "?3", "Vagrant Boxes", "@DanWahlin", "Do I even use Vagrant?", 0, false)
                    ];
                };
                TweetsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TweetsService);
                return TweetsService;
            }());
            exports_1("TweetsService", TweetsService);
            Tweet = (function () {
                function Tweet(image, title, handle, body, likes, isLiked) {
                    this.image = image;
                    this.title = title;
                    this.handle = handle;
                    this.body = body;
                    this.likes = likes;
                    this.isLiked = isLiked;
                }
                return Tweet;
            }());
            exports_1("Tweet", Tweet);
        }
    }
});
//# sourceMappingURL=tweets.service.js.map