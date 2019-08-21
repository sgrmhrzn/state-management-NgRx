import { Component, OnInit } from '@angular/core';
import { CartModel } from './models/cart.model';
import { Store } from '@ngrx/store';
import { StockState } from './module/stock/state/stock.reducer';
import * as stockActions from './module/stock/state/stock.actions';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    showCartItems = false;

    componentActive = false;
    title = 'ngrx';
    cart: CartModel[] = [];

    constructor(private store: Store<StockState>) {
        this.store.dispatch(new stockActions.Load());
    }


}
