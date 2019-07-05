import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import * as bookState from './books/state/book.reducer';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({ Books: bookState.reducer })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
