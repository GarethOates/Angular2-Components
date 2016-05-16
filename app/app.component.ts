import {Component, Output} from 'angular2/core';
import { AccordianComponent } from './accordian.component'

@Component({
    selector: 'my-app',
    templateUrl: "app/app.component.html",
    directives: [AccordianComponent]
})
export class AppComponent {
}