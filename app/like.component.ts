import { Component, Input, Output, EventEmitter } from 'angular2/core'

@Component({
    selector: 'like',
    template: `
        <i class="glyphicon glyphicon-heart"
        [class.highlighted]="isLiked"
        (click)="clicked()">
        </i> <span>{{ noOfLikes }}</span>
    `,
    styleUrls: ['app/like.component.css']
})
export class LikeComponent
{
    @Input() isLiked: boolean;
    @Input() noOfLikes: number;
        
    clicked() {
        this.isLiked = !this.isLiked;
        this.noOfLikes += this.isLiked ? 1 : -1;     
    }
}