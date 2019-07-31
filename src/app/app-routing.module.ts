import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'books-list',
        loadChildren: './module/books/books.module#BooksModule'
    },
    {
        path: 'authors-list',
        loadChildren: './module/authors/authors.module#AuthorsModule'
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
