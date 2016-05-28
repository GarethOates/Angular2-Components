import { Component, Input } from 'angular2/core'

@Component({
    selector: 'accordian',
    template: `
    <div class="panel panel-default">
        <div 
            class="panel-heading" 
            (click)="toggle()">
      {{ title }}
    <i 
        class="pull-right glyphicon heading"
        [ngClass]="{
           'glyphicon-chevron-down': !isExpanded,
           'glyphicon-chevron-up' : isExpanded 
        }">
    </i>
        </div>
        <div *ngIf="isExpanded" class="panel-body">
            <ng-content></ng-content>
        </div>        
    </div>
    `,
    styleUrls: ['app/accordian.component.css']
})
export class AccordianComponent {
    @Input() title: string;
    isExpanded: boolean = false;
    
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
}