import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from './app-state/app.state';
import * as fromCart from './module/books/state/cart-state/index';
import { takeWhile } from 'rxjs/operators';
import { BookModel } from './models/book.model';
import { SharedService } from './service/shared.service';
import { CartModel } from './models/cart.model';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    showCartItems = false;

    componentActive = false;
    title = 'ngrx';
    cart: CartModel[] = [];

    constructor(private store: Store<fromRoot.State>, private shared: SharedService) {

    }

    ngOnInit(): void {
        this.componentActive = true;

        this.store.pipe(
            select(fromCart.getCartItems),
            takeWhile(() => this.componentActive)
        ).subscribe(
            items => {
                this.cart = items;
                console.log(items);
            }
        );
    }

    getNetTotal() {
        let netTotal = 0;
        this.cart.forEach(x => { netTotal += x.Total; });
        return netTotal;
    }
}
