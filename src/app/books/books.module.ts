import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { ListComponent } from './list/list.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
    declarations: [ListComponent],
    imports: [
        CommonModule,
        BooksRoutingModule,
    ]
})
export class BooksModule { }
