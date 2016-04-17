import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";
/**
 * Created by Lawrence on 4/17/16.
 */

@Component({
    template: `
        This is Component 1
        <div>
            Source was {{ source }}
        </div>

        <div>
            Optional was {{ optional }}
        </div>
    `
})
export class Component1Component implements OnInit{
    source: string;
    optional: string;

    constructor(private _routeParams: RouteParams){}

    ngOnInit():any {
        this.source = this._routeParams.get('source');
        this.optional = this._routeParams.get('optional');
    }
}