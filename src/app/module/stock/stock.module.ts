import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/stock.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StockEffects } from './state/stock.effects';

@NgModule({
    declarations: [ListComponent, FormComponent, WrapperComponent],
    imports: [
        CommonModule,
        StockRoutingModule,
        FormsModule,
        // StoreModule.forFeature('stock', reducer),
        // EffectsModule.forFeature([StockEffects])
    ]
})
export class StockModule { }
