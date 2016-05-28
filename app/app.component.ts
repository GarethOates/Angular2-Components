import { Component } from 'angular2/core';
import {GitHubComponent} from './github.component'

@Component({
    selector: 'my-app',
    templateUrl: "app/app.component.html",
    directives: [GitHubComponent]
})
export class AppComponent {
}