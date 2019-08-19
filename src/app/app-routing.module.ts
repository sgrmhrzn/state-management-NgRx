import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './module/layout/component/layout.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: './module/layout/layout.module#LayoutModule',

    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
