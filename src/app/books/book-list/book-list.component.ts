import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit{
  books? : Book[];
  constructor (private bookService : BookService){}
  ngOnInit (): void {
    this.books = this.bookService.getBooks();
  }

}
