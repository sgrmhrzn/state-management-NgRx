import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './../state/call.actions';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    constructor(private _store: Store<any>) { }

    ngOnInit() {
    }

    add() {
        this._store.dispatch({ type: actions.Actions.Hold });
        console.log(this._store);
    }
}
