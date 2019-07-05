import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './../state/call.actions';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    books = new Array<any>();

    constructor(private store: Store<any>) { }

    ngOnInit() {
        this.store.select('Books').subscribe((books: any) => {
            console.log(books);
            if (books) {
                this.books = books.value;
            }

        });
    }

    add() {
        this.books.push({ name: 'Notebook', price: '500' });

        this.store.dispatch({ type: actions.Actions.Add, value: this.books });

        console.log(this.store);
    }
}
