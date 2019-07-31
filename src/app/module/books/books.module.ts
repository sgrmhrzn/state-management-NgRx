import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { ListComponent } from './list/list.component';
import { StoreModule } from '@ngrx/store';
import * as bookState from './state/book.reducer';
import * as cartState from './state/cart-state/cart.reducer';

@NgModule({
    declarations: [ListComponent],
    imports: [
        CommonModule,
        BooksRoutingModule,
        // StoreModule.forFeature('cart', cartState.reducer)
    ]
})
export class BooksModule { }
