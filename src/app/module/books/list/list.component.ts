import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../../app-state/app.state';
import * as fromCart from './../state/cart-state/index';
import { takeWhile, map, filter } from 'rxjs/operators';
import { BookModel } from 'src/app/models/book.model';
import { SharedService } from 'src/app/shared/service/shared.service';
import { CartModel } from 'src/app/models/cart.model';
import * as fromFilter from './../filter/state/index';
import { FilterState } from '../filter/state/filter.reducer';
import { Subscription } from 'rxjs';
import * as fromStock from './../../stock/state/index';
import * as cartActions from './../state/cart-state/cart.action';

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

    constructor(private store: Store<fromRoot.State>, private shared: SharedService) { }

    ngOnInit() {

        this.books = new Array<BookModel>();

        this.subscription = this.store.pipe(select(fromStock.getBooks)).subscribe((resp: BookModel[]) => {
            console.log(resp);
            this.books = resp;
            this.booksDB = this.books;
        });

        this.store.pipe(
            select(fromCart.getCartItems),
            takeWhile(() => this.componentActive)
        ).subscribe(
            books => {
                console.log('sdf');
                this.cartItems = books;
            }
        );

        this.store.pipe(
            select(fromFilter.getFilters),
        ).subscribe(
            filters => {
                // this.filters = filters;
                console.log(filters);

                if (filters.FilterGenre.IsActive && !filters.FilterLanguage.IsActive) {
                    this.updateWithGenreFilter(filters);
                }
                if (filters.FilterLanguage.IsActive && !filters.FilterGenre.IsActive) {
                    this.updateWithLanguageFilter(filters);
                }
                if (filters.FilterGenre.IsActive && filters.FilterLanguage.IsActive) {
                    this.updateWithLanguageAndGenreFilters(filters);
                }
                if (!filters.FilterGenre.IsActive && !filters.FilterLanguage.IsActive) {
                    this.books = this.booksDB;
                }
            }
        );


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

        // this.store.dispatch({ type: actions.Actions.Add, value: this.books });

        console.log(this.store);
    }

    addToCart(book: BookModel) {
        const cartItem: CartModel = { id: book.id, Name: book.Name, Price: book.Price };
        this.store.dispatch(new cartActions.AddToCart(cartItem));
    }

    ngOnDestroy(): void {
        this.componentActive = false;
        this.subscription.unsubscribe();
    }
}
