import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.prod';
import { SharedService } from './shared/service/shared.service';
import * as fromCart from './module/books/state/cart-state/cart.reducer';
import * as fromStock from './module/stock/state/stock.reducer';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { IBooksMemory } from './container/inmemory.db';
import { EffectsModule } from '@ngrx/effects';
import { StockEffects } from './module/stock/state/stock.effects';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(IBooksMemory),
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({ cart: fromCart.reducer, stock: fromStock.reducer }),

        StoreDevtoolsModule.instrument({
            name: 'State Management with Ngrx',
            maxAge: 25,
            logOnly: environment.production
        }),
        // EffectsModule.forRoot([])
        EffectsModule.forRoot([StockEffects])
    ],
    providers: [SharedService],
    bootstrap: [AppComponent]
})
export class AppModule { }
