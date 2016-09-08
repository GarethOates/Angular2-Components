import { Component, OnInit } from "angular2/core";
import { GitHubService } from "./github.service";
import { HTTP_PROVIDERS } from "angular2/http";
import { Observable } from "rxjs/Rx";

@Component({
    selector: "gitHub",
    templateUrl: "app/github.component.html",
    styleUrls: ["app/github.component.css"],
    providers: [GitHubService, HTTP_PROVIDERS]
})
export class GitHubComponent implements OnInit {

    isLoading: boolean = true;
    User;
    Followers;

    username = "GarethOates";

    constructor(private gitHubService: GitHubService) { }

    ngOnInit() {
        Observable.forkJoin(
            this.gitHubService.getUserData(this.username),
            this.gitHubService.getFollowers(this.username)
        ).subscribe(
            res => {
                this.User = res[0];
                this.Followers = res[1];
            }, null, () => { this.isLoading = false; }
        );
    }
}
