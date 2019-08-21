import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
    {
        path: '',
        component: WrapperComponent,
        children: [
            { path: '', component: ListComponent },
            { path: 'form', component: FormComponent },
            { path: 'form/:id', component: FormComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StockRoutingModule { }
