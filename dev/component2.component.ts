import {Component} from "angular2/core";
import {Router} from "angular2/router";
/**
 * Created by Lawrence on 4/17/16.
 */
@Component({
    template: `
        <h2>This is Component 2</h2>
        <button (click)="onNavigate()">Take me to Component 1</button>
    `
})
export class Component2Component {

    constructor(private _router:Router) {

    }

    onNavigate() {
        this._router.navigate(['Component1', {'source':'Component2'}]);
    }
}