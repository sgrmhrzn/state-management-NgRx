import { Component, OnInit } from '@angular/core';
import * as fromStock from './../state/index';
import { Store, select } from '@ngrx/store';
import { StockState } from '../state/stock.reducer';
import { BookModel, KeyValueModel } from 'src/app/models/book.model';
import { SelectedStockId, AddBook } from './../state/stock.actions';
import { zip } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    book: BookModel;
    languages: KeyValueModel[];
    genres: KeyValueModel[];
    constructor(private store: Store<StockState>, private activateRoute: ActivatedRoute) { }

    ngOnInit() {

        if (this.activateRoute.snapshot.params.id) {
            this.store.dispatch(new SelectedStockId(+this.activateRoute.snapshot.params.id));
        } else {
            this.store.dispatch(new SelectedStockId(0));
        }

        zip(this.store.pipe(select(fromStock.getGenres)),
            this.store.pipe(select(fromStock.getLanguages)),
            this.store.pipe(select(fromStock.getBook)))
            .subscribe(([genres, languages, book]) => {
                console.log(languages);
                this.languages = languages;
                this.genres = genres;

                if (book) {
                    this.book = book;
                    console.log(this.book);
                }

            });


    }

    optionChange(type) {
        switch (type) {
            case 0:
                this.book.Language = this.languages.find(x => x.Key === this.book.Language.Key);
                break;
            case 1:
                this.book.Genre = this.genres.find(x => x.Key === this.book.Genre.Key);
                break;
        }
    }

    onSubmit() {
        this.store.dispatch(new AddBook(this.book));
    }
}
