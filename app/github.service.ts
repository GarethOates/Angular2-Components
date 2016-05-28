import { Injectable } from 'angular2/core'
import { Http } from 'angular2/http'

import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map'

@Injectable()
export class GitHubService {
    
    private url: string;
    
    constructor(private _http: Http) {
        this.url = "https://api.github.com/users/";
    }
    
    getUserData(name: string) {
        return this._http.get(this.url + name).map(response => response.json());
    }
    
    getFollowers(name: string) {
        return this._http.get(this.url + name + "/followers").map(response => response.json());
    }
    
}