import {Injectable} from 'angular2/core';
import {Http} from "angular2/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx'
import {Headers} from "angular2/http";
/**
 * Created by Lawrence on 4/18/16.
 */

@Injectable()

export class HttpService {
    constructor(private _http:Http) {
    }

    getPosts():Observable<any> {
        return this._http.get('http://jsonplaceholder.typicode.com/posts')
            .map(res => res.json())
    }

    createPost(post:{title: string, body: string, userId: number}):Observable<any> {
        const body = JSON.stringify(post);
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-urlencoded');
        return this._http.post('http://jsonplaceholder.typicode.com/posts', body, {
            headers: headers
        }).map(res=>res.json());
    }
}