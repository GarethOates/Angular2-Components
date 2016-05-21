import { Component } from 'angular2/core';
import { SignupFormComponent } from './signup-form.component'

@Component({
    selector: 'my-app',
    templateUrl: "app/app.component.html",
    directives: [SignupFormComponent]
})
export class AppComponent {
}