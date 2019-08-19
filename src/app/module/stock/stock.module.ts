import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
    declarations: [ListComponent],
    imports: [
        CommonModule,
        StockRoutingModule
    ]
})
export class StockModule { }
