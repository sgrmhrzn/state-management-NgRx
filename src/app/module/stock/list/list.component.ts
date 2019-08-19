import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookModel } from 'src/app/models/book.model';
import { CartModel } from 'src/app/models/cart.model';
import { Store, select } from '@ngrx/store';
import { SharedService } from 'src/app/shared/service/shared.service';
import { takeWhile } from 'rxjs/operators';
import { FilterState } from '../../books/filter/state/filter.reducer';
import * as actions from '../state/book.actions';
import * as fromRoot from '../../../app-state/app.state';


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

    constructor(private store: Store<fromRoot.State>, private shared: SharedService) { }

    ngOnInit() {

        this.books = new Array<BookModel>();
        this.books = [
            {
                Id: '1', Name: 'Notebook', Price: 500,
                Language: { DisplayTitle: 'English', Key: 'eng' },
                Genre: { DisplayTitle: 'Romantic', Key: 'rom' }
            },
            {
                Id: '2', Name: 'Nepali', Price: 400,
                Language: { DisplayTitle: 'Nepali', Key: 'nep' },
                Genre: { DisplayTitle: 'Academic', Key: 'aca' }
            },
            {
                Id: '3', Name: 'English', Price: 700,
                Language: { DisplayTitle: 'English', Key: 'eng' },
                Genre: { DisplayTitle: 'Academic', Key: 'Academic' }
            },
            {
                Id: '4', Name: 'Science', Price: 220,
                Language: { DisplayTitle: 'English', Key: 'eng' },
                Genre: { DisplayTitle: 'Academic', Key: 'aca' }
            }
        ];

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

        this.store.dispatch({ type: actions.Actions.Add, value: this.books });

        console.log(this.store);
    }

    addToCart(book: BookModel) {
        const existingItem = this.cartItems.find(x => x.Id === book.Id);
        if (existingItem) {
            existingItem.Quantity += 1;
            existingItem.Total = book.Price * existingItem.Quantity;
        } else {
            this.cartItems.push({ Id: book.Id, Name: book.Name, Quantity: 1, Price: book.Price, Total: book.Price * 1 });
        }

        this.store.dispatch({ type: actions.Actions.AddToCart, items: this.cartItems });
    }

    ngOnDestroy(): void {
        this.componentActive = false;
    }
}

