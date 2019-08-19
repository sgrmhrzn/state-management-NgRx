import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './component/layout.component';

const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [
        {
            path: 'books-list',
            loadChildren: './../books/books.module#BooksModule'
        },
        {
            path: 'stock',
            loadChildren: './../stock/stock.module#StockModule'
        }
    ]
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
