import { Component, OnInit } from 'angular2/core'
import { GitHubService } from './github.service'
import { HTTP_PROVIDERS } from 'angular2/http'
import { User } from './User'
import { Follower } from './Follower'

@Component({
    selector: 'gitHub',
    templateUrl: 'app/github.component.html',
    styleUrls: ['app/github.component.css'],
    providers: [GitHubService, HTTP_PROVIDERS]
})
export class GitHubComponent implements OnInit {
    
    isLoading: boolean = true;
    User: User;
    Followers: Follower[];
    
    constructor(private gitHubService: GitHubService) { }
    
    ngOnInit() {
        this.gitHubService.getAllData("Octocat").subscribe(response => {
            console.log(response);
            this.User = response.users;
            this.Followers = response.followers;
            this.isLoading = false;
        });
    }
}