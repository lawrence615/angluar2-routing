import {Component} from "angular2/core";
import {HttpService} from "./services/http.service";
import {error} from "util";
/**
 * Created by Lawrence on 4/18/16.
 */

@Component({
    selector: 'my-http-get-request',
    template: `
        <div class="input">
            <label for="title">Title</label>
            <input type="text" id="title" #title>
        </div>
        <div class="input">
            <label for="body">Body</label>
            <input type="text" id="body" #body>
        </div>
        <div class="input">
            <label for="user-id">User ID</label>
            <input type="text" id="user-id" #userId>
        </div>
        <button (click)="onPost(title.value, body.value, userId.value)">Post Data</button>
        <button (click)="onGetPosts()">Get All Posts</button>
        <p>Response: {{response | json}}</p>
        <table>
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="#person of get_response">
                    <td>{{ person.id}}</td>
                    <td>{{ person.title}}</td>
                    <td>{{ person.body}}</td>
                </tr>
            </tbody>
        </table>
    `,
    providers: [HttpService]
})
export class HttpGetRequestComponent {
    response:string;
    get_response: string;

    constructor(private _httpService:HttpService) {
    }

    onGetPosts() {
        this._httpService.getPosts()
            .subscribe(
                response => this.get_response = response,
                error => console.log(error)
            )
    }

    onPost(title:string, body:string, userId:string) {
        this._httpService.createPost({title: title, body: body, userId: +userId})
            .subscribe(
                response => this.response = response,
                error => console.log(error)
            )
    }
}