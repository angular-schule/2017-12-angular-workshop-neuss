import { BookStoreService } from './../shared/book-store.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor(private service: BookStoreService) { }

  ngOnInit() {
    this.books = this.service.getAllStatic();
    this.reorderBooks();
  }

  reorderBooks(book?: Book) {
    console.log('Buch:', book);
    this.books.sort((a, b) => b.rating - a.rating);
  }

  addBook(book: Book) {
    this.books.push(book);
  }
}
