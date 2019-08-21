import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookModel } from 'src/app/models/book.model';
import { CartModel } from 'src/app/models/cart.model';
import { Store, select } from '@ngrx/store';
import { SharedService } from 'src/app/shared/service/shared.service';
import { FilterState } from '../../books/filter/state/filter.reducer';
import * as actions from '../state/stock.actions';
import * as fromRoot from '../../../app-state/app.state';
import * as fromStock from './../state/index';
import { StockState } from '../state/stock.reducer';
import { Subscription } from 'rxjs';



@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

    books: Array<BookModel>;
    componentActive = true;
    cartItems: Array<CartModel> = [];
    booksDB: BookModel[];
    subscription: Subscription;

    constructor(private store: Store<StockState>, private shared: SharedService) { }

    ngOnInit() {

        this.books = new Array<BookModel>();
        this.subscription = this.store.pipe(select(fromStock.getBooks)).subscribe((resp: BookModel[]) => {
            console.log(resp);
            this.books = resp;
        });


        // this.shared.getStock().subscribe((response: Array<BookModel>) => {
        //     this.books = response;
        // });

        this.booksDB = this.books;
        // this.store.pipe(
        //     select(fromCart.getCartItems),
        //     takeWhile(() => this.componentActive)
        // ).subscribe(
        //     books => {
        //         console.log('sdf');
        //         this.cartItems = books;
        //     }
        // );

        // this.store.pipe(
        //     select(fromFilter.getFilters),
        // ).subscribe(
        //     filters => {
        //         // this.filters = filters;
        //         console.log(filters);

        //         if (filters.FilterGenre.IsActive && !filters.FilterLanguage.IsActive) {
        //             this.updateWithGenreFilter(filters);
        //         }
        //         if (filters.FilterLanguage.IsActive && !filters.FilterGenre.IsActive) {
        //             this.updateWithLanguageFilter(filters);
        //         }
        //         if (filters.FilterGenre.IsActive && filters.FilterLanguage.IsActive) {
        //             this.updateWithLanguageAndGenreFilters(filters);
        //         }
        //     }
        // );


        this.shared.pageLoaded = true;
    }

    updateWithLanguageAndGenreFilters(filters: FilterState) {
        let books = this.booksDB;
        if (filters.FilterLanguage.IsActive && filters.FilterLanguage.Value) {
            books = books.filter(x => x.Language.Key === filters.FilterLanguage.Value);
        }

        if (filters.FilterGenre.IsActive && filters.FilterGenre.Value) {

            books = books.filter(x => x.Genre.Key === filters.FilterGenre.Value
                && x.Genre.Key === filters.FilterGenre.Value);
        }
        this.books = books;
        // else {
        //     this.books = this.booksDB;
        // }
    }

    updateWithLanguageFilter(filters: FilterState) {
        if (filters.FilterLanguage.IsActive && filters.FilterLanguage.Value) {
            this.books = this.booksDB.filter(x => x.Language.Key === filters.FilterLanguage.Value);
        } else {
            this.books = this.booksDB;
        }
    }

    updateWithGenreFilter(filters: FilterState) {
        if (filters.FilterGenre.IsActive && filters.FilterGenre.Value) {
            this.books = this.booksDB.filter(x => x.Genre.Key === filters.FilterGenre.Value);

        } else {
            this.books = this.booksDB;
        }
    }

    add() {

        this.store.dispatch({ type: actions.StockActionTypes.Add, value: this.books });

        console.log(this.store);
    }

    ngOnDestroy(): void {
        this.componentActive = false;
        this.subscription.unsubscribe();
    }
}

