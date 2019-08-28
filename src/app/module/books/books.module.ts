import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { ListComponent } from './list/list.component';
import { StoreModule } from '@ngrx/store';
import * as filterState from './filter/state/filter.reducer';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { WrapperComponent } from './wrapper/wrapper.component';


@NgModule({
    declarations: [ListComponent, SearchComponent, FilterComponent, WrapperComponent],
    imports: [
        CommonModule,
        BooksRoutingModule,
        FormsModule,
        StoreModule.forFeature('filters', filterState.reducer)
    ]
})
export class BooksModule { }
