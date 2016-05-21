import { Component } from 'angular2/core';
import { SubscribeFormComponent } from './subscribe-form.component'

@Component({
    selector: 'my-app',
    templateUrl: "app/app.component.html",
    directives: [SubscribeFormComponent]
})
export class AppComponent {
}