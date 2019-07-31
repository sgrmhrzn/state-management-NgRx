import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as actions from '../state/book.actions';
import * as fromRoot from '../../../app-state/app.state';
import * as fromCart from './../state/cart-state/index';
import { takeWhile } from 'rxjs/operators';
import { BookModel } from 'src/app/models/book.model';
import { SharedService } from 'src/app/service/shared.service';
import { CartModel } from 'src/app/models/cart.model';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})


export class ListComponent implements OnInit, OnDestroy {

    books: Array<BookModel>;
    componentActive = true;
    cartItems: Array<CartModel> = [];

    constructor(private store: Store<fromRoot.State>, private shared: SharedService) { }

    ngOnInit() {
        this.store.pipe(
            select(fromCart.getCartItems),
            takeWhile(() => this.componentActive)
        ).subscribe(
            books => {
                this.cartItems = books;
            }
        );

        this.books = new Array<any>();
        this.books = [{ Id: '1', Name: 'Notebook', Price: 500 },
        { Id: '2', Name: 'Social', Price: 500 },
        { Id: '3', Name: 'English', Price: 500 },
        { Id: '4', Name: 'Science', Price: 500 }];

        this.shared.pageLoaded = true;
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
