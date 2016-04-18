import {Component} from 'angular2/core';
import {RouteConfig} from "angular2/router";
import {Component1Component} from "./component1.component";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Component2Component} from "./component2.component";
import {HttpGetRequestComponent} from "./http-get-request.component";

@Component({
    selector: 'my-app',
    template: `
        <header>
            <ul>
                <li><a [routerLink]="['Component1', {source:'AppComponent', optional:'This is optional'}]">Component 1</a></li>
                <li><a [routerLink]="['Component2']">Component 2</a></li>
                <li><a [routerLink]="['HttpGetRequest']">Http Get Request</a></li>
            </ul>
        </header>
        <router-outlet></router-outlet>
    `,
    directives:[ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/component-1/:source/...', name: 'Component1', component: Component1Component },
    {path: '/component-2', name: 'Component2', component: Component2Component },
    {path: '/http-get-component', name: 'HttpGetRequest', component: HttpGetRequestComponent }
])
export class AppComponent {

}