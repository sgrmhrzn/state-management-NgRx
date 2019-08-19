import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SharedService } from '../../service/shared.service';
import { takeWhile } from 'rxjs/operators';
import { CartModel } from 'src/app/models/cart.model';
import * as fromRoot from './../../../app-state/app.state';
import * as fromCart from './../../../module/books/state/cart-state/index';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    showCartItems = false;
    componentActive = false;
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
                console.log(this.cart);
            }
        );
    }

    getNetTotal() {
        let netTotal = 0;
        this.cart.forEach(x => { netTotal += x.Total; });
        return netTotal;
    }

}
