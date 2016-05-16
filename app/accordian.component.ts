import { Component, Input } from 'angular2/core'

@Component({
    selector: 'accordian',
    template: `
    <div class="panel panel-default">
        <div 
            class="accordian-title" 
            (click)="toggle()">
      {{ title }}
    <i 
        class="pull-right glyphicon"
        [ngClass]="{
           'glyphicon-chevron-down': !isExpanded,
           'glyphicon-chevron-up' : isExpanded 
        }">
    </i>
        </div>
        <div *ngIf="isExpanded" class="accordian-content">
            <ng-content></ng-content>
        </div>        
    </div>
    `
})
export class AccordianComponent {
    @Input() title: string;
    isExpanded: boolean = false;
    
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
}