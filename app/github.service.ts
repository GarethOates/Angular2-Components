import { Injectable } from 'angular2/core'
import { Http } from 'angular2/http'
import { User } from './User'
import { Follower } from './Follower'

import { Observable } from 'rxjs/Rx'
import 'rxjs/add/observable/forkJoin'
import 'rxjs/add/operator/map'

@Injectable()
export class GitHubService {
    
    private url: string;
    
    constructor(private _http: Http) {
        this.url = "https://api.github.com/users/";
    }
    
    getAllData(name: string): Observable<any> {
        return Observable.forkJoin([this.getUserData(name), this.getFollowers(name)])
        .map(joined => new Object({ users: joined[0], followers: joined[1]}));
    }
    
    getUserData(name: string): Observable<User> {
        return this._http.get(this.url + name).map(response => response.json());
    }
    
    getFollowers(name: string): Observable<Follower> {
        return this._http.get(this.url + name + "/followers").map(response => response.json());
    }
    
}