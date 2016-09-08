import { Component } from 'angular2/core';
import { AuthorService } from './author.service';

@Component({
    selector: 'authors',
    templateUrl: "app/authors.component.html",
    providers: [AuthorService]
})
export class AuthorsComponent {
    title: string = "Title for authors page";
    authors: string[];
    
    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();
     }
}