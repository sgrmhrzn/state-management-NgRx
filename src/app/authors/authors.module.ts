import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [AuthorsListComponent, ListComponent],
  imports: [
    CommonModule,
    AuthorsRoutingModule
  ]
})
export class AuthorsModule { }
