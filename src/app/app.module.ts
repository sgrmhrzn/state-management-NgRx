import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.prod';
import { SharedService } from './shared/service/shared.service';
import * as fromCart from './module/books/state/cart-state/cart.reducer';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({ cart: fromCart.reducer }),
        StoreDevtoolsModule.instrument({
            name: 'State Management with Ngrx',
            maxAge: 25,
            logOnly: environment.production
        })
    ],
    providers: [SharedService],
    bootstrap: [AppComponent]
})
export class AppModule { }
