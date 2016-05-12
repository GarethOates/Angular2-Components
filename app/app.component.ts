import {Component, Output} from 'angular2/core';
import {TweetsComponent} from './tweets.component'

@Component({
    selector: 'my-app',
    templateUrl: "app/app.component.html",
    directives: [TweetsComponent]
})
export class AppComponent {
}