import { Component } from 'angular2/core';
import { ContactFormComponent } from './contact-form.component'

@Component({
    selector: 'my-app',
    templateUrl: "app/app.component.html",
    directives: [ContactFormComponent]
})
export class AppComponent {
}