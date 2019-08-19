import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './component/layout.component';
import { HeaderComponent } from 'src/app/shared/component/header/header.component';

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        LayoutRoutingModule,
    ]
})
export class LayoutModule { }
