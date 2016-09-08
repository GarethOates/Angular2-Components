import { Component, Input, Output, EventEmitter } from 'angular2/core'


@Component({
    selector: 'voter',
    template: `
    
    <div class="voter">

        <i class="glyphicon glyphicon-menu-up"
        (click)="UpVote()" 
        [class.highlighted]="myVote == 1"></i>
        
        <span class="vote-count">{{ voteCount + myVote }}</span>
        
        <i class="glyphicon glyphicon-menu-down"
        (click)="DownVote()" [class.highlighted]="myVote == -1"></i>
    </div>
    `,
    styleUrls: ["app/voter.component.css"]
})
export class VoterComponent {

    @Input() voteCount: number;
    @Input() myVote: number = 0;
    
    @Output() vote = new EventEmitter();
    
   // @Output() vote;

    UpVote() {
        if(this.myVote == 1) return;
        
        this.myVote++;
        
        this.vote.emit({ myVote: this.myVote });
    }

    DownVote() {
        if(this.myVote == -1) return;
        this.myVote--;
        
        this.vote.emit({ myVote: this.myVote });
    }
}