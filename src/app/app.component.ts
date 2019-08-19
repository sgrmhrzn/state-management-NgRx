import { Component, OnInit } from '@angular/core';
import { CartModel } from './models/cart.model';
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

    constructor() {

    }


}
