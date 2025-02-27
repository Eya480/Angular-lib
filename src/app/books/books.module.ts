import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BookListComponent,
    BookAddComponent,
    BookEditComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule //aandou des fonc nest7a9ohom
  ]
})
export class BooksModule { }
